const GENRES=['Action','Adventure','Animation','Anime','Biography','Children','Classic 50','Classics','Comedy','Crime','Documentary','Drama','Family','Faith / Inspiration','Fantasy','Film Noir','History','Holiday','Horror','Independent','International','Musical','Music','Mystery','Romance','Rom Com','Science Fiction','Sci Fi','Sports','Thriller','War','Western'].sort((a,b)=>a.localeCompare(b));
const CLASSIC_50=["Casablanca", "The Godfather", "Citizen Kane", "The Wizard of Oz", "Lawrence of Arabia", "12 Angry Men", "Singin' in the Rain", "Rear Window", "Vertigo", "North by Northwest", "Psycho", "It's a Wonderful Life", "Gone with the Wind", "On the Waterfront", "The Searchers", "Some Like It Hot", "Sunset Boulevard", "The Apartment", "To Kill a Mockingbird", "Dr. Strangelove", "The Graduate", "2001: A Space Odyssey", "The Sound of Music", "Chinatown", "Jaws", "Rocky", "Star Wars", "Annie Hall", "Apocalypse Now", "Alien", "Raiders of the Lost Ark", "E.T.", "Blade Runner", "Back to the Future", "The Princess Bride", "Do the Right Thing", "Goodfellas", "The Silence of the Lambs", "Unforgiven", "Schindler's List", "Pulp Fiction", "The Shawshank Redemption", "Toy Story", "Fargo", "Titanic", "The Matrix", "Spirited Away", "The Lord of the Rings: The Fellowship of the Ring", "Eternal Sunshine of the Spotless Mind", "Moonlight"];
const CLASSIC_IDS=new Set(['casablanca','the-godfather','spirited-away']);
const STREAMERS=['Netflix','Prime Video','Disney+','Apple TV','Angel','Max','Hulu','Peacock','Paramount+'];
const SHOWTIME_DATA_URL='./scraped-showtimes.json?v=v6-streaming-first-20260721T032256Z';
let showtimeDataPromise=null;
let inlineShowtimeData=null;
let inlineShowtimeError=null;
let inlineShowtimeLoadStarted=false;
const MOVIES=[
 {id:'dune-2',title:'Dune: Part Two',year:2024,months:4,genres:['Sci Fi','Adventure'],view:'sponsored',providers:['In theaters','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Dune+Part+Two+trailer',c1:'#9a3412',c2:'#111827',synopsis:'A big-screen science-fiction spectacle. Availability: in theaters; rental later.'},
 {id:'toy-story-5',title:'Toy Story 5',year:2026,months:0,genres:['Children','Family','Animation','Comedy'],view:'sponsored',providers:['In theaters','Disney+'],trailer:'https://www.youtube.com/results?search_query=Toy+Story+5+trailer',c1:'#2563eb',c2:'#f59e0b',synopsis:'Family theater title used to test the Webedia / The Boxoffice Company Source adapter contract for ZIP 48180.'},
 {id:'inside-out-2',title:'Inside Out 2',year:2024,months:2,genres:['Children','Comedy'],view:'sponsored',providers:['In theaters','Disney+'],trailer:'https://www.youtube.com/results?search_query=Inside+Out+2+trailer',c1:'#d946ef',c2:'#0891b2',synopsis:'Family-friendly animated sequel. Availability: in theaters; Disney+ later.'},
 {id:'past-lives',title:'Past Lives',year:2023,months:12,genres:['Drama','Rom Com'],view:'ad-free',providers:['Netflix','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Past+Lives+trailer',c1:'#0f766e',c2:'#1e293b',synopsis:'A quiet adult drama about memory, love, and the roads not taken.'},
 {id:'oppenheimer',title:'Oppenheimer',year:2023,months:11,genres:['Drama','History'],view:'vod',providers:['Prime Video','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Oppenheimer+trailer',c1:'#7f1d1d',c2:'#111827',synopsis:'Prestige historical drama. Availability: streaming/rental providers.'},
 {id:'casablanca',title:'Casablanca',year:1942,months:999,genres:['Classic 50','Classics','Romance','Rom Com'],view:'ad-free',providers:['Apple TV','Prime Video'],trailer:'https://www.youtube.com/results?search_query=Casablanca+trailer',c1:'#334155',c2:'#020617',synopsis:'Classic 50 starter pick. Availability routes are rental/purchase search links in this prototype.',classic:true},
 {id:'the-holdovers',title:'The Holdovers',year:2023,months:9,genres:['Comedy','Drama'],view:'vod',providers:['Prime Video','Apple TV'],trailer:'https://www.youtube.com/results?search_query=The+Holdovers+trailer',c1:'#365314',c2:'#111827',synopsis:'Warm character-driven movie-night recommendation.'},
 {id:'barbie',title:'Barbie',year:2023,months:11,genres:['Comedy','Fantasy'],view:'sponsored',providers:['Max','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Barbie+movie+trailer',c1:'#be185d',c2:'#f9a8d4',synopsis:'Popular comedy/fantasy with clear provider routing.'},
 {id:'the-godfather',title:'The Godfather',year:1972,months:999,genres:['Classic 50','Classics','Crime','Drama'],view:'ad-free',providers:['Paramount+','Apple TV'],trailer:'https://www.youtube.com/results?search_query=The+Godfather+trailer',c1:'#111827',c2:'#450a0a',synopsis:'Classic 50 crime drama saved as a title, not just a trailer.',classic:true},
 {id:'wicked',title:'Wicked',year:2024,months:1,genres:['Fantasy','Music'],view:'sponsored',providers:['In theaters'],trailer:'https://www.youtube.com/results?search_query=Wicked+movie+trailer',c1:'#166534',c2:'#581c87',synopsis:'First-run theater title. Availability: in theaters; use Tribute / Now Playing for times.'},
 {id:'angel-studios',title:'Sound of Hope',year:2024,months:3,genres:['Faith / Inspiration','Drama'],view:'all',providers:['Angel','In theaters'],trailer:'https://www.youtube.com/results?search_query=Sound+of+Hope+trailer',c1:'#1d4ed8',c2:'#0f172a',synopsis:'Faith/inspiration lane with theater and Angel-platform routing.'},
 {id:'civil-war',title:'Civil War',year:2024,months:5,genres:['Thriller','Drama'],view:'sponsored',providers:['In theaters','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Civil+War+movie+trailer',c1:'#78350f',c2:'#0f172a',synopsis:'Current-release thriller. Theater availability is high level only.'},
 {id:'spirited-away',title:'Spirited Away',year:2001,months:999,genres:['Classic 50','Anime','Fantasy','Children','Family'],view:'ad-free',providers:['Max','Apple TV'],trailer:'https://www.youtube.com/results?search_query=Spirited+Away+trailer',c1:'#0e7490',c2:'#312e81',synopsis:'Classic 50 anime/family pick for saved-title library behavior.',classic:true}
];
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const storeKey='mmeTomReviewProfile'; const profilesKey='mmeTomReviewProfiles'; const activeProfileKey='mmeTomReviewActiveProfile'; const libKey='mmeTomReviewLibrary'; const libStateKey='mmeTomReviewLibraryV2'; const showtimeCacheKey='mmeShowtimeCacheV1'; const showtimeCacheTtlMs=12*60*60*1000;
let profiles=JSON.parse(localStorage.getItem(profilesKey)||'{}');
let activeProfileName=localStorage.getItem(activeProfileKey)||'';
let profile=activeProfileName&&profiles[activeProfileName]?profiles[activeProfileName]:JSON.parse(localStorage.getItem(storeKey)||'{}');
function parseStoredJson(key,fallback){try{return JSON.parse(localStorage.getItem(key)||'')}catch(_){return fallback}}
function normalizeMap(v){return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}
function loadLibraryState(){let raw=parseStoredJson(libStateKey,null);let legacy=parseStoredJson(libKey,[]);let state=raw&&typeof raw==='object'?raw:{saved:{},liked:{},disliked:{},discarded:{},notes:{}};state.saved=normalizeMap(state.saved);state.liked=normalizeMap(state.liked);state.disliked=normalizeMap(state.disliked);state.discarded=normalizeMap(state.discarded);state.notes=normalizeMap(state.notes);if(Array.isArray(legacy)){legacy.forEach(id=>{if(id&&!state.saved[id])state.saved[id]=new Date().toISOString()})}return state;}
let libraryState=loadLibraryState();
function librarySavedIds(){return Object.keys(libraryState.saved||{}).filter(id=>MOVIES.some(m=>m.id===id));}
function libraryAllIds(){return [...new Set([...Object.keys(libraryState.saved||{}),...Object.keys(libraryState.liked||{}),...Object.keys(libraryState.disliked||{}),...Object.keys(libraryState.discarded||{})])].filter(id=>MOVIES.some(m=>m.id===id));}
function isSaved(id){return Boolean(libraryState.saved&&libraryState.saved[id]);}
function isLiked(id){return Boolean(libraryState.liked&&libraryState.liked[id]);}
function isDiscarded(id){return Boolean((libraryState.discarded&&libraryState.discarded[id])||(libraryState.disliked&&libraryState.disliked[id]));}
function stamp(){return new Date().toISOString();}
function save(){localStorage.setItem(storeKey,JSON.stringify(profile));localStorage.setItem(profilesKey,JSON.stringify(profiles));localStorage.setItem(activeProfileKey,activeProfileName||'');localStorage.setItem(libKey,JSON.stringify(librarySavedIds()));localStorage.setItem(libStateKey,JSON.stringify(libraryState));}
function profileKeyFromForm(){return ($('#profileName')?.value.trim()||$('#userName')?.value.trim()||'Default profile')}
function refreshProfilePicker(){let picker=$('#profilePicker'); if(!picker)return; let names=Object.keys(profiles).sort((a,b)=>a.localeCompare(b)); picker.innerHTML='<option value="">New profile</option>'+names.map(n=>`<option value="${n.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">${n}</option>`).join(''); picker.value=activeProfileName&&profiles[activeProfileName]?activeProfileName:''}
function selectedGenres(){return [...$('#genreSelect').selectedOptions].map(o=>o.value)}
function selectedProviders(){if($('#platformAll').checked)return ['All'];return $$('.provider:checked').map(x=>x.value)}
function init(){GENRES.forEach(g=>{let o=document.createElement('option');o.value=o.textContent=g;$('#genreSelect').appendChild(o)});STREAMERS.forEach(s=>{let l=document.createElement('label');l.className='check';l.innerHTML=`<input class="provider" type="checkbox" value="${s}"> ${s}`;$('#streamers').appendChild(l)});refreshProfilePicker();applyProfileToForm();bind();bindLibraryControls();render();}
function applyProfileToForm(){if(profile.userName)$('#userName').value=profile.userName;if($('#profileName'))$('#profileName').value=activeProfileName||profile.profileName||profile.userName||'';if(profile.genres){[...$('#genreSelect').options].forEach(o=>o.selected=profile.genres.includes(o.value))}if(profile.release)$$('input[name=release]').forEach(r=>r.checked=r.value===profile.release);if(profile.fromYear)$('#fromYear').value=profile.fromYear;if(profile.toYear)$('#toYear').value=profile.toYear;if(profile.view)$('#viewSelect').value=profile.view;if(profile.zip){$('#zipInput').value=profile.zip;if($('#quickLocation'))$('#quickLocation').value=profile.zip}if(profile.providers){$('#platformAll').checked=profile.providers.includes('All');$$('.provider').forEach(c=>c.checked=profile.providers.includes(c.value))}renderShowtimeCacheStatus();}
function bind(){if($('#profilePicker'))$('#profilePicker').onchange=()=>{let name=$('#profilePicker').value;if(name&&profiles[name]){activeProfileName=name;profile={...profiles[name]};applyProfileToForm();save();render();}};if($('#deleteProfile'))$('#deleteProfile').onclick=()=>{let name=$('#profilePicker')?.value||activeProfileName;if(name&&profiles[name]){delete profiles[name];activeProfileName='';profile={};save();refreshProfilePicker();applyProfileToForm();render();}};$('#profileForm').addEventListener('submit',e=>{e.preventDefault();profile.userName=$('#userName').value.trim()||'Guest';profile.profileName=profileKeyFromForm();profile.genres=selectedGenres();profile.release=$('input[name=release]:checked').value;profile.fromYear=$('#fromYear').value;profile.toYear=$('#toYear').value;profile.view=$('#viewSelect').value;profile.zip=$('#zipInput').value.trim();profile.providers=selectedProviders();activeProfileName=profile.profileName;profiles[activeProfileName]={...profile};save();refreshProfilePicker();render();location.hash='titles'});$('#savePlatforms').onclick=()=>{$('#profileForm').requestSubmit()};$('#platformAll').onchange=()=>{if($('#platformAll').checked)$$('.provider').forEach(c=>c.checked=false)};$$('.provider').forEach(c=>c.onchange=()=>{if(c.checked)$('#platformAll').checked=false});$('#demoProfile').onclick=()=>{profile={userName:'Tom',profileName:'Tom demo profile',genres:['Classic 50','Drama','Comedy','Crime'],release:'any',view:'all',zip:'48180',providers:['All']};activeProfileName=profile.profileName;profiles[activeProfileName]={...profile};refreshProfilePicker();applyProfileToForm();save();render();location.hash='titles'};$('#searchBox').addEventListener('input',render);$('#resetBtn').onclick=()=>{$('#searchBox').value='';render()};if($('#quickLocationForm'))$('#quickLocationForm').addEventListener('submit',e=>{e.preventDefault();let loc=$('#quickLocation').value.trim()||'48180';profile.zip=loc;if($('#zipInput'))$('#zipInput').value=loc;let name=activeProfileName||profile.profileName||profile.userName||'Quick location';if(name){profile.profileName=profile.profileName||name;activeProfileName=name;profiles[activeProfileName]={...profile};}save();renderShowtimeCacheStatus(`Location: ${loc}. Times update on cards.`);render();});if($('#clearShowtimeCache'))$('#clearShowtimeCache').onclick=()=>{localStorage.removeItem(showtimeCacheKey);showtimeDataPromise=null;inlineShowtimeData=null;inlineShowtimeError=null;inlineShowtimeLoadStarted=false;renderShowtimeCacheStatus('Refreshing showtimes…');render();};$('#closeModal').onclick=()=>$('#detailsModal').close();}
function selectedClassic50(){return Boolean(profile.genres&&profile.genres.includes('Classic 50'));}
function renderClassicLane(){let el=$('#classicLane');if(!el)return;let selected=selectedClassic50();let preview=CLASSIC_50.slice(0,8).map(t=>`<span class="classic-pill">${escHtml(t)}</span>`).join('');el.classList.toggle('compact-classic',true);el.innerHTML=`<div class="classic-lane-head"><div><p class="eyebrow">Classic 50</p><h3>Curated starter list</h3>${selected?`<p class="muted">Showing the Classic 50 lane with sample cards below.</p>`:`<p class="muted">Optional shortcut for recognized films.</p>`}</div><button id="classic50Btn" class="secondary" type="button">${selected?'Selected':'Use'}</button></div>${selected?`<div class="classic-pills">${preview}<span class="classic-pill more">+${CLASSIC_50.length-8}</span></div>`:''}`;let btn=$('#classic50Btn');if(btn)btn.onclick=()=>{profile.userName=profile.userName||'Tom';profile.profileName=profile.profileName||'Tom demo profile';let genres=new Set(profile.genres||[]);genres.add('Classic 50');profile.genres=[...genres];activeProfileName=profile.profileName;profiles[activeProfileName]={...profile};applyProfileToForm();save();render();location.hash='titles'};}
function passMovie(m){let q=$('#searchBox').value.trim().toLowerCase();if(isDiscarded(m.id))return false;if(q&&!(`${m.title} ${m.year} ${m.genres.join(' ')} ${m.providers.join(' ')} ${m.synopsis}`.toLowerCase().includes(q)))return false;if(profile.genres&&profile.genres.length&&!m.genres.some(g=>profile.genres.includes(g))&&!(profile.genres.includes('Classic 50')&&(m.classic||CLASSIC_IDS.has(m.id))))return false;if(profile.release&&profile.release!=='any'&&m.months>Number(profile.release))return false;if(profile.fromYear&&m.year<Number(profile.fromYear))return false;if(profile.toYear&&m.year>Number(profile.toYear))return false;if(profile.view&&profile.view!=='all'&&m.view!==profile.view)return false;if(profile.providers&&profile.providers.length&&!profile.providers.includes('All')&&!m.providers.some(p=>profile.providers.includes(p)))return false;return true;}
function render(){renderSummary();renderClassicLane();renderResults();renderLibrary();if((localStorage.getItem('mmeTomReviewDiscoveryModeV6')||profile.mode||'streaming')==='theater')ensureInlineShowtimes();}
function renderSummary(){let genres=profile.genres?.length?profile.genres.join(', '):'all genres';let providers=profile.providers?.length?profile.providers.join(', '):'all platforms';$('#profileSummary').innerHTML=profile.userName?`<strong>${profile.profileName||profile.userName}</strong><br>User: ${profile.userName}<br>${genres}<br>${providers}`:'No profile saved yet.';$('#libraryCount').textContent=librarySavedIds().length;}
function handleLibraryAction(action,id){if(!id)return;let now=stamp();if(action==='save'){libraryState.saved[id]=now;delete libraryState.discarded[id];delete libraryState.disliked[id];}if(action==='like'){libraryState.saved[id]=now;libraryState.liked[id]=now;delete libraryState.disliked[id];delete libraryState.discarded[id];}if(action==='dislike'){libraryState.disliked[id]=now;libraryState.discarded[id]=now;delete libraryState.saved[id];delete libraryState.liked[id];}if(action==='discard'){libraryState.discarded[id]=now;delete libraryState.saved[id];delete libraryState.liked[id];}if(action==='restore'){delete libraryState.discarded[id];delete libraryState.disliked[id];libraryState.saved[id]=now;}if(action==='remove'){delete libraryState.saved[id];delete libraryState.liked[id];}save();render();}
function renderResults(){let list=MOVIES.filter(passMovie);$('#results').innerHTML=list.map(m=>card(m)).join('');$('#emptyState').classList.toggle('hidden',list.length>0);$$('[data-library-action]').forEach(b=>b.onclick=()=>handleLibraryAction(b.dataset.libraryAction,b.dataset.id));}
function card(m){let saved=isSaved(m.id),liked=isLiked(m.id);return `<article class="movie-card" style="--c1:${m.c1};--c2:${m.c2}" draggable="true" ondragstart="event.dataTransfer.setData('text/plain','${m.id}')"><div class="poster-glow"></div><p class="eyebrow">${m.year} · ${m.view}${liked?' · liked':saved?' · saved':''}</p><h3>${m.title}</h3><div class="chips">${m.genres.map(g=>`<span class="chip">${g}</span>`).join('')}${m.providers.map(p=>`<span class="chip">${p}</span>`).join('')}</div><p>${m.synopsis}</p>${renderInlineShowtimes(m)}<div class="card-actions library-card-actions"><a target="_blank" rel="noopener" href="${m.trailer}">Trailer</a><button class="save" data-library-action="save" data-id="${m.id}" type="button">${saved?'Saved':'Save'}</button><button data-library-action="like" data-id="${m.id}" type="button">${liked?'Liked':'Like'}</button><button data-library-action="discard" data-id="${m.id}" type="button">Discard</button></div></article>`}

function escHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function sourceUrlForRow(r){let raw=String(r?.source_url||r?.ticket_url||'');if(/^https?:\/\//.test(raw)&&!raw.includes('example.invalid'))return raw;return SHOWTIME_DATA_URL;}
function showtimeInfo(r,data){let src=r.source_label||r.source||data?.source||'local showtime data';let generated=r.source_generated_at||data?.generated_at||'';return `${r.title||'Movie'} · ${r.display_time||r.starts_at||'time TBD'} · ${r.theater||'Theater'} · ${r.location||showtimeLocation()} · source: ${src}${generated?' · updated '+generated:''} · confidence: ${r.confidence||'prototype'}`;}
function ensureInlineShowtimes(force=false){if(inlineShowtimeData&&!force)return;if(inlineShowtimeLoadStarted&&!force)return;inlineShowtimeLoadStarted=true;loadShowtimeData(force).then(data=>{inlineShowtimeData=data;inlineShowtimeError=null;renderShowtimeCacheStatus();renderResults();renderLibrary();}).catch(err=>{inlineShowtimeError=err;renderResults();renderLibrary();});}
function renderInlineShowtimes(m){
  const location=showtimeLocation();
  if(inlineShowtimeError){let links=providerLinkouts(m.title,location,null);let first=links[0]?.url||SHOWTIME_DATA_URL;return `<div class="showtime-mini is-error" title="Local showtime data could not load."><span>Times unavailable</span><a class="data-source-link" target="_blank" rel="noopener" href="${escHtml(first)}" data-more="${escHtml('Open provider/source lookup for '+m.title)}">source</a></div>`;}
  if(!inlineShowtimeData){return `<div class="showtime-mini is-loading" title="Loading local cached showtime data for ${escHtml(location)}"><span>Loading times…</span></div>`;}
  const rows=rowsForMovie(m,inlineShowtimeData);
  const sourceHref=rows[0]?sourceUrlForRow(rows[0]):(providerLinkouts(m.title,location,inlineShowtimeData)[0]?.url||SHOWTIME_DATA_URL);
  if(!rows.length){return `<div class="showtime-mini is-empty" title="No matched local rows for ${escHtml(m.title)} at ${escHtml(location)} yet."><span>No local times</span><a class="data-source-link" target="_blank" rel="noopener" href="${escHtml(sourceHref)}" data-more="${escHtml('Open source/provider lookup for '+m.title+' near '+location)}">source</a></div>`;}
  const visible=rows.slice(0,2).map(r=>{let time=r.display_time || (r.starts_at?new Date(r.starts_at).toLocaleString([], {hour:'numeric',minute:'2-digit'}):'time TBD');let info=showtimeInfo(r,inlineShowtimeData);return `<a class="showtime-pill" target="_blank" rel="noopener" href="${escHtml(sourceUrlForRow(r))}" title="${escHtml(info)}" data-more="${escHtml(info)}"><strong>${escHtml(time)}</strong><span>${escHtml(r.theater||'Theater')}</span></a>`}).join('');
  const more=rows.length>2?`<span class="showtime-more" data-more="${escHtml(rows.slice(2).map(r=>showtimeInfo(r,inlineShowtimeData)).join('\n'))}" title="${escHtml(rows.slice(2).map(r=>showtimeInfo(r,inlineShowtimeData)).join('\n'))}">+${rows.length-2}</span>`:'';
  const sourceLabel=rows[0]?.source_label||rows[0]?.source||inlineShowtimeData.source||'showtime source';
  return `<div class="inline-showtimes" title="Mouse over a time for theater, location, source, and confidence."><div class="inline-showtimes-head"><span>${rows.length} time${rows.length===1?'':'s'} near ${escHtml(location)}</span><a class="data-source-link" target="_blank" rel="noopener" href="${escHtml(sourceHref)}" title="Open data source page" data-more="${escHtml(sourceLabel)}">source</a></div><div class="inline-showtime-pills">${visible}${more}</div></div>`;
}

function readShowtimeCache(){try{return JSON.parse(localStorage.getItem(showtimeCacheKey)||'null')}catch(_){return null}}
function writeShowtimeCache(data){try{localStorage.setItem(showtimeCacheKey,JSON.stringify({url:SHOWTIME_DATA_URL,storedAt:Date.now(),data}));renderShowtimeCacheStatus();}catch(_){}}
function validShowtimeCache(c){return c&&c.url===SHOWTIME_DATA_URL&&c.data&&Date.now()-Number(c.storedAt||0)<showtimeCacheTtlMs}
function showtimeCacheAge(c){let ms=Date.now()-Number(c?.storedAt||0);if(!Number.isFinite(ms)||ms<0)return 'unknown age';let m=Math.floor(ms/60000);if(m<1)return 'just now';if(m<60)return `${m} min ago`;return `${Math.floor(m/60)} hr ago`;}
function renderShowtimeCacheStatus(msg){let el=$('#showtimeCacheStatus');if(!el)return;let c=readShowtimeCache();if(msg){el.textContent=msg;return;}if(validShowtimeCache(c)){let count=Array.isArray(c.data?.showtimes)?c.data.showtimes.length:0;let loc=showtimeLocation();el.textContent=`${count} cached rows · ${loc} · ${showtimeCacheAge(c)}`;}else{el.textContent=`No fresh cache · ${showtimeLocation()}`;}}
function loadShowtimeData(force=false){
  if(!force){let cached=readShowtimeCache();if(validShowtimeCache(cached)){let data={...cached.data,_cache:{state:'local',storedAt:cached.storedAt,age:showtimeCacheAge(cached)}};renderShowtimeCacheStatus();return Promise.resolve(data);}}
  if(!showtimeDataPromise||force){
    showtimeDataPromise=fetch(SHOWTIME_DATA_URL,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('showtime data '+r.status);return r.json();}).then(data=>{writeShowtimeCache(data);return {...data,_cache:{state:'fresh',storedAt:Date.now(),age:'just now'}}});
  }
  return showtimeDataPromise;
}
function showtimeLocation(){return (profile&&profile.zip)||($('#quickLocation')&&$('#quickLocation').value.trim())||'48180';}
function providerLinkouts(title,location,data){
  const templates=Array.isArray(data?.provider_templates)?data.provider_templates:[];
  const encodedTitle=encodeURIComponent(title);
  const encodedQuery=encodeURIComponent(`${title} showtimes ${location||'near me'}`);
  const encodedLocation=encodeURIComponent(location||'');
  const encodedZip=encodeURIComponent((profile&&profile.zip)||location||'');
  const built=templates.map(t=>({label:t.label||t.provider||'Provider',url:String(t.url||'#').replace('{title}',encodedTitle).replace('{query}',encodedQuery).replace('{location}',encodedLocation).replace('{zip}',encodedZip)}));
  return built.length?built:[{label:'Google showtimes search',url:'https://www.google.com/search?q='+encodedQuery}];
}
function rowsForMovie(m,data){
  const title=m.title.toLowerCase();
  const loc=String(showtimeLocation()||'').toLowerCase().trim();
  const rows=(Array.isArray(data?.showtimes)?data.showtimes:[]).filter(r=>String(r.title||'').toLowerCase()===title || String(r.title||'').toLowerCase().includes(title) || title.includes(String(r.title||'').toLowerCase()));
  return rows.sort((a,b)=>Number(String(b.location||'').toLowerCase().includes(loc))-Number(String(a.location||'').toLowerCase().includes(loc)));
}
function formatShowtime(r){
  const time=r.display_time || (r.starts_at?new Date(r.starts_at).toLocaleString([], {month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}):'time TBD');
  return `<a target="_blank" rel="noopener" href="${escHtml(r.ticket_url||'#')}"><strong>${escHtml(r.theater||'Theater')}</strong><span>${escHtml(time)} · ${escHtml(r.location||'Location TBD')}</span></a>`;
}
function renderShowtimePanel(m,data,error){
  const location=showtimeLocation();
  const rows=rowsForMovie(m,data);
  const links=providerLinkouts(m.title,location,data);
  let html='<p class="hint theater-caveat">Prototype caveat: streaming and theater routes are search/hot-link behavior. Real local showtimes, ticketing, and availability require API/licensing integrations.</p><p class="eyebrow">Showtime routing preview</p>';
  if(error){html+='<p class="muted">Scraped data could not be loaded, so provider search links are shown.</p>';}
  else{let cacheLabel=data?._cache?.state==='local'?` · cached locally ${data._cache.age}`:' · freshly loaded and cached locally';html+=`<p class="muted">${escHtml(data?.source||'Local scraped showtime data')} · Location: ${escHtml(location)}${escHtml(cacheLabel)}</p>`;}
  if(rows.length){html+=`<div class="route-list showtime-list">${rows.map(formatShowtime).join('')}</div>`;}
  else{html+='<p class="muted">No scraped rows matched this title yet. Use provider linkouts below.</p>';}
  html+=`<div class="route-list">${links.map(l=>`<a target="_blank" rel="noopener" href="${escHtml(l.url)}">${escHtml(l.label)}</a>`).join('')}</div>`;
  return html;
}

function showDetails(m){
  const streaming=m.providers.filter(p=>p!=='In theaters').map(p=>`<a target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(m.title+' '+p)}">${escHtml(p)}</a>`).join('');
  $('#modalBody').innerHTML=`<p class="eyebrow">Availability</p><h2>${escHtml(m.title)}</h2><p>${escHtml(m.synopsis)}</p><div class="route-list">${streaming}<a target="_blank" rel="noopener" href="https://www.imdb.com/find/?q=${encodeURIComponent(m.title)}">IMDb title search</a></div><p class="hint theater-caveat">Prototype caveat: streaming and theater routes are search/hot-link behavior. Real local showtimes, ticketing, and availability require API/licensing integrations.</p><p class="eyebrow">Showtime routing preview</p><p>Loading local scraped showtime data…</p>`;
  $('#detailsModal').showModal();
  loadShowtimeData().then(data=>{
    $('#modalBody').innerHTML=`<p class="eyebrow">Availability</p><h2>${escHtml(m.title)}</h2><p>${escHtml(m.synopsis)}</p><div class="route-list">${streaming}<a target="_blank" rel="noopener" href="https://www.imdb.com/find/?q=${encodeURIComponent(m.title)}">IMDb title search</a></div>${renderShowtimePanel(m,data)}`;
  }).catch(err=>{
    $('#modalBody').innerHTML=`<p class="eyebrow">Availability</p><h2>${escHtml(m.title)}</h2><p>${escHtml(m.synopsis)}</p><div class="route-list">${streaming}<a target="_blank" rel="noopener" href="https://www.imdb.com/find/?q=${encodeURIComponent(m.title)}">IMDb title search</a></div>${renderShowtimePanel(m,null,err)}`;
  });
}
function libraryEntry(m){let status=isDiscarded(m.id)?'discarded':isLiked(m.id)?'liked':isSaved(m.id)?'saved':'none';return {...m,status,note:libraryState.notes[m.id]||''};}
function libraryEntries(){let ids=libraryAllIds();return ids.map(id=>MOVIES.find(m=>m.id===id)).filter(Boolean).map(libraryEntry);}
function libraryStatusText(e){return e.status==='liked'?'Liked':e.status==='discarded'?'Discarded / disliked':'Saved';}
function sortLibraryEntries(entries){let sort=$('#librarySort')?.value||'title-az';let key=(m)=>m.title.toLowerCase();if(sort==='title-za')return entries.sort((a,b)=>key(b).localeCompare(key(a)));if(sort==='newest')return entries.sort((a,b)=>b.year-a.year||key(a).localeCompare(key(b)));if(sort==='oldest')return entries.sort((a,b)=>a.year-b.year||key(a).localeCompare(key(b)));if(sort==='genre')return entries.sort((a,b)=>(a.genres[0]||'').localeCompare(b.genres[0]||'')||key(a).localeCompare(key(b)));if(sort==='provider')return entries.sort((a,b)=>(a.providers[0]||'').localeCompare(b.providers[0]||'')||key(a).localeCompare(key(b)));return entries.sort((a,b)=>key(a).localeCompare(key(b)));}
function filterLibraryEntries(entries){let status=$('#libraryStatus')?.value||'active';let q=($('#librarySearch')?.value||'').trim().toLowerCase();return entries.filter(e=>{let statusOk=status==='all'||(status==='active'&&e.status!=='discarded')||e.status===status||(status==='saved'&&e.status==='saved');if(!statusOk)return false;if(q&&!`${e.title} ${e.year} ${e.genres.join(' ')} ${e.providers.join(' ')} ${e.view} ${e.synopsis} ${e.note}`.toLowerCase().includes(q))return false;return true;});}
function groupKey(e){let group=$('#libraryGroup')?.value||'genre';if(group==='none')return 'All selected titles';if(group==='title')return e.title[0].toUpperCase();if(group==='year')return String(e.year);if(group==='provider')return e.providers[0]||'Other';if(group==='view')return e.view;return e.genres[0]||'Other';}
function libraryItemHtml(e){let discarded=e.status==='discarded';return `<div class="library-item library-item-rich ${discarded?'is-discarded':''}"><div class="library-item-head"><strong>${escHtml(e.title)}</strong><span class="library-status ${e.status}">${libraryStatusText(e)}</span></div><span class="muted">${e.year} · ${e.genres.join(', ')} · ${e.providers.join(', ')}</span><p>${escHtml(e.synopsis)}</p>${renderInlineShowtimes(e)}<label class="library-note-label">Notes<textarea data-note="${e.id}" placeholder="Add why this belongs in Tom's queue...">${escHtml(e.note)}</textarea></label><div class="library-actions"><a target="_blank" rel="noopener" href="${e.trailer}">Trailer</a>${discarded?`<button data-library-action="restore" data-id="${e.id}" type="button">Restore</button>`:`<button data-library-action="like" data-id="${e.id}" type="button">${e.status==='liked'?'Liked':'Like'}</button><button data-library-action="remove" data-id="${e.id}" type="button">Remove</button><button data-library-action="discard" data-id="${e.id}" type="button">Discard</button>`}</div></div>`;}
function bindLibraryRenderedControls(){ $$('[data-library-action]').forEach(b=>b.onclick=()=>handleLibraryAction(b.dataset.libraryAction,b.dataset.id));$$('[data-note]').forEach(t=>t.onchange=()=>{libraryState.notes[t.dataset.note]=t.value.trim();save();renderLibrary();});}
function renderLibrary(){let all=libraryEntries();let savedCount=librarySavedIds().length,likedCount=Object.keys(libraryState.liked||{}).length,discardedCount=Object.keys(libraryState.discarded||{}).length;let filtered=sortLibraryEntries(filterLibraryEntries(all));let trailers=$('#trailerLibrary'), titles=$('#titleLibrary'), stats=$('#libraryStats');if(!trailers||!titles)return;trailers.ondragover=e=>e.preventDefault();trailers.ondrop=e=>{let id=e.dataTransfer.getData('text/plain');if(id){handleLibraryAction('save',id)}};if(stats)stats.textContent=`${savedCount} saved · ${likedCount} liked · ${discardedCount} discarded · ${filtered.length} showing`;let active=filtered.filter(e=>e.status!=='discarded');trailers.innerHTML=active.length?active.map(libraryItemHtml).join(''):'<p class="muted">Save, like, or drag trailers from Slide 3 into the library. Discarded titles are hidden here unless restored.</p>';let groups={};filtered.forEach(e=>(groups[groupKey(e)]??=[]).push(e));titles.innerHTML=filtered.length?Object.keys(groups).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).map(g=>`<div class="library-group"><h4>${escHtml(g)}</h4>${groups[g].map(libraryItemHtml).join('')}</div>`).join(''):'<p class="muted">No library items match the current filters.</p>';bindLibraryRenderedControls();}
function bindLibraryControls(){['librarySearch','libraryStatus','librarySort','libraryGroup'].forEach(id=>{let el=$('#'+id);if(el)el.addEventListener(id==='librarySearch'?'input':'change',renderLibrary)});let exp=$('#exportLibrary');if(exp)exp.onclick=()=>{let data=JSON.stringify({exportedAt:stamp(),profile,library:libraryEntries()},null,2);let blob=new Blob([data],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='moviesmadeeasy-library.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};let clear=$('#clearDiscarded');if(clear)clear.onclick=()=>{if(confirm('Clear discarded/disliked titles from this demo library?')){libraryState.discarded={};libraryState.disliked={};save();render();}};}
window.archiveTitle=id=>handleLibraryAction('remove',id);
init();

const MME_THEME_KEY='mmeTomReviewTheme';
const MME_THEMES=[
  {id:'cinema',name:'Cinema Night'},
  {id:'golden',name:'Golden Age'},
  {id:'neon',name:'Neon Pop'},
  {id:'family',name:'Cozy Family'},
  {id:'matinee',name:'Light Matinee'},
  {id:'drivein',name:'Midnight Drive-In'},
  {id:'redcarpet',name:'Red Carpet'},
  {id:'ocean',name:'Ocean Premiere'}
];
function mmeApplyTheme(theme){
  const fallback=MME_THEMES[0].id;
  const id=MME_THEMES.some(t=>t.id===theme)?theme:fallback;
  document.documentElement.dataset.theme=id;
  localStorage.setItem(MME_THEME_KEY,id);
}
function mmeInitThemes(){
  const picker=$('#themePicker');
  if(!picker)return;
  picker.innerHTML=MME_THEMES.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  const saved=localStorage.getItem(MME_THEME_KEY)||MME_THEMES[0].id;
  const theme=MME_THEMES.some(t=>t.id===saved)?saved:MME_THEMES[0].id;
  picker.value=theme;
  mmeApplyTheme(theme);
  picker.addEventListener('change',()=>mmeApplyTheme(picker.value));
}
mmeInitThemes();


// WHEEL_SCROLL_FIX_V1: defensive fallback for desktop mouse wheels when modal/dev overlay layers swallow native page scroll.
function mmeCanScrollNode(node,dy){
  if(!node||node===document||node===window)return false;
  const style=getComputedStyle(node);
  const overflowY=style.overflowY;
  if(!/(auto|scroll|overlay)/.test(overflowY))return false;
  const max=node.scrollHeight-node.clientHeight;
  if(max<=1)return false;
  return dy>0?node.scrollTop<max-1:node.scrollTop>1;
}
function mmeScrollableAncestor(target,dy){
  let node=target;
  while(node&&node!==document.body&&node!==document.documentElement){
    if(mmeCanScrollNode(node,dy))return node;
    node=node.parentElement;
  }
  return null;
}
function mmeInstallWheelScrollFallback(){
  if(window.__mmeWheelScrollFix)return;
  window.__mmeWheelScrollFix=true;
  window.addEventListener('wheel',ev=>{
    if(ev.defaultPrevented||ev.ctrlKey||ev.metaKey)return;
    const dy=ev.deltaY||0;
    if(!dy)return;
    if(mmeScrollableAncestor(ev.target,dy))return;
    const se=document.scrollingElement||document.documentElement;
    const max=se.scrollHeight-se.clientHeight;
    if(max<=1)return;
    const before=se.scrollTop;
    const next=Math.max(0,Math.min(max,before+dy));
    if(Math.abs(next-before)<1)return;
    ev.preventDefault();
    document.documentElement.classList.add('mme-wheel-scroll-now');
    se.scrollTop=next;
    requestAnimationFrame(()=>document.documentElement.classList.remove('mme-wheel-scroll-now'));
  },{capture:true,passive:false});
}
mmeInstallWheelScrollFallback();


// STREAMING_FIRST_V6 20260721T032256Z: Tom requested streaming be separated from theatrical, with streaming as the primary app path.
const MME_V6_MODE_KEY='mmeTomReviewDiscoveryModeV6';
const MME_V6_MODES=[
  {id:'streaming',label:'Streaming first',icon:'🍿',note:'Find movies to stream/rent tonight, then save decisions.'},
  {id:'theater',label:'Theater later',icon:'🎟️',note:'Secondary lane for first-run/showtime route QA only.'},
  {id:'general',label:'General web',icon:'🔎',note:'Trailer + provider research without narrowing to one lane.'}
];
function mmeStreamingProviders(m){return (m.providers||[]).filter(p=>p!=='In theaters');}
function mmeHasStreaming(m){return mmeStreamingProviders(m).length>0;}
function mmeHasTheater(m){return (m.providers||[]).includes('In theaters');}
function mmeMode(){
  const saved=localStorage.getItem(MME_V6_MODE_KEY)||profile.mode||'streaming';
  return MME_V6_MODES.some(m=>m.id===saved)?saved:'streaming';
}
function mmeModeConfig(){return MME_V6_MODES.find(m=>m.id===mmeMode())||MME_V6_MODES[0];}
function mmeSetMode(mode){
  if(!MME_V6_MODES.some(m=>m.id===mode))mode='streaming';
  profile.mode=mode;
  localStorage.setItem(MME_V6_MODE_KEY,mode);
  if(activeProfileName&&profiles[activeProfileName])profiles[activeProfileName]={...profiles[activeProfileName],mode};
  save();
  mmeSyncModeDom();
  render();
}
function mmeSyncModeDom(){
  const mode=mmeMode();
  document.body.dataset.discoveryMode=mode;
  $$('.mode-card').forEach(btn=>btn.classList.toggle('active',btn.dataset.mode===mode));
  $$('.mode-card input').forEach(input=>input.checked=input.value===mode);
  const status=$('#modeStatus');
  if(status){const c=mmeModeConfig();status.textContent=`${c.icon} ${c.label}: ${c.note}`;}
  const theater=$('#showtimeLocationPanel');
  if(theater){
    theater.classList.toggle('secondary-theater-panel',mode!=='theater');
    theater.hidden=mode!=='theater';
  }
}
function mmeRenderModeSwitcher(){
  if($('#discoveryModePanel')){mmeSyncModeDom();return;}
  const titles=$('#titles .section-head');
  if(!titles)return;
  const panel=document.createElement('div');
  panel.id='discoveryModePanel';
  panel.className='discovery-mode-panel card';
  panel.innerHTML=`<div><p class="eyebrow">Discovery mode</p><h3>Split streaming, theaters, and web research.</h3><p id="modeStatus" class="muted"></p></div><div class="mode-grid">${MME_V6_MODES.map(m=>`<button class="mode-card" data-mode="${m.id}" type="button"><span>${m.icon}</span><strong>${m.label}</strong><small>${m.note}</small><input type="radio" name="mmeV6Mode" value="${m.id}" aria-label="${m.label}"></button>`).join('')}</div>`;
  titles.insertAdjacentElement('afterend',panel);
  $$('.mode-card').forEach(btn=>btn.addEventListener('click',()=>mmeSetMode(btn.dataset.mode)));
  mmeSyncModeDom();
}
function mmeInstallHeroGuide(){
  if($('#v6Guide'))return;
  const actions=$('#home .actions');
  if(!actions)return;
  const guide=document.createElement('div');
  guide.id='v6Guide';
  guide.className='v6-guide';
  guide.innerHTML=`<div class="v6-guide-card primary-guide"><span>1</span><strong>Start with streaming</strong><small>Provider chips and stream/rent actions are the main recommendation path.</small></div><div class="v6-guide-card"><span>2</span><strong>Preview the trailer</strong><small>Use trailer/search links without comments, reviews, or TV clutter.</small></div><div class="v6-guide-card"><span>3</span><strong>Save to Library</strong><small>Like, discard, restore, note, group, sort, and export decisions.</small></div><div class="v6-guide-card later"><span>4</span><strong>Theater later</strong><small>Showtime data is now explicitly secondary and prototype-scoped.</small></div>`;
  actions.insertAdjacentElement('afterend',guide);
}
function mmeStreamingLink(provider,title){
  const queries={
    'Netflix':`${title} Netflix`,
    'Prime Video':`${title} Prime Video rent watch`,
    'Disney+':`${title} Disney Plus`,
    'Apple TV':`${title} Apple TV rent`,
    'Angel':`${title} Angel Studios watch`,
    'Max':`${title} Max streaming`,
    'Hulu':`${title} Hulu streaming`,
    'Peacock':`${title} Peacock streaming`,
    'Paramount+':`${title} Paramount Plus streaming`
  };
  return 'https://www.google.com/search?q='+encodeURIComponent(queries[provider]||`${title} ${provider} watch`);
}
function mmeRenderStreamingBlock(m){
  const mode=mmeMode();
  const streaming=mmeStreamingProviders(m);
  const theater=mmeHasTheater(m);
  if(mode==='theater'){
    return `<div class="theater-mode-note"><strong>🎟️ Theater lane</strong><span>Secondary route/linkout QA; not the main streaming-first path.</span></div>${mmeOriginalRenderInlineShowtimes(m)}`;
  }
  if(mode==='general'){
    return `<div class="streaming-block general-block"><div class="streaming-head"><strong>🔎 General movie web</strong><span>Trailer + provider research</span></div><div class="streaming-routes"><a target="_blank" rel="noopener" href="${escHtml(m.trailer)}">Trailer search</a><a target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(m.title+' movie where to watch')}">Where to watch</a></div></div>`;
  }
  if(!streaming.length){
    return `<div class="streaming-block theater-parked"><div class="streaming-head"><strong>🎟️ Parked for theater lane</strong><span>This is theatrical-only in the demo.</span></div><button class="mini-mode-link" type="button" onclick="mmeSetMode('theater')">Switch to Theater later</button></div>`;
  }
  const badges=streaming.map(p=>`<a target="_blank" rel="noopener" class="streaming-pill" href="${mmeStreamingLink(p,m.title)}">${escHtml(p)}</a>`).join('');
  const hint=theater?'Theater info exists, but is separated into the later lane.':'No theater lane needed for this result.';
  return `<div class="streaming-block"><div class="streaming-head"><strong>🍿 Stream/rent first</strong><span>${escHtml(hint)}</span></div><div class="streaming-routes">${badges}</div></div>`;
}
const mmeOriginalPassMovie=passMovie;
passMovie=function(m){
  if(!mmeOriginalPassMovie(m))return false;
  const mode=mmeMode();
  if(mode==='streaming')return mmeHasStreaming(m);
  if(mode==='theater')return mmeHasTheater(m);
  return true;
};
const mmeOriginalRenderInlineShowtimes=renderInlineShowtimes;
renderInlineShowtimes=function(m){return mmeRenderStreamingBlock(m);};
card=function(m){
  let saved=isSaved(m.id),liked=isLiked(m.id),mode=mmeMode();
  let next=mode==='theater'?'Check theater route':mode==='general'?'Research where to watch':'Pick a streaming route';
  let badge=mode==='theater'?'🎟️ Theater later':mode==='general'?'🔎 General web':'🍿 Streaming first';
  return `<article class="movie-card v6-card" style="--c1:${m.c1};--c2:${m.c2}" draggable="true" ondragstart="event.dataTransfer.setData('text/plain','${m.id}')"><div class="poster-glow"></div><p class="eyebrow">${m.year} · ${m.view}${liked?' · liked':saved?' · saved':''}</p><h3>${m.title}</h3><div class="v6-intent-row"><span class="v6-badge">${badge}</span><small>${next}</small></div><div class="chips">${m.genres.map(g=>`<span class="chip">${g}</span>`).join('')}${m.providers.map(p=>`<span class="chip ${p==='In theaters'?'theater-chip':'stream-chip'}">${p}</span>`).join('')}</div><p>${m.synopsis}</p>${renderInlineShowtimes(m)}<div class="card-actions library-card-actions"><a target="_blank" rel="noopener" href="${m.trailer}">Trailer</a><button class="save" data-library-action="save" data-id="${m.id}" type="button">${saved?'Saved':'Save'}</button><button data-library-action="like" data-id="${m.id}" type="button">${liked?'Liked':'Like'}</button><button data-library-action="discard" data-id="${m.id}" type="button">Discard</button></div></article>`;
};
const mmeOriginalRender=render;
render=function(){
  mmeOriginalRender();
  mmeRenderModeSwitcher();
  mmeInstallHeroGuide();
  mmeSyncModeDom();
};
function mmeInstallV6(){
  document.body.classList.add('mme-v6-streaming-first');
  if(!localStorage.getItem(MME_V6_MODE_KEY)&&!profile.mode)localStorage.setItem(MME_V6_MODE_KEY,'streaming');
  mmeRenderModeSwitcher();
  mmeInstallHeroGuide();
  mmeSyncModeDom();
  render();
}
mmeInstallV6();


// STREAMING_FIRST_V6_LAZY_THEATER_DATA 20260721T032256Z: do not load showtime data unless the secondary theater lane is selected.
const mmeOriginalEnsureInlineShowtimes=ensureInlineShowtimes;
ensureInlineShowtimes=function(force=false){
  if(mmeMode()!=='theater'&&!force){
    inlineShowtimeLoadStarted=false;
    renderShowtimeCacheStatus('Theater/showtime data waits for Theater later mode.');
    return;
  }
  return mmeOriginalEnsureInlineShowtimes(force);
};
render();
