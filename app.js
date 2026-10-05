const BASE="https://n8n-d5pc.srv1980546.hstgr.cloud/webhook/";
const D=["Sylhet","Dhaka","Chattogram","Rajshahi","Khulna","Barishal","Rangpur","Mymensingh"];
const $=s=>document.querySelector(s);
const user=JSON.parse(localStorage.getItem("lmp_user")||"null");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>"&#"+c.charCodeAt(0)+";");
const post=async(p,d)=>{let r;try{r=await fetch(BASE+p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}catch(e){console.error(e);return{success:false,message:"Cannot reach server (network/CORS). Is the n8n workflow active?"}}try{return await r.json()}catch(e){return{success:false,message:"Server error "+r.status+" - check n8n workflow is Active and path is /webhook/"+p}}};
const get=async p=>{try{return await(await fetch(BASE+p)).json()}catch(e){console.error(e);return{success:false}}};
const onSubmit=(id,fn)=>{const f=$(id);if(f)f.onsubmit=async e=>{e.preventDefault();$("#msg").textContent="Please wait...";$("#msg").textContent=await fn(Object.fromEntries(new FormData(f)),f)||""}};
const tel=p=>user?`<a href="tel:${esc(p)}">${esc(p)}</a>`:`<a href="login.html">Login to see phone</a>`;
const money=w=>w?"৳"+esc(w)+"/day":"Negotiable";
const hrs=h=>h?" · "+esc(h)+"h/day":"";

const links=[["index.html","Home"],["workers.html","Find Workers"],["jobs.html","Jobs"],["wages.html","Wage Rates"],["blog.html","Blog"],["complaints.html","Complaints"],["about.html","About"]];
$("#nav").innerHTML=`<ul><li><a href="index.html"><strong>Labour Market Place</strong></a></li></ul><ul>`+links.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join("")+(user?(user.role==="worker"?`<li><a href="profile.html">My Profile</a></li>`:"")+`<li>${esc(user.full_name)}</li><li><a href="#" id="out">Logout</a></li>`:`<li><a href="login.html">Login</a></li><li><a href="register.html" role="button">Get Started</a></li>`)+`</ul>`;
if($("#out"))$("#out").onclick=e=>{e.preventDefault();localStorage.removeItem("lmp_user");location="index.html"};
document.querySelectorAll("select[name=district],#f").forEach(s=>s.innerHTML+=D.map(d=>`<option>${d}</option>`).join(""));

onSubmit("#reg",async d=>{if(d.password!==d.confirm)return"Passwords do not match";const r=await post("register",d);if(r.success)location="login.html";return r.message});
onSubmit("#login",async d=>{const r=await post("login",d);if(r.success){localStorage.setItem("lmp_user",JSON.stringify(r.user));location=r.user.role==="worker"?"profile.html":"index.html"}return r.message});

const show=(r,row)=>{$("#list").removeAttribute("aria-busy");$("#list").innerHTML=r.success?r.data.map(row).join("")||"<p>Nothing found yet.</p>":"<p>Could not load. "+esc(r.message||"")+"</p>"};

if($("#f")){
  const w=async()=>show(await get("workers?district="+encodeURIComponent($("#f").value)+"&available="+$("#a").value),x=>`<article class="card"><div class="avatar">${esc((x.full_name||"?").trim()[0]).toUpperCase()}</div><strong>${esc(x.full_name)}</strong> ${user&&x.phone===user.phone?'<span class="tag">You</span> ':""}${x.available===false?'<span class="tag off">Unavailable</span>':'<span class="tag on">Available</span>'}<br><span class="tag">${esc(x.district)}</span> <span class="tag">${esc(x.skill||"General")}</span><p>${money(x.daily_wage)}${hrs(x.hours_per_day)}</p>${tel(x.phone)}</article>`);
  $("#f").onchange=$("#a").onchange=w;w();
}

if($("#post")){
  $("#post").hidden=user?.role!=="client";
  const j=async()=>show(await get("jobs"),x=>`<article class="card"><strong>${esc(x.title)}</strong><br><span class="tag">${esc(x.district)}</span> <span class="tag">${money(x.wage)}${hrs(x.hours)}</span><p>${esc(x.description)}</p><small>${esc(x.client_name)} · ${tel(x.client_phone)}</small></article>`);
  j();
  onSubmit("#jobform",async(d,f)=>{const r=await post("postjob",{...d,client_name:user.full_name,client_phone:user.phone});if(r.success){f.reset();j();return"Job posted!"}return r.message||"Failed"});
}

if($("#prof")){
  if(!user)location="login.html";
  else if(user.role!=="worker")$("#prof").parentElement.innerHTML='<h2>Profile</h2><p>Clients do not need a profile. <a href="jobs.html">Post a job</a></p>';
  else{
    get("workers").then(r=>{const w=(r.data||[]).find(x=>x.phone===user.phone);if(w)for(const k in w){const el=$("#prof [name="+k+"]");if(el&&w[k]!==null)el.value=w[k]}});
    onSubmit("#prof",async d=>{const b={phone:user.phone,password:d.password,available:d.available==="true"};["skill","daily_wage","hours_per_day","nid"].forEach(k=>{if(d[k])b[k]=d[k]});const r=await post("profile",b);return r.success?"Profile saved!":r.message});
  }
}

if($("#wages"))get("workers").then(r=>{const g={};(r.data||[]).forEach(x=>{if(x.daily_wage)(g[x.skill||"General"]??=[]).push(x.daily_wage)});$("#wages").innerHTML=Object.entries(g).map(([k,v])=>`<tr><td>${esc(k)}</td><td>${v.length}</td><td>৳${Math.round(v.reduce((a,b)=>a+b,0)/v.length)}</td><td>৳${Math.min(...v)} - ৳${Math.max(...v)}</td></tr>`).join("")||"<tr><td colspan=4>No data yet.</td></tr>"});