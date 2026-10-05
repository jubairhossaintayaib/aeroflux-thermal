import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
for(const file of ['app.js','build.mjs','content.mjs','serve.cjs'])execFileSync(process.execPath,['--check',file],{stdio:'inherit'});
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
const failures=[];let links=0,assets=0;
for(const file of pages){const html=fs.readFileSync(file,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(`${file}: expected one h1`);if(!html.includes('lang="en-GB"'))failures.push(`${file}: missing locale`);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);if(ids.length!==new Set(ids).size)failures.push(`${file}: duplicate IDs`);for(const [,attr,value] of html.matchAll(/\b(href|src)="([^"]*)"/g)){if(/^(https?:|data:|tel:|mailto:)/.test(value))continue;if(!value){failures.push(`${file}: empty ${attr}`);continue;}const [target,anchor]=value.split('#');const local=target.split('?')[0]||file;if(!fs.existsSync(local)){failures.push(`${file}: missing ${value}`);continue;}if(anchor){const targetHtml=fs.readFileSync(local,'utf8');if(!targetHtml.includes(`id="${anchor}"`))failures.push(`${file}: missing anchor ${value}`);}if(attr==='href')links++;else assets++;}}
console.log(JSON.stringify({pages:pages.length,checkedLocalLinks:links,checkedAssets:assets,failures},null,2));
if(failures.length)process.exitCode=1;
