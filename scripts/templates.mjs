import { business, programs, categories } from '../data/content.js';
import { policies } from '../data/legal.js';

export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
export const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const prefix = file => '../'.repeat(file.split('/').length - 1);
export const url = (file, destination) => `${prefix(file)}${destination}`;
const shapes = {
  arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  people:'<path d="M16 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3m20 0v-3a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  person:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2z"/>',
  book:'<path d="M12 5v16M3 3c4 0 6 0 9 2 3-2 5-2 9-2v16c-4 0-6 0-9 2-3-2-5-2-9-2z"/>',
  cap:'<path d="m2 9 10-6 10 6-10 6zM6 12v5c4 3 8 3 12 0v-5m4-3v8"/>',
  spark:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4m-13-4h6m-6 3h4"/>',
  chart:'<path d="M3 21h19M6 17V9h4v8m4 0V3h4v14"/>',
  bars:'<path d="M3 21h18M5 18v-5h3v5m3 0V7h3v11m3 0V3h3v15"/>',
  laptop:'<path d="M5 3h14v13H5zM2 20h20l-3-4H5z"/>',
  workflow:'<rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="15" width="7" height="6" rx="1"/><path d="M9 6h8v9M3 18h8m-3-3 3 3-3 3"/>',
  pages:'<path d="M8 3h12v15H8zM4 7H2v15h12v-2M11 7h6m-6 4h6m-6 4h4"/>',
  message:'<path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-6 4v-4H2V5a2 2 0 0 1 2-2zM7 8h10M7 12h7"/>',
  pencil:'<path d="m4 15 12-12a2 2 0 0 1 3 0l2 2a2 2 0 0 1 0 3L9 20l-6 1zM14 5l5 5M4 15l5 5"/>',
  grid:'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
};
export const icon = (name, small = false) => `<svg class="icon${small?' small':''}" viewBox="0 0 24 24" aria-hidden="true">${shapes[name]||shapes.book}</svg>`;
export const link = (file, label, to, classes = 'text-link') => `<a class="${classes}" href="${esc(url(file,to))}"><span>${esc(label)}</span>${icon('arrow',true)}</a>`;
export const button = (file, label, to, variant = '') => link(file,label,to,`button ${variant}`.trim());
export const enquiryURL = (type='General Enquiry', program='') => `contact.html?type=${encodeURIComponent(type)}${program?`&program=${encodeURIComponent(program)}`:''}`;
export const brand = file => `<a class="brand" href="${url(file,'index.html')}" aria-label="Wisme Education home"><span class="brand-name">wisme</span><span class="brand-sub">Education</span></a>`;
export function header(file) {
  const nav = [['Corporate Training','corporate-training.html'],['Education Solutions','education-solutions.html'],['Programs','programs.html'],['About','about.html'],['Insights','insights.html']];
  return `<a href="#main" class="skip-link">Skip to content</a><header class="site-header"><div class="container header-inner">${brand(file)}<button class="menu-toggle" aria-expanded="false" aria-controls="site-navigation" hidden>${icon('menu',true)}<span data-menu-label>Menu</span></button><nav class="site-nav" id="site-navigation" aria-label="Main navigation">${nav.map(([label,dest])=>`<a href="${url(file,dest)}"${file===dest||dest==='programs.html'&&file.startsWith('programs/')?' aria-current="page"':''}>${label}</a>`).join('')}${button(file,'Enquire','contact.html')}</nav></div></header>`;
}
export function footer(file) {
  const column = (title,links) => `<div class="footer-col"><h2>${title}</h2>${links.map(([label,to])=>`<a href="${url(file,to)}">${label}</a>`).join('')}</div>`;
  return `<footer class="site-footer"><div class="container"><div class="footer-top"><div class="footer-brand">${brand(file)}<p>Practical AI and digital skills for a more capable tomorrow.</p>${business.legalEntityName?`<p>${esc(business.legalEntityName)}</p>`:''}${business.ABN?`<p>ABN ${esc(business.ABN)}</p>`:''}${business.email?`<a class="text-link" href="mailto:${esc(business.email)}">${esc(business.email)}</a>`:''}</div>${column('For organisations',[['Corporate Training','corporate-training.html'],['Education Solutions','education-solutions.html'],['How we work','how-we-work.html'],['Request a proposal',enquiryURL('Corporate Training')]])}${column('Professional learning',[['For individuals','for-individuals.html'],['All programs','programs.html'],['Pricing & options','pricing.html'],['Digital Skills Academy','academy.html'],['Frequently asked questions','faq.html']])}${column('Wisme Education',[['About Wisme','about.html'],['Our learning approach','learning-approach.html'],['Insights','insights.html'],['Contact','contact.html'],['Policies & information','legal/index.html'],['Accessibility','legal/accessibility.html']])}</div><div class="footer-bottom"><p>© <span data-year>2026</span> Wisme Education.</p><nav class="footer-legal" aria-label="Policies">${policies.filter(p=>['terms-and-conditions','privacy-policy','refund-cancellation-policy'].includes(p.slug)).map(p=>`<a href="${url(file,`legal/${p.slug}.html`)}">${({'terms-and-conditions':'Terms & Conditions','privacy-policy':'Privacy Policy','refund-cancellation-policy':'Refund & Cancellation','website-terms':'Website terms','complaints-policy':'Complaints','disclaimer':'Disclaimer','cookie-policy':'Cookies'})[p.slug]}</a>`).join('')}</nav></div></div></footer>`;
}
export function crumbs(file, title, parent) {
  return `<div class="container"><nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="${url(file,'index.html')}">Home</a></li>${parent?`<li><a href="${url(file,parent[1])}">${esc(parent[0])}</a></li>`:''}<li aria-current="page">${esc(title)}</li></ol></nav></div>`;
}
export function pageKind(file) {
  if(file==='index.html') return 'home';
  if(file.startsWith('legal/')) return file==='legal/index.html'?'policy-index':'policy';
  if(file.startsWith('insights/')) return 'article';
  if(file.startsWith('programs/')) return 'program';
  if(file.startsWith('corporate-training/')||file.startsWith('education-solutions/')) return 'service';
  if(file.startsWith('subjects/')) return 'subject';
  return file.replace('.html','');
}
export function pageHero(file,title,description,{label='',actions='',aside='',parent=null}={}) {
  const names={'programs.html':'Programs','corporate-training.html':'Corporate Training','education-solutions.html':'Education Solutions','academy.html':'Digital Skills Academy','pricing.html':'Pricing','about.html':'About','faq.html':'Frequently asked questions','contact.html':'Contact','insights.html':'Insights','how-we-work.html':'How we work','learning-approach.html':'Our learning approach','for-individuals.html':'For individuals'};
  const media={'programs.html':'laptop','academy.html':'laptop','about.html':'workspace','pricing.html':'materials','for-individuals.html':'laptop','learning-approach.html':'materials','how-we-work.html':'workspace','insights.html':'materials'};
  const kind=pageKind(file);
  const image=media[file]||(kind==='program'?'laptop':kind==='subject'?'materials':kind==='service'?(file.startsWith('corporate-training/')?'workspace':'materials'):null);
  if(image) aside=photo(file,image,'','small-image');
  const visual=aside?`<div class="hero-media">${aside}</div>`:'';
  return `${crumbs(file,names[file]||title,parent)}<section class="page-hero"><div class="container${visual?' hero-split':''}"><div class="page-hero-copy">${label?`<span class="section-label">${esc(label)}</span>`:''}<h1>${esc(title)}</h1><p>${esc(description)}</p>${actions?`<div class="actions">${actions}</div>`:''}</div>${visual}</div></section>`;
}
export function brandBand(file,title,text,{items=[],action='',to='',status=''}={}) {
  return `<section class="brand-band"><div class="container brand-band-inner"><div class="brand-band-copy"><h2>${esc(title)}</h2>${text?`<p>${esc(text)}</p>`:''}</div>${items.length?`<div class="brand-band-items">${items.map(([symbol,name,detail])=>`<div>${icon(symbol)}<h3>${esc(name)}</h3><p>${esc(detail)}</p></div>`).join('')}</div>`:''}${status?`<div class="brand-band-status">${icon('clock')}<h3>Coming soon</h3><p>${esc(status)}</p></div>`:''}${action?button(file,action,to,'white'):''}</div></section>`;
}
export function pathwayStrip(file,title,text,label,to,image='laptop') {
  return `<div class="pathway-strip"><div><h2>${esc(title)}</h2><p>${esc(text)}</p></div>${button(file,label,to,'outline')}${photo(file,image,'')}</div>`;
}
export function cta(file,title='Let’s talk about your team.',description='Explore how Wisme Education can help build the skills and capability to achieve what’s next.',type='Corporate Training',label='Discuss team training',program='') {
  return `<section class="cta-band"><div class="container cta-inner"><div><h2>${esc(title)}</h2><p>${esc(description)}</p></div>${button(file,label,enquiryURL(type,program),'white')}</div></section>`;
}
export const accordion=items=>`<div class="accordion">${items.map(([q,a],i)=>`<details><summary>${esc(q)}</summary><div class="answer"><p>${esc(a)}</p></div></details>`).join('')}</div>`;
export const checklist=items=>`<ul class="check-list">${items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`;
export function card(file,p,heading='h2') {return `<article class="program-card" data-program-category="${esc(p.category)}"><div class="program-row-main"><span class="program-category">${esc(p.category)}</span><${heading}><a href="${url(file,`programs/${p.slug}.html`)}">${esc(p.name)}</a></${heading}><p>${esc(p.description)}</p></div><div class="program-row-action">${link(file,'View program',`programs/${p.slug}.html`)}</div></article>`;}
export function process(file,compact=false) {
  const steps=[['message','Discuss','We learn about your goals, challenges and what success looks like.'],['pencil','Design','We shape a learning program around your people, roles and priorities.'],['people','Deliver','Practical learning connects the concepts with relevant workplace tasks.']];
  return `<section class="section pale"><div class="container"><div class="section-head"><div><span class="section-label">How we work</span><h2>A clear path from goals to learning.</h2></div><p>A collaborative approach to define the learning your organisation needs.</p></div><div class="process-grid">${steps.map(([symbol,title,text])=>`<div class="process-step"><div class="icon-circle">${icon(symbol)}</div><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div></div></section>`;
}
export const photo=(file,name,alt,classes='')=>`<img class="${classes}" src="${url(file,`assets/images/${name}.webp`)}" alt="${esc(alt)}" width="600" height="450" loading="lazy">`;

export function document(file,title,description,content,{form=false,siteURL='',is404=false}={}) {
  const canonical=siteURL?`${siteURL.replace(/\/$/,'')}/${file==='index.html'?'':file}`:'';
  const org={ '@context':'https://schema.org','@type':'Organization',name:business.name,...(siteURL?{url:siteURL}:{}),...(business.email?{email:business.email}:{}) };
  return `<!doctype html>\n<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${is404?`<base href="${esc(siteURL?siteURL+'/':'/')}">`:''}<meta name="theme-color" content="#102b42"><title>${esc(title)} | Wisme Education</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${business.indexable&&!is404?'index,follow':'noindex,nofollow'}">${canonical?`<link rel="canonical" href="${esc(canonical)}">`:''}<meta property="og:type" content="website"><meta property="og:site_name" content="Wisme Education"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}">${canonical?`<meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(siteURL.replace(/\/$/,'')+'/assets/images/hero.webp')}">`:''}<meta name="twitter:card" content="summary_large_image"><link rel="icon" href="${url(file,'assets/icons/favicon.svg')}" type="image/svg+xml"><link rel="preload" href="${url(file,'assets/fonts/inter-latin.woff2')}" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${url(file,'css/styles.css')}"><link rel="stylesheet" href="${url(file,'css/pages.css')}"><script src="${url(file,'js/main.js')}" defer></script>${form?`<script src="${url(file,'js/forms.js')}" defer></script>`:''}${file==='index.html'?`<script type="application/ld+json">${JSON.stringify(org).replace(/</g,'\\u003c')}</script>`:''}</head><body class="page-${pageKind(file)}">${header(file)}<main id="main" tabindex="-1">${content}</main>${footer(file)}</body></html>\n`;
}
