const enc=new TextEncoder();
export async function body(request){return await request.json()}
export async function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json;charset=utf-8'}})}
export async function sign(payload,secret){const key=await crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);const sig=await crypto.subtle.sign('HMAC',key,enc.encode(payload));return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
export async function verify(token,secret){if(!token)return false;const [p,s]=token.split('.');if(!p||!s)return false;const good=await sign(p,secret);return good===s}
export async function requireAdmin(request,env){const c=request.headers.get('Cookie')||'';const m=c.match(/census_admin=([^;]+)/);if(!(await verify(m?.[1],env.ADMIN_SESSION_SECRET)))return false;return true}
