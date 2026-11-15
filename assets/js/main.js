// Navegação responsiva, seletor de idioma, ícones e contadores animados.
const menu=document.querySelector('.menu'),links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const isEnglish=document.documentElement.lang.toLowerCase().startsWith('en'),navLinks=document.querySelector('.nav-links');
if(navLinks){let lang=navLinks.querySelector('a[href="/"]');if(isEnglish&&lang){lang.classList.add('lang-switch');lang.setAttribute('aria-label','Switch to Portuguese');lang.innerHTML='<span aria-hidden="true">🇧🇷</span> PT';}else if(!navLinks.querySelector('.lang-switch')){lang=document.createElement('a');lang.className='lang-switch';lang.href='/en/';lang.setAttribute('aria-label','Switch to English');lang.innerHTML='<span aria-hidden="true">🇬🇧</span> EN';navLinks.append(lang);}}
const iconMap=[[/projeto|project|percepta|ceres|irrig|aquamind/i,'cpu'],[/pesquisa|research|publica|publication|artigo/i,'book-open'],[/conquista|award|premia|reconhec|huawei|robot|rob[oó]tica|linha/i,'trophy'],[/curr[ií]culo|resume|lattes|forma[cç][aã]o|educa/i,'graduation-cap'],[/contato|contact|conect|connect|e-mail/i,'send'],[/github|c[oó]digo|code|software|infraestrutura|network|redes/i,'network'],[/laborat[oó]rio|lab|experimento|experiments/i,'flask-conical'],[/galeria|gallery|imagem|visual/i,'images'],[/certifica|curso|training/i,'award'],[/tecnologia|technology|hardware|iot|esp32|sensor/i,'microchip']];
const paths={cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/>','book-open':'<path d="M12 7v14m0-14C9 5 5 4 2 5v14c3-1 7 0 10 2m0-14c3-2 7-3 10-2v14c-3-1-7 0-10 2"/>',trophy:'<path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H3v2a5 5 0 0 0 5 5m9-7h4v2a5 5 0 0 1-5 5"/>','graduation-cap':'<path d="m2 10 10-5 10 5-10 5zM6 12v5c4 3 8 3 12 0v-5m4-2v6"/>',send:'<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',network:'<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>','flask-conical':'<path d="M9 3h6m-5 0v7l-6 10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1l-6-10V3M8 15h8"/>',images:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',award:'<circle cx="12" cy="8" r="6"/><path d="m8.2 13-1.2 9 5-3 5 3-1.2-9"/>',microchip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9zM9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5"/>'};
function svgIcon(name){return '<svg class="ui-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[name]+'</svg>';}
document.querySelectorAll('.card h3,.panel h3,.feature h3').forEach(title=>{if(title.querySelector('.ui-icon'))return;const match=iconMap.find(([pattern])=>pattern.test(title.textContent));if(match){title.insertAdjacentHTML('afterbegin',svgIcon(match[1]));title.classList.add('icon-title');}});
const hero=document.querySelector('.project-hero');
if(hero&&!document.querySelector('.stats')&&!isEnglish){const stats=document.createElement('div');stats.className='wrap stats mini-stats';stats.innerHTML='<div class="stat"><strong data-count="2">0</strong><span>Publicações completas</span></div><div class="stat"><strong data-count="2">0</strong><span>Projetos de pesquisa</span></div><div class="stat"><strong data-count="7">0</strong><span>Cursos registrados</span></div><div class="stat"><strong data-count="12">0</strong><span>Anos de experiência desde 2014</span></div>';hero.insertAdjacentElement('afterend',stats);}
const counters=[...document.querySelectorAll('[data-count]')];
function animateCounter(el){if(el.dataset.done)return;el.dataset.done='1';const target=Number(el.dataset.count)||0,duration=1150,start=performance.now();const tick=now=>{const p=Math.min((now-start)/duration,1),ease=1-Math.pow(1-p,3);el.textContent=Math.round(target*ease).toLocaleString(isEnglish?'en-US':'pt-BR');if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);}
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animateCounter(entry.target);observer.unobserve(entry.target);}}),{threshold:.45});counters.forEach(el=>observer.observe(el));}else counters.forEach(animateCounter);

const revealItems=document.querySelectorAll('.card,.panel,.feature,.section-head,.contact-box');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.08});
 revealItems.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',Math.min(i%4,3)*65+'ms');revealObserver.observe(el);});
}else revealItems.forEach(el=>el.classList.add('is-visible'));

/* Repositórios recentes: conteúdo público consultado diretamente na API do GitHub. */
const recentGrid=document.querySelector('#recent-repositories');
if(recentGrid){
 const status=document.querySelector('#recent-repositories-status');
 fetch('https://api.github.com/users/Ivanjuniior/repos?sort=updated&per_page=30')
  .then(response=>{if(!response.ok)throw new Error('GitHub API indisponível');return response.json();})
  .then(repos=>{
   const recent=repos.filter(repo=>!repo.fork).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)).slice(0,3);
   if(!recent.length)throw new Error('Nenhum repositório público encontrado');
   recent.forEach(repo=>{
    const card=document.createElement('article');card.className='panel repo-card';
    const tag=document.createElement('div');tag.className='tag';tag.textContent=repo.language||'Projeto';
    const title=document.createElement('h3');title.textContent=repo.name;
    const description=document.createElement('p');description.textContent=repo.description|| (isEnglish?'Public repository.':'Repositório público.');
    const meta=document.createElement('div');meta.className='repo-meta';
    const stars=document.createElement('span');stars.textContent='★ '+repo.stargazers_count;
    const forks=document.createElement('span');forks.textContent='⑂ '+repo.forks_count;
    const link=document.createElement('a');link.className='more';link.href=repo.html_url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=isEnglish?'Open repository ↗':'Abrir repositório ↗';
    meta.append(stars,forks);card.append(tag,title,description,meta,link);recentGrid.append(card);
   });
   if(status)status.textContent=isEnglish?'Latest updated public repositories.':'Repositórios públicos atualizados mais recentemente.';
  })
  .catch(()=>{if(status)status.textContent=isEnglish?'Live repository data is temporarily unavailable. Visit the GitHub profile for the full list.':'Os dados ao vivo estão temporariamente indisponíveis. Acesse o perfil do GitHub para ver todos os repositórios.';});
}
