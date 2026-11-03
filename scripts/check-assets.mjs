// Ensure the central asset registry stays accurate and public assets are not scattered.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root=process.cwd();
const registry=JSON.parse(readFileSync(join(root,'src/data/assets.json'),'utf8'));
const errors=[];
const local=Object.entries(registry.local ?? {});
if(!local.length)errors.push('Asset manifest contains no local assets.');
for(const [name,record] of local){
  const path=record?.path;
  if(typeof path!=='string'||!path.startsWith('assets/')||path.includes('..')){errors.push(name+': expected safe relative path under assets/');continue;}
  if(!existsSync(join(root,'public',path)))errors.push(name+': missing public/'+path);
}
for(const [name,record] of Object.entries(registry.external ?? {})){
  if(!record.url?.startsWith('https://'))errors.push(name+': missing HTTPS source URL');
  if(!record.credit||!record.creditUrl||!record.license||!record.licenseUrl)errors.push(name+': missing source credit/license metadata');
}
if(!registry.fonts?.stylesheetUrl?.startsWith('https://'))errors.push('Missing external font stylesheet URL.');
for(const path of ['src/components/Hero.astro','src/layouts/Layout.astro']){
  const source=readFileSync(join(root,path),'utf8');
  if(source.includes('alabama-capitol-mark.svg')||source.includes('BASE_URL}favicon.svg'))errors.push(path+': references a retired asset path');
}
if(errors.length){console.error('Asset validation failed:\n'+errors.map(x=>'- '+x).join('\n'));process.exit(1);}
console.log('Assets OK: '+local.length+' bundled, '+Object.keys(registry.external).length+' external artwork source(s); local paths and credits verified.');
