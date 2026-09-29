import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.PORT||4174);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async(req,res)=>{
 try {
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  // Supports both root hosting and a GitHub repository subpath for local QA.
  if(pathname==='/wisme-education') {res.writeHead(302,{Location:'/wisme-education/'});res.end();return;}
  pathname=pathname.replace(/^\/wisme-education\//,'/');
  if(pathname.endsWith('/')) pathname+='index.html';
  const path=resolve(root,'.'+pathname);
  if(!path.startsWith(root+sep)||pathname.split('/').some(s=>s.startsWith('.'))){res.writeHead(403);res.end('Forbidden');return;}
  let body,code=200,extension=extname(path);
  try { if(!(await stat(path)).isFile()) throw new Error('not a file'); body=await readFile(path); }
  catch { body=await readFile(resolve(root,'404.html'));code=404;extension='.html'; }
  res.writeHead(code,{'Content-Type':types[extension]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
  res.end(req.method==='HEAD'?undefined:body);
 } catch {res.writeHead(400);res.end('Bad request');}
}).listen(port,'127.0.0.1',()=>console.log(`Wisme Education: http://127.0.0.1:${port}`));
