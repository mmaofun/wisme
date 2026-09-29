import { mkdir, copyFile, cp, readFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'dist');
const pages=JSON.parse(await readFile(resolve(root,'data/page-manifest.json'),'utf8'));
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
for(const {file} of pages){await mkdir(dirname(resolve(dist,file)),{recursive:true});await copyFile(resolve(root,file),resolve(dist,file));}
for(const dir of ['assets','css','js'])await cp(resolve(root,dir),resolve(dist,dir),{recursive:true});
for(const file of ['sitemap.xml','robots.txt','.nojekyll'])await copyFile(resolve(root,file),resolve(dist,file));
console.log(`Staged ${pages.length} pages and local assets in dist/. No build sources or business configuration are published.`);
