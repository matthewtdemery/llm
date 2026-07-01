const MOVIES = [
  {id:'dune-2', title:'Dune: Part Two', year:2024, runtime:166, score:95, list:['popular','top','theaters'], route:'theater', genre:['Sci-fi','Epic'], mood:['spectacle','serious'], providers:['AMC / Regal / Alamo','Apple TV / iTunes'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Apple TV / iTunes':'Preorder / Rent later'}, color:['#b45309','#111827'], synopsis:'A big-screen spectacle for people who want the theater to feel worth it.'},
  {id:'inside-out-2', title:'Inside Out 2', year:2024, runtime:96, score:91, list:['popular','theaters','family'], route:'theater', genre:['Animation','Family'], mood:['family','funny'], providers:['AMC / Regal / Alamo','Prime Video'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Prime Video':'Rent later'}, color:['#e879f9','#22d3ee'], synopsis:'A family-safe pick with a fast trailer-first decision path.'},
  {id:'past-lives', title:'Past Lives', year:2023, runtime:106, score:94, list:['top','streaming'], route:'streaming', genre:['Drama','Romance'], mood:['quiet','thoughtful'], providers:['Netflix','Apple TV / iTunes'], availability:{'Netflix':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#0f766e','#1e293b'], synopsis:'A slower, adult drama where mood matching matters more than popularity.'},
  {id:'oppenheimer', title:'Oppenheimer', year:2023, runtime:180, score:93, list:['top','popular','streaming'], route:'streaming', genre:['Drama','History'], mood:['serious','award'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#7f1d1d','#111827'], synopsis:'For users asking for prestige, awards, and a long-form night.'},
  {id:'casablanca', title:'Casablanca', year:1942, runtime:102, score:99, list:['top','classics'], route:'rent-buy', genre:['Classic','Romance'], mood:['classic','timeless'], providers:['Apple TV / iTunes','Prime Video'], availability:{'Apple TV / iTunes':'Rent / Buy', 'Prime Video':'Rent / Buy'}, color:['#334155','#020617'], synopsis:'A clean example of classic-library discovery without TV clutter.'},
  {id:'civil-war', title:'Civil War', year:2024, runtime:109, score:82, list:['popular','theaters'], route:'theater', genre:['Thriller','Drama'], mood:['intense','current'], providers:['AMC / Regal / Alamo','Apple TV / iTunes'], availability:{'AMC / Regal / Alamo':'Showtimes', 'Apple TV / iTunes':'Rent later'}, color:['#78350f','#0f172a'], synopsis:'Current-release routing where users need theater versus later-home clarity.'},
  {id:'the-holdovers', title:'The Holdovers', year:2023, runtime:133, score:92, list:['top','streaming'], route:'streaming', genre:['Comedy','Drama'], mood:['warm','award'], providers:['Prime Video','Apple TV / iTunes'], availability:{'Prime Video':'Streaming', 'Apple TV / iTunes':'Rent / Buy'}, color:['#365314','#111827'], synopsis:'A profile-friendly recommendation for warm, character-driven movie nights.'},
  {id:'barbie', title:'Barbie', year:2023, runtime:114, score:88, list:['popular','streaming'], route:'streaming', genre:['Comedy','Fantasy'], mood:['bright','social'], providers:['Netflix','Apple TV / iTunes'], availability:{'Netflix':'Streaming window', 'Apple TV / iTunes':'Rent / Buy'}, color:['#be185d','#f9a8d4'], synopsis:'Popular and social, but still needs provider clarity before a user commits.'},
  {id:'anora', title:'Anora', year:2024, runtime:139, score:90, list:['top','theaters'], route:'theater', genre:['Drama','Comedy'], mood:['festival','adult'], providers:['AMC / Regal / Alamo'], availability:{'AMC / Regal / Alamo':'Limited showtimes'}, color:['#9f1239','#312e81'], synopsis:'A smaller theatrical title where discovery and local route clarity matter.'}
];

const state = {list:'all', query:'', route:'all', provider:'all', runtime:'all', saved:new Set(JSON.parse(localStorage.getItem('appleBaselineSaved')||'[]'))};
const grid = document.querySelector('#movieGrid');
const template = document.querySelector('#movieTemplate');
const resultCount = document.querySelector('#resultCount');
const activeSummary = document.querySelector('#activeSummary');
const dialog = document.querySelector('#detailsDialog');
const dialogBody = document.querySelector('#dialogBody');

function matches(movie){
  const q = state.query.trim().toLowerCase();
  if(state.list !== 'all' && !movie.list.includes(state.list)) return false;
  if(state.route !== 'all' && movie.route !== state.route) return false;
  if(state.provider !== 'all' && !movie.providers.includes(state.provider)) return false;
  if(state.runtime === 'under120' && movie.runtime >= 120) return false;
  if(state.runtime === 'over120' && movie.runtime < 120) return false;
  if(q){
    const hay = [movie.title, movie.year, movie.runtime, movie.route, ...movie.genre, ...movie.mood, ...movie.providers, movie.synopsis].join(' ').toLowerCase();
    if(!hay.includes(q)) return false;
  }
  return true;
}
function routeLabel(route){return route === 'theater' ? 'In theaters' : route === 'streaming' ? 'Streaming' : 'Rent / Buy';}
function providerClass(label){
  const l = label.toLowerCase();
  if(l.includes('showtime')) return 'theater';
  if(l.includes('stream')) return 'available';
  return 'paid';
}
function render(){
  const movies = MOVIES.filter(matches).sort((a,b)=>b.score-a.score);
  grid.innerHTML = '';
  for(const movie of movies){
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.poster').style.setProperty('--posterA', movie.color[0]);
    node.querySelector('.poster').style.setProperty('--posterB', movie.color[1]);
    node.querySelector('.card-kicker').textContent = `${routeLabel(movie.route)} • ${movie.runtime} min • ${movie.score}% fit`;
    node.querySelector('h3').textContent = `${movie.title} (${movie.year})`;
    node.querySelector('.synopsis').textContent = movie.synopsis;
    node.querySelector('.badges').innerHTML = movie.genre.concat(movie.mood.slice(0,2)).map(x=>`<span class="badge">${x}</span>`).join('');
    node.querySelector('.availability').innerHTML = Object.entries(movie.availability).map(([k,v])=>`<span class="provider ${providerClass(v)}">${k}: ${v}</span>`).join('');
    node.querySelector('.trailer-btn').addEventListener('click',()=>openDetails(movie, 'trailer'));
    node.querySelector('.details-btn').addEventListener('click',()=>openDetails(movie, 'route'));
    const save = node.querySelector('.save-btn');
    save.textContent = state.saved.has(movie.id) ? '★' : '☆';
    save.addEventListener('click',()=>{ state.saved.has(movie.id) ? state.saved.delete(movie.id) : state.saved.add(movie.id); localStorage.setItem('appleBaselineSaved', JSON.stringify([...state.saved])); render(); });
    grid.appendChild(node);
  }
  resultCount.textContent = `${movies.length} match${movies.length===1?'':'es'}`;
  activeSummary.textContent = [state.list !== 'all' ? state.list : 'all lists', state.route !== 'all' ? state.route : 'any route', state.provider !== 'all' ? state.provider : 'any provider', state.runtime !== 'all' ? state.runtime : 'any runtime'].join(' • ');
}
function openDetails(movie, mode){
  const routes = Object.entries(movie.availability).map(([k,v])=>`<div class="route-row"><b>${k}</b><span>${v}</span></div>`).join('');
  dialogBody.innerHTML = `<p class="eyebrow">${mode === 'trailer' ? 'Trailer-first decision' : 'Where to watch'}</p><h2>${movie.title}</h2><p class="synopsis">${movie.synopsis}</p><div class="badges">${movie.genre.map(x=>`<span class="badge">${x}</span>`).join('')}</div><div class="route-list">${routes}</div><p class="hero-note">MVP boundary: this prototype demonstrates routing clarity and decision flow. Live provider integrations, showtimes, deep links, and ticketing require production data agreements.</p>`;
  dialog.showModal();
}
document.querySelectorAll('[data-list]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-list]').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.list=btn.dataset.list; render();}));
document.querySelector('#searchInput').addEventListener('input',e=>{state.query=e.target.value; render();});
document.querySelector('#routeFilter').addEventListener('change',e=>{state.route=e.target.value; render();});
document.querySelector('#providerFilter').addEventListener('change',e=>{state.provider=e.target.value; render();});
document.querySelector('#runtimeFilter').addEventListener('change',e=>{state.runtime=e.target.value; render();});
document.querySelector('#resetBtn').addEventListener('click',()=>{state.list='all';state.query='';state.route='all';state.provider='all';state.runtime='all';document.querySelector('#searchInput').value='';document.querySelector('#routeFilter').value='all';document.querySelector('#providerFilter').value='all';document.querySelector('#runtimeFilter').value='all';document.querySelectorAll('[data-list]').forEach(b=>b.classList.toggle('active',b.dataset.list==='all'));render();});
document.querySelector('#closeDialog').addEventListener('click',()=>dialog.close());
render();
