const enc=new TextEncoder();
export async function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json;charset=UTF-8','cache-control':'no-store',...headers}})}
export async function body(req){try{return await req.json()}catch{return {}}}
function b64(s){return btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
async function sig(payload,secret){const key=await crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);const out=await crypto.subtle.sign('HMAC',key,enc.encode(payload));return b64(String.fromCharCode(...new Uint8Array(out)))}
export async function makeSession(username,secret){const payload=b64(JSON.stringify({u:username,t:Date.now()}));return payload+'.'+await sig(payload,secret)}
export async function isAdmin(req,env){const secret=env.ADMIN_SESSION_SECRET;if(!secret)return false;const cookie=req.headers.get('Cookie')||'';const token=cookie.match(/(?:^|;\s*)census_admin=([^;]+)/)?.[1];if(!token)return false;const [p,s]=token.split('.');if(!p||!s)return false;const good=await sig(p,secret);if(good!==s)return false;try{const x=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(p.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0))));return x.t&&Date.now()-x.t<8*60*60*1000}catch{return false}}
export function cookie(token){return `census_admin=${token}; Path=/; Max-Age=28800; HttpOnly; Secure; SameSite=Lax`}
export const tableNames=['hlbs','enumerators','supervisors','reports','maps','indicators','gallery','notices','downloads','officers','technical_support','settings'];
