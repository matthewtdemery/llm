const MOVIES = [
  {id:'dune-2', title:'Dune: Part Two', year:2024, runtime:166, score:95, list:['popular','top','theaters'], route:'theater', genre:['Sci-fi','Epic'], mood:['spectacle','serious'], providers:['AMC / Regal / Alamo','Apple TV / iTunes'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Apple TV / iTunes':'Preorder / Rent later'}, color:['#b45309','#111827'], synopsis:'A big-screen spectacle for people who want the theater to feel worth it.', why:'The trailer sells scale. Route clarity matters because the best experience is theatrical first.'},
  {id:'inside-out-2', title:'Inside Out 2', year:2024, runtime:96, score:91, list:['popular','theaters','family','under2'], route:'theater', genre:['Animation','Family'], mood:['family','funny'], providers:['AMC / Regal / Alamo','Prime Video'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Prime Video':'Rent later'}, color:['#e879f9','#22d3ee'], synopsis:'A family-safe pick with a fast trailer-first decision path.', why:'Parents need quick confidence: family-safe, short runtime, and a clear theater route.'},
  {id:'past-lives', title:'Past Lives', year:2023, runtime:106, score:94, list:['top','streaming','under2'], route:'streaming', genre:['Drama','Romance'], mood:['quiet','thoughtful','award'], providers:['Netflix','Apple TV / iTunes'], availability:{'Netflix':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#0f766e','#1e293b'], synopsis:'A slower, adult drama where mood matching matters more than popularity.', why:'A good example of profile-driven discovery beyond blockbuster sorting.'},
  {id:'oppenheimer', title:'Oppenheimer', year:2023, runtime:180, score:93, list:['top','popular','streaming'], route:'streaming', genre:['Drama','History'], mood:['serious','award'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#7f1d1d','#111827'], synopsis:'For users asking for prestige, awards, and a long-form night.', why:'Long runtime should be visible before the user commits.'},
  {id:'casablanca', title:'Casablanca', year:1942, runtime:102, score:99, list:['top','classics','under2'], route:'rent-buy', genre:['Classic','Romance'], mood:['classic','timeless'], providers:['Apple TV / iTunes','Prime Video'], availability:{'Apple TV / iTunes':'Rent / Buy', 'Prime Video':'Rent / Buy'}, color:['#334155','#020617'], synopsis:'A clean example of classic-library discovery without TV clutter.', why:'Tom’s decade/classic preference becomes a real filter, not a buried category.'},
  {id:'civil-war', title:'Civil War', year:2024, runtime:109, score:82, list:['popular','theaters','under2'], route:'theater', genre:['Thriller','Drama'], mood:['intense','current','serious'], providers:['AMC / Regal / Alamo','Apple TV / iTunes'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Apple TV / iTunes':'Rent later'}, color:['#78350f','#0f172a'], synopsis:'Current-release routing where users need theater versus later-home clarity.', why:'Prevents the App Store competitor problem: users know exactly what action is next.'},
  {id:'the-holdovers', title:'The Holdovers', year:2023, runtime:133, score:92, list:['top','streaming'], route:'streaming', genre:['Comedy','Drama'], mood:['warm','award'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#365314','#111827'], synopsis:'A profile-friendly recommendation for warm, character-driven movie nights.', why:'Shows how the app can surface mood fit, not just availability.'},
  {id:'barbie', title:'Barbie', year:2023, runtime:114, score:88, list:['popular','streaming','under2'], route:'streaming', genre:['Comedy','Fantasy'], mood:['bright','social','funny'], providers:['Netflix','Apple TV / iTunes'], availability:{'Netflix':'Streaming window', 'Apple TV / iTunes':'Rent / Buy'}, color:['#be185d','#f9a8d4'], synopsis:'Popular and social, but still needs provider clarity before a user commits.', why:'Good for testing whether familiar popular sorting is enough or if profiles improve it.'},
  {id:'anora', title:'Anora', year:2024, runtime:139, score:90, list:['top','theaters'], route:'theater', genre:['Drama','Comedy'], mood:['festival','adult','award'], providers:['AMC / Regal / Alamo'], availability:{'AMC / Regal / Alamo':'Limited showtimes'}, color:['#9f1239','#312e81'], synopsis:'A smaller theatrical title where discovery and local route clarity matter.', why:'Limited release routing is exactly where honest availability labels matter.'},
  {id:'mi-fallout', title:'Mission: Impossible — Fallout', year:2018, runtime:147, score:89, list:['popular','streaming'], route:'streaming', genre:['Action','Thriller'], mood:['action','spectacle'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#1d4ed8','#020617'], synopsis:'A high-confidence action fallback for users who want energy.', why:'Profiles should support “just give me a good action movie tonight.”'},
  {id:'paddington-2', title:'Paddington 2', year:2017, runtime:103, score:98, list:['top','family','under2'], route:'rent-buy', genre:['Family','Comedy'], mood:['family','warm','funny'], providers:['Apple TV / iTunes','Prime Video'], availability:{'Apple TV / iTunes':'Rent / Buy', 'Prime Video':'Rent / Buy'}, color:['#dc2626','#1d4ed8'], synopsis:'A safe, joyful family pick when the profile says “no risk tonight.”', why:'A “safe pick” label can be more useful than another popularity rank.'},
  {id:'godfather', title:'The Godfather', year:1972, runtime:175, score:98, list:['top','classics'], route:'streaming', genre:['Classic','Crime'], mood:['classic','serious'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#111827','#7f1d1d'], synopsis:'A canonical classic for users who want prestige and old-school weight.', why:'Classic users need decade/library clarity without mixing TV shows.'}
];

const els = {};
let state = {
  list:'all', query:'', route:'all', provider:'all', mood:'all', runtime:'all',
  saved:new Set(JSON.parse(localStorage.getItem('appleBaselineSaved') || '[]')),
  hidden:new Set(JSON.parse(localStorage.getItem('appleBaselineHidden') || '[]')),
  seen:new Set(JSON.parse(sessionStorage.getItem('appleBaselineSeen') || '[]')),
  metrics: JSON.parse(sessionStorage.getItem('appleBaselineMetrics') || '{"views":0,"trailers":0,"routes":0,"notForMe":0}')
};

function init(){
  ['movieGrid','movieTemplate','resultCount','activeSummary','detailsDialog','dialogBody','watchlistDialog','watchlistBody','metricViews','metricTrailers','metricSaves','metricRoutes','emptyState'].forEach(id=>els[id]=document.getElementById(id));
  document.querySelectorAll('[data-list]').forEach(btn=>btn.addEventListener('click',()=>setList(btn.dataset.list)));
  document.getElementById('searchInput').addEventListener('input',e=>{state.query=e.target.value; render();});
  document.getElementById('routeFilter').addEventListener('change',e=>{state.route=e.target.value; render();});
  document.getElementById('providerFilter').addEventListener('change',e=>{state.provider=e.target.value; render();});
  document.getElementById('moodFilter').addEventListener('change',e=>{state.mood=e.target.value; render();});
  document.getElementById('runtimeFilter').addEventListener('change',e=>{state.runtime=e.target.value; render();});
  document.getElementById('resetBtn').addEventListener('click',resetFilters);
  document.getElementById('emptyResetBtn')?.addEventListener('click',resetFilters);
  document.getElementById('loadDemoBtn').addEventListener('click',loadDemoProfile);
  document.getElementById('exportBtn').addEventListener('click',exportSession);
  document.getElementById('watchlistBtn').addEventListener('click',openWatchlist);
  document.getElementById('closeDialog').addEventListener('click',()=>els.detailsDialog.close());
  document.getElementById('closeWatchlist').addEventListener('click',()=>els.watchlistDialog.close());
  render();
}
function persist(){
  localStorage.setItem('appleBaselineSaved', JSON.stringify([...state.saved]));
  localStorage.setItem('appleBaselineHidden', JSON.stringify([...state.hidden]));
  sessionStorage.setItem('appleBaselineSeen', JSON.stringify([...state.seen]));
  sessionStorage.setItem('appleBaselineMetrics', JSON.stringify(state.metrics));
}
function setList(list){
  state.list=list;
  document.querySelectorAll('[data-list]').forEach(b=>b.classList.toggle('active', b.dataset.list===list));
  render();
}
function matches(movie){
  const q = state.query.trim().toLowerCase();
  if(state.hidden.has(movie.id)) return false;
  if(state.list !== 'all' && !movie.list.includes(state.list)) return false;
  if(state.route !== 'all' && movie.route !== state.route) return false;
  if(state.provider !== 'all' && !movie.providers.includes(state.provider)) return false;
  if(state.mood !== 'all' && !movie.mood.includes(state.mood)) return false;
  if(state.runtime === 'under120' && movie.runtime >= 120) return false;
  if(state.runtime === 'over120' && movie.runtime < 120) return false;
  if(q){
    const hay = [movie.title, movie.year, movie.runtime, movie.route, ...movie.genre, ...movie.mood, ...movie.providers, movie.synopsis, movie.why].join(' ').toLowerCase();
    if(!hay.includes(q)) return false;
  }
  return true;
}
function filteredMovies(){ return MOVIES.filter(matches).sort((a,b)=>b.score-a.score || a.runtime-b.runtime); }
function routeLabel(route){return route === 'theater' ? 'In theaters' : route === 'streaming' ? 'Streaming' : 'Rent / Buy';}
function providerClass(label){
  const l = label.toLowerCase();
  if(l.includes('showtime')) return 'theater';
  if(l.includes('stream')) return 'available';
  return 'paid';
}
function render(){
  const movies = filteredMovies();
  els.movieGrid.innerHTML = '';
  if (els.emptyState) els.emptyState.hidden = movies.length !== 0;
  let newlySeen = 0;
  for (const m of movies) { if (!state.seen.has(m.id)) { state.seen.add(m.id); newlySeen += 1; } }
  state.metrics.views = state.seen.size;
  for(const movie of movies){
    const node = els.movieTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector('.poster').style.setProperty('--posterA', movie.color[0]);
    node.querySelector('.poster').style.setProperty('--posterB', movie.color[1]);
    node.querySelector('.poster span').textContent = movie.title.split(/\s+/).slice(0,2).map(w=>w[0]).join('');
    node.querySelector('.card-kicker').textContent = `${routeLabel(movie.route)} • ${movie.runtime} min • ${movie.score}% fit`;
    node.querySelector('h3').textContent = `${movie.title} (${movie.year})`;
    node.querySelector('.synopsis').textContent = movie.synopsis;
    node.querySelector('.badges').innerHTML = movie.genre.concat(movie.mood.slice(0,2)).map(x=>`<span class="badge">${escapeHtml(x)}</span>`).join('');
    node.querySelector('.availability').innerHTML = Object.entries(movie.availability).map(([k,v])=>`<span class="provider ${providerClass(v)}">${escapeHtml(k)}: ${escapeHtml(v)}</span>`).join('');
    node.querySelector('.trailer-btn').addEventListener('click',()=>openTrailer(movie));
    node.querySelector('.details-btn').addEventListener('click',()=>openDetails(movie));
    node.querySelector('.not-btn')?.addEventListener('click',()=>hideMovie(movie.id));
    const save = node.querySelector('.save-btn');
    save.textContent = state.saved.has(movie.id) ? '★' : '☆';
    save.addEventListener('click',()=>toggleSave(movie.id));
    els.movieGrid.appendChild(node);
  }
  els.resultCount.textContent = `${movies.length} match${movies.length===1?'':'es'}`;
  els.activeSummary.textContent = [state.list !== 'all' ? state.list : 'all lists', state.route !== 'all' ? state.route : 'any route', state.provider !== 'all' ? state.provider : 'any provider', state.mood !== 'all' ? state.mood : 'any mood', state.runtime !== 'all' ? state.runtime : 'any runtime'].join(' • ');
  updateMetrics();
  persist();
}
function updateMetrics(){
  els.metricViews.textContent = state.metrics.views;
  els.metricTrailers.textContent = state.metrics.trailers;
  els.metricRoutes.textContent = state.metrics.routes;
  els.metricSaves.textContent = state.saved.size;
}
function openTrailer(movie){
  state.metrics.trailers += 1;
  updateMetrics(); persist();
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official trailer')}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  openDetails(movie, 'trailer');
}
function openDetails(movie, mode='route'){
  state.metrics.routes += 1;
  updateMetrics(); persist();
  const routes = Object.entries(movie.availability).map(([k,v])=>`<div class="route-row"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join('');
  const saved = state.saved.has(movie.id);
  els.dialogBody.innerHTML = `<p class="eyebrow">${mode === 'trailer' ? 'Trailer opened' : 'Where to watch'}</p><h2>${escapeHtml(movie.title)}</h2><p class="synopsis">${escapeHtml(movie.synopsis)}</p><div class="badges">${movie.genre.concat(movie.mood).map(x=>`<span class="badge">${escapeHtml(x)}</span>`).join('')}</div><div class="route-list">${routes}</div><p class="hero-note"><b>Why this matched:</b> ${escapeHtml(movie.why)}</p><p class="hero-note"><b>MVP boundary:</b> static demo data only. Production needs live provider/showtime integrations and honest deep links.</p><button class="primary wide" onclick="toggleSave('${movie.id}')">${saved ? 'Remove from watchlist' : 'Save to watchlist'}</button>`;
  els.detailsDialog.showModal();
}
function toggleSave(id){
  if(state.saved.has(id)) state.saved.delete(id); else state.saved.add(id);
  render();
}
function hideMovie(id){
  state.hidden.add(id);
  state.saved.delete(id);
  state.metrics.notForMe = (state.metrics.notForMe || 0) + 1;
  render();
}
function openWatchlist(){
  const movies = MOVIES.filter(m=>state.saved.has(m.id));
  if(!movies.length){
    els.watchlistBody.innerHTML = '<p class="eyebrow">Watchlist</p><h2>No saved movies yet</h2><p class="empty">Save a few cards to test whether this baseline flow creates real watch intent.</p>';
  } else {
    els.watchlistBody.innerHTML = `<p class="eyebrow">Watchlist</p><h2>${movies.length} saved pick${movies.length===1?'':'s'}</h2>` + movies.map(m=>`<div class="watchlist-item"><div><b>${escapeHtml(m.title)}</b><span>${escapeHtml(routeLabel(m.route))} • ${m.runtime} min • ${m.score}% fit</span></div><button class="secondary" onclick="openDetailsById('${m.id}')">Route</button></div>`).join('');
  }
  els.watchlistDialog.showModal();
}
function openDetailsById(id){
  const movie = MOVIES.find(m=>m.id===id);
  if(movie){ els.watchlistDialog.close(); openDetails(movie); }
}
function loadDemoProfile(){
  document.getElementById('searchInput').value='classic';
  document.getElementById('routeFilter').value='all';
  document.getElementById('providerFilter').value='all';
  document.getElementById('moodFilter').value='classic';
  document.getElementById('runtimeFilter').value='all';
  state.query='classic'; state.route='all'; state.provider='all'; state.mood='classic'; state.runtime='all'; setList('all');
}
function resetFilters(){
  state.list='all'; state.query=''; state.route='all'; state.provider='all'; state.mood='all'; state.runtime='all'; state.hidden.clear();
  document.getElementById('searchInput').value='';
  document.getElementById('routeFilter').value='all';
  document.getElementById('providerFilter').value='all';
  document.getElementById('moodFilter').value='all';
  document.getElementById('runtimeFilter').value='all';
  setList('all');
}
function exportSession(){
  const payload = {
    prototype:'apple-baseline-functional-mvp',
    exportedAt:new Date().toISOString(),
    filters:{list:state.list, query:state.query, route:state.route, provider:state.provider, mood:state.mood, runtime:state.runtime},
    metrics:{...state.metrics, saves:state.saved.size, hidden:state.hidden.size},
    savedMovies:[...state.saved].map(id=>MOVIES.find(m=>m.id===id)).filter(Boolean).map(m=>({id:m.id,title:m.title,route:m.route,providers:m.providers,score:m.score})),
    visibleMovies:filteredMovies().map(m=>({id:m.id,title:m.title,route:m.route,score:m.score})),
    hiddenMovies:[...state.hidden].map(id=>MOVIES.find(m=>m.id===id)).filter(Boolean).map(m=>({id:m.id,title:m.title}))
  };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `moviesmadeeasy-apple-baseline-session-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
}
function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}
window.toggleSave = toggleSave;
window.hideMovie = hideMovie;
window.openDetailsById = openDetailsById;
document.addEventListener('DOMContentLoaded', init);
