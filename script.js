// Register GSAP plugins actually used in this build (see GSAP audit: EasePack, MorphSVG, TextPlugin, Flip removed as unused)
gsap.registerPlugin(ScrollTrigger, Observer, SplitText, ScrollToPlugin);

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Smooth nav scroll via ScrollToPlugin
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      gsap.to(window, { duration: 0.9, scrollTo: { y: target, offsetY: 70 }, ease: 'power2.inOut' });
    }
  });
});

// Hero headline entrance: one controlled SplitText reveal, word by word
const heroLines = document.querySelectorAll('.hero-display .line1, .hero-display .line2');
const splitLines = [];
heroLines.forEach(line => {
  const split = new SplitText(line, { type: 'words' });
  splitLines.push(split);
  gsap.set(split.words, { opacity: 0, y: '100%' });
});
gsap.timeline({ delay: 0.15 })
  .to(splitLines[0].words, { opacity: 1, y: '0%', duration: 0.8, ease: 'expo.out', stagger: 0.06 })
  .to(splitLines[1].words, { opacity: 1, y: '0%', duration: 0.8, ease: 'expo.out', stagger: 0.06 }, '-=0.55')
  .to('.hero-portrait', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
  .to('.hero-sub, .hero-actions', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, '-=0.5');
gsap.set('.hero-portrait', { opacity: 0, y: 24 });
gsap.set('.hero-sub, .hero-actions', { opacity: 0, y: 16 });

// Services data
const services = [
  ["▲","Business & Product Ad Videos","Commercials built around a hook, a story, and a clear payoff, turning a product or service into something worth stopping for."],
  ["▣","Short-Form Content For Growth","Reels, TikTok, and Shorts edited for retention, built to grow the account behind them, and adaptable to any niche or brand voice."]
];
const svcGrid = document.getElementById('svcGrid');
services.forEach(([icon,title,desc])=>{
  svcGrid.innerHTML += `<div class="svc-card reveal"><div class="svc-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>`;
});

// Work bento data: real projects only. The horror-niche project doubles as the Storytelling
// and Horror category, per the actual footage, not fabricated separate projects.
const projects = [
  { title:"ODI'S CHOICE Toilet Cleaner Ad", cat:"Business & Product Ads", desc:"A story-driven product ad. A woman finds her toilet dirty, orders the product, and the germs and dirt are shown being flushed away after use.", link:"https://vm.tiktok.com/ZSVoGmfYU/", featured:true },
  { title:"GOLI Product Ad", cat:"Business & Product Ads", desc:"A product ad built around a clear hook and a fast, benefit-first pitch.", link:"https://vm.tiktok.com/ZSVoGkkEK/", featured:false },
  { title:"Short-Form, Storytelling & Horror", cat:"Short-Form / Storytelling / Horror", desc:"A short-form piece in the horror niche, doubling as a storytelling sample. Adaptable to any client niche.", link:"https://vm.tiktok.com/ZSVoGnEHj/", featured:false }
];
const bentoGrid = document.getElementById('bentoGrid');
projects.forEach(p=>{
  bentoGrid.innerHTML += `
    <a href="${p.link}" target="_blank" rel="noopener" class="tile reveal${p.featured ? ' featured' : ''}">
      <div class="tile-bg"></div>
      <div class="tile-body">
        <span class="tile-cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="tile-link">Watch Project</span>
      </div>
    </a>`;
});

// Process
const steps = [
  ["01","Send Your Project","Upload your footage and explain your vision. The more context you give, the better the edit."],
  ["02","Planning","We discuss editing style, goals, platform, and delivery timeline before anything is cut."],
  ["03","Editing","Professional editing with attention to storytelling, pacing, audio, captions, and overall presentation."],
  ["04","Review","You receive a preview, request revisions if needed, and we refine until it's right."],
  ["05","Delivery","You receive the final high-quality video, exported in your preferred format."]
];
const processList = document.getElementById('processList');
steps.forEach(([num,t,d])=>{
  processList.innerHTML += `<div class="proc-row reveal"><span class="tc">${num}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
});

// Scroll reveal via ScrollTrigger, staggered per section instead of per element
function initReveals(){
  document.querySelectorAll('section').forEach(section => {
    const items = section.querySelectorAll('.reveal');
    if (!items.length) return;
    gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 78%' } })
      .to(items, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12 });
  });
}
initReveals();
