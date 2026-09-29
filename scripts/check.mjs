import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const pages=JSON.parse(await readFile(resolve(root,'data/page-manifest.json'),'utf8'));
const errors=[], titles=new Set(),descriptions=new Set();
if(pages.length!==50)errors.push(`Expected 50 pages, found ${pages.length}`);
for(const {file} of pages){
 const html=await readFile(resolve(root,file),'utf8');
 for(const [label,regex,set] of [['title',/<title>(.*?)<\/title>/,titles],['description',/<meta name="description" content="([^"]*)">/,descriptions]]){
  const value=html.match(regex)?.[1];if(!value||set.has(value))errors.push(`${file}: missing or duplicate ${label}`);set.add(value);
 }
 if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(`${file}: expected one H1`);
 if(!html.includes('lang="en-AU"')||!html.includes('id="main"'))errors.push(`${file}: missing document semantics`);
 if(/Lorem ipsum|REPLACE_WITH|forms are not sent|Preview only|fake testimonial/i.test(html))errors.push(`${file}: unresolved public placeholder`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  let dest=match[1].replaceAll('&amp;','&');
  if(/^(https?:|mailto:|tel:|data:)/.test(dest)||dest==='/')continue;
  const [path,hash]=dest.split('#'), clean=path.split('?')[0];
  const target=clean?resolve(dirname(resolve(root,file)),decodeURIComponent(clean)):resolve(root,file);
  try{await access(target)}catch{errors.push(`${file}: broken file link ${dest}`);continue}
  if(hash&&target.endsWith('.html')){const content=await readFile(target,'utf8');if(!content.includes(`id="${hash}"`))errors.push(`${file}: missing anchor ${dest}`);}
 }
}
for(const file of ['css/styles.css','js/main.js','js/forms.js','assets/fonts/inter-latin.woff2'])await access(resolve(root,file));
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`PASS: ${pages.length} pages, unique metadata, headings, local links, image paths and section anchors.`);
