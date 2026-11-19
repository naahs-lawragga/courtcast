/* CourtCast v9 protocol validation. No network or storage access. */
(function(root){'use strict';
const INVITE_TTL=300000, token=v=>typeof v==='string'&&/^[a-f0-9]{32}$/.test(v),peerId=v=>typeof v==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(v),record=v=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.getPrototypeOf(v)===Object.prototype;
const exact=(v,keys)=>record(v)&&Object.keys(v).every(k=>keys.includes(k))&&Object.keys(v).length<=keys.length;
const newToken=()=>Array.from(root.crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join('');
const inviteValid=(key,expires,used,now=Date.now())=>token(key)&&Number.isFinite(expires)&&now<expires&&used===false;
const validRequest=(v,key)=>exact(v,['type','force','token'])&&v.type==='request'&&typeof v.force==='boolean'&&token(key)&&v.token===key;
const validMedia=(v,key)=>exact(v,['kind','token'])&&v.kind==='courtcast-v9-media'&&token(key)&&v.token===key;
const dimension=v=>v===null||(Number.isInteger(v)&&v>0&&v<=16384);
const validMessage=v=>{if(!record(v))return false;switch(v.type){case 'approved':return exact(v,['type','token'])&&token(v.token);case 'state':return exact(v,['type','sharing'])&&typeof v.sharing==='boolean';case 'quality':return exact(v,['type','label'])&&typeof v.label==='string'&&v.label.length<=80;case 'orientation':return exact(v,['type','angle','landscape','mobile','width','height'])&&[null,0,90,180,270].includes(v.angle)&&typeof v.landscape==='boolean'&&typeof v.mobile==='boolean'&&dimension(v.width)&&dimension(v.height);default:return false}};
function rateGate(limit,windowMs,clock=Date.now){let timestamps=[];return ()=>{const now=clock();timestamps=timestamps.filter(t=>now-t<windowMs);if(timestamps.length>=limit)return false;timestamps.push(now);return true}}
const api=Object.freeze({INVITE_TTL,token,peerId,newToken,inviteValid,validRequest,validMedia,validMessage,rateGate});Object.defineProperty(root,'CCSecurity',{value:api,writable:false,configurable:false});
})(globalThis);
