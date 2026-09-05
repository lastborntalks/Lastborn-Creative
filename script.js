document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Services data
const services = [
  ["▲","Business & Product Ad Videos","Commercials built around a hook, a story, and a clear payoff, turning a product or service into something worth stopping for."],
  ["▣","Short-Form Content For Growth","Reels, TikTok, and Shorts edited for retention, built to grow the account behind them, and adaptable to any niche or brand voice."]
];
const svcGrid = document.getElementById('svcGrid');
services.forEach(([icon,title,desc])=>{
  svcGrid.innerHTML += `<div class="svc-card reveal"><div class="svc-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>`;
});

// Portfolio data
const projects = [
  ["GOLI Product Ad","Business & Product Ads","A product ad made for GOLI, built around a clear hook and a fast, benefit-first pitch for the product.","https://vm.tiktok.com/ZSVoGkkEK/"],
  ["ODI'S CHOICE Toilet Cleaner Ad","Business & Product Ads","A story-driven product ad for ODI'S CHOICE. A woman finds her toilet dirty, orders the product, and the germs and dirt are shown being flushed away after use.","https://vm.tiktok.com/ZSVoGmfYU/"],
  ["Short-Form Content, Horror Niche","Short-Form Content","A short-form piece built for the horror niche, showing how the same retention-focused editing adapts to a client's specific niche or brand voice.","https://vm.tiktok.com/ZSVoGnEHj/"]
];
const portGrid = document.getElementById('portGrid');
function renderPortfolio(){
  portGrid.innerHTML = '';
  projects.forEach(([title,catLabel,desc,link])=>{
    const linkHtml = link
      ? `<a href="${link}" target="_blank" rel="noopener" class="port-link">Watch Project</a>`
      : `<span class="port-link" style="opacity:.4; cursor:default;">Video coming soon</span>`;
    portGrid.innerHTML += `
      <div class="port-card reveal">
        <div class="port-thumb"></div>
        <div class="port-body">
          <span class="port-cat">${catLabel}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          ${linkHtml}
        </div>
      </div>`;
  });
  observeReveals();
}
renderPortfolio();

// Contact form sends straight to WhatsApp, no backend needed
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const phone = document.getElementById('cf-phone').value;
  const type = document.getElementById('cf-type').value;
  const message = document.getElementById('cf-message').value;
  let text = `Hi Lastborn Creative, my name is ${name}.\nMy number: ${phone}\nProject type: ${type}`;
  if(message.trim()) text += `\n\nDetails: ${message}`;
  window.open(`https://wa.me/2349132449484?text=${encodeURIComponent(text)}`, '_blank');
});

// Why choose grid
const why = [
  ["Professional Quality","Every edit is finished to a standard that holds up against agency-level work."],
  ["Creative Storytelling","Footage is shaped around a narrative, not just trimmed and stitched."],
  ["Attention to Detail","Pacing, sound, and transitions are treated as seriously as the visuals."],
  ["Reliable Communication","You'll always know where your project stands. No radio silence."],
  ["Fast Turnaround","Efficient workflow means your video is back in your hands quickly."],
  ["Affordable Solutions","Quality editing that respects creator and small-business budgets."],
  ["Client Satisfaction","Revisions are built into the process, not treated as a hassle."],
  ["Passion for Excellence","This isn't just a service. It's a craft I take seriously."]
];
const whyGrid = document.getElementById('whyGrid');
why.forEach(([t,d],i)=>{
  whyGrid.innerHTML += `<div class="why-item reveal"><span class="num">0${i+1}</span><h3>${t}</h3><p>${d}</p></div>`;
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

// FAQ
const faqs = [
  ["How long does editing take?","Turnaround depends on footage length and complexity, but most projects are completed within a few days to about a week. Rush timelines can be discussed."],
  ["How do I send my footage?","Footage can be shared via Google Drive, WeTransfer, or another cloud link. Details are confirmed once we start your project."],
  ["How many revisions are included?","Every project includes a reasonable number of revision rounds so the final video matches your vision."],
  ["What video formats do you accept?","Most common formats are accepted, including MP4, MOV, and footage straight from phone cameras."],
  ["Can you edit for any niche or industry?","Yes. Short-form and product ad editing adapts to any niche or brand voice, from e-commerce products to personal brands and creator accounts."],
  ["Do you work with international clients?","Yes. All communication and file transfer happens online, so location isn't a barrier."],
  ["How do payments work?","Payment terms are confirmed before work begins, typically with a deposit to start and balance on delivery."]
];
const faqList = document.getElementById('faqList');
faqs.forEach(([q,a])=>{
  faqList.innerHTML += `
    <div class="faq-item">
      <button class="faq-q"><span>${q}</span><span class="plus">+</span></button>
      <div class="faq-a"><p>${a}</p></div>
    </div>`;
});
faqList.addEventListener('click', e=>{
  const btn = e.target.closest('.faq-q');
  if(!btn) return;
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-a');
  const wasOpen = item.classList.contains('open');
  faqList.querySelectorAll('.faq-item').forEach(i=>{ i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
  if(!wasOpen){ item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight+'px'; }
});

// Scroll reveal
function observeReveals(){
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:0.12});
  els.forEach(el=>io.observe(el));
}
observeReveals();
