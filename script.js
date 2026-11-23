/* Inline SVG icon set: no frameworks, dependencies, or icon-network requests. */
const paths = {
  'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
  'arrow-down':'<path d="M12 4v16m-6-6 6 6 6-6"/>',
  'arrow-up':'<path d="M12 20V4m-6 6 6-6 6 6"/>',
  'chevron-up':'<path d="m6 15 6-6 6 6"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
  facebook:'<path d="M14 21v-8h3l.5-4H14V7c0-1 .5-1.5 1.5-1.5H18V2h-3c-3 0-5 2-5 5v2H7v4h3v8"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  graduation:'<path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v8"/>',
  code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  chart:'<path d="M3 3v18h18M7 16l4-5 4 2 6-8"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
  bulb:'<path d="M9 18v-2c-6-4-4-12 3-12s9 8 3 12v2H9Zm0 3h6M12 1v1M2 9h2m16 0h2"/>',
  terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 9 3 3-3 3m6 0h5"/>',
  layers:'<path d="m2 8 10-5 10 5-10 5L2 8Zm0 5 10 5 10-5M2 18l10 5 10-5"/>',
  spark:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Zm7-1 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.01"/>',
  book:'<path d="M12 6C8 3 5 3 2 4v15c3-1 6-1 10 2 4-3 7-3 10-2V4c-3-1-6-1-10 2Zm0 0v15"/>',
  x:'<path d="m6 6 12 12M6 18 18 6"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  expand:'<path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/>'
};
function renderIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    el.outerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.code}</svg>`;
  });
}
renderIcons();
document.querySelector('#year').textContent = new Date().getFullYear();

// Mobile navigation and scroll-aware active section.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); }
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
const sections = [...document.querySelectorAll('main section[id]')];
const activeObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (!visible.length) return;
  const current = visible.sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
  nav.querySelectorAll('a').forEach(a => {
    const active = a.hash === `#${current}`;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
sections.forEach(section => activeObserver.observe(section));
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); } });
  }, {threshold: .08});
  document.querySelectorAll('.section-heading, .about-grid, .values-grid, .title-row, .skills-grid, .education-grid, .contact-grid').forEach(el => {
    el.classList.add('reveal-ready'); revealObserver.observe(el);
  });
}

// Project details are intentionally explicit about the stage of each idea.
const projectData = {
  energy: {title:'Smart Energy Monitoring System', status:'Academic concept', image:'./assets/project-energy.svg', description:'A proposed sensor-based system to help users understand where their energy goes. The concept combines consumption readings, accessible visualizations, and AI-assisted insights. No working hardware, repository, or deployment has been supplied.', features:['Collect energy readings using connected sensors.','Visualize consumption patterns over time.','Explore AI-assisted suggestions for reducing waste.'], tech:'Planned areas: IoT sensors, Python, data visualization, intelligent systems.'},
  files: {title:'Cross-Device File Access Agent', status:'Personal software concept', image:'./assets/project-files.svg', description:'An exploration of secure file access between computers and mobile devices, with a personal computer acting as the primary storage source. Architecture and technology choices are still open; this is not a released application.', features:['Access selected computer files from a mobile device.','Explore authenticated connections and explicit file permissions.','Keep the personal computer as the primary storage source.'], tech:'Exploration areas: networking, access control, file systems, software architecture.'},
  data: {title:'Data Analysis Projects', status:'Learning lab / ongoing learning', image:'./assets/project-data.svg', description:'A space for practical exercises with Python, SQL, Microsoft Excel, and Power BI. The focus is learning how to clean data, ask useful questions, and present understandable insights. Specific datasets, completed analyses, and public results have not yet been supplied.', features:['Practice data cleaning and exploratory analysis.','Write SQL queries to investigate practical questions.','Explore dashboards and clear visual storytelling.'], tech:'Learning toolkit: Python, SQL, Microsoft Excel, Power BI.'}
};
// Resolve dynamic detail images through Vite too, while remaining valid on a static server.
projectData.energy.image = new URL('./assets/project-energy.svg', import.meta.url).href;
projectData.files.image = new URL('./assets/project-files.svg', import.meta.url).href;
projectData.data.image = new URL('./assets/project-data.svg', import.meta.url).href;
const projectDialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projectData[button.dataset.project];
  document.querySelector('#project-details').innerHTML = `<span class="project-status">${p.status}</span><h2>${p.title}</h2><img src="${p.image}" alt="Illustrative concept preview for ${p.title}"><p>${p.description}</p><h3>Proposed features & learning goals</h3><ul>${p.features.map(feature => `<li>${feature}</li>`).join('')}</ul><p>${p.tech}</p><div class="dialog-actions"><button disabled>GitHub · Not published</button><button disabled>Live demo · Not available</button><a class="button primary" href="#contact" id="discuss-project">Discuss this idea <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths['arrow-up-right']}</svg></a></div><p class="dialog-note">No repository URL or live demo was provided. These actions will become available when real links are added.</p>`;
  projectDialog.showModal();
  document.querySelector('#discuss-project').addEventListener('click', () => projectDialog.close());
}));
const portraitDialog = document.querySelector('#portrait-dialog');
document.querySelector('#portrait-open').addEventListener('click', () => portraitDialog.showModal());
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  document.querySelectorAll('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== card.dataset.category; });
}));

// Contact is intentionally mailto-only: validation never claims a message was sent.
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (name.length < 2 || message.length < 10) {
    document.querySelector('#form-status').textContent = 'Please enter a name of at least 2 characters and a message of at least 10 characters (not just spaces).';
    return;
  }
  const subject = encodeURIComponent(`Portfolio conversation from ${name}`);
  const body = encodeURIComponent(`Hi Sonet,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:mdhasansonet@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector('#form-status').textContent = 'Email draft requested. Review and send it in your email app. If no app opened, email mdhasansonet@gmail.com directly. Nothing has been sent by this site.';
});

// Knowledge retrieval is isolated so a future secure backend can replace this adapter.
// Never add secret API keys here. Messages remain in memory and vanish on reload.
let knowledgePromise;
function loadKnowledge() {
  knowledgePromise ??= fetch(new URL('./chatbot-data.json', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Knowledge base unavailable');
    return response.json();
  }).catch(error => { knowledgePromise = undefined; throw error; });
  return knowledgePromise;
}
async function getAssistantReply(message) {
  const kb = await loadKnowledge();
  const words = message.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/);
  let best = null, bestScore = 0;
  kb.topics.forEach(topic => {
    const score = topic.keywords.reduce((sum, keyword) => sum + (words.includes(keyword) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = topic; }
  });
  return best ? best.answer : kb.fallback;
}
const chatPanel = document.querySelector('#chat-panel');
const chatToggle = document.querySelector('#chat-toggle');
const chatInput = document.querySelector('#chat-input');
const messages = document.querySelector('#chat-messages');
let busy = false;
function setChatOpen(open) {
  chatPanel.hidden = !open;
  chatToggle.setAttribute('aria-expanded', String(open));
  if (open) chatInput.focus(); else chatToggle.focus();
}
chatToggle.addEventListener('click', () => setChatOpen(chatPanel.hidden));
document.querySelector('#chat-close').addEventListener('click', () => setChatOpen(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); if (!chatPanel.hidden) setChatOpen(false); } });
function addMessage(text, role) {
  const bubble = document.createElement('div');
  bubble.className = `chat-message ${role}`;
  bubble.textContent = text;
  const time = document.createElement('time');
  time.dateTime = new Date().toISOString();
  time.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  bubble.append(time); messages.append(bubble);
  messages.scrollTop = messages.scrollHeight;
}
async function sendMessage(text) {
  if (busy || !text.trim()) return;
  busy = true;
  addMessage(text.trim(), 'user'); chatInput.value = '';
  document.querySelector('#chat-form button').disabled = true;
  const typing = document.createElement('div');
  typing.className = 'chat-message assistant typing'; typing.textContent = 'Looking that up…';
  messages.append(typing); messages.scrollTop = messages.scrollHeight;
  try {
    const [reply] = await Promise.all([getAssistantReply(text), new Promise(resolve => setTimeout(resolve, 550))]);
    typing.remove(); addMessage(reply, 'assistant');
  } catch {
    typing.remove(); addMessage('I couldn’t load the local knowledge base. Please try again, or contact Sonet at mdhasansonet@gmail.com. Use a local HTTP server rather than opening index.html directly.', 'assistant');
  } finally {
    busy = false; document.querySelector('#chat-form button').disabled = false;
  }
}
document.querySelector('#chat-form').addEventListener('submit', e => { e.preventDefault(); sendMessage(chatInput.value); });
document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => sendMessage(button.dataset.question)));
