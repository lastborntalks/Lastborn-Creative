document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Services data
const services = [
  ["▶","YouTube Video Editing","Professional long-form editing with smooth pacing, clean transitions, engaging storytelling, and audience retention in mind."],
  ["▣","Short-form Content","Editing for TikTok, Instagram Reels, Facebook Reels, and YouTube Shorts, built to maximize engagement and retention."],
  ["✚","Church Event Videos","Professional editing for crusades, conventions, conferences, worship services, youth programs, and church events."],
  ["★","Event Highlight Videos","Beautiful highlight edits for birthdays, conferences, seminars, community events, and special occasions."],
  ["◎","Promotional Videos","Professional promotional edits for businesses, products, services, and social media marketing."],
  ["▲","Business Advertisement Videos","Attention-grabbing advertisement videos designed for social media campaigns and online promotions."],
  ["▦","Corporate Video Editing","Clean and professional edits for organizations, interviews, presentations, and internal communications."],
  ["Ⓒ","Subtitles & Captions","Professional subtitles with clean typography and modern animation styles to improve accessibility and engagement."],
  ["◐","Color & Audio Enhancement","Brightness, contrast, and white balance correction, plus noise reduction and audio balancing for a polished finish."]
];
const svcGrid = document.getElementById('svcGrid');
services.forEach(([icon,title,desc])=>{
  svcGrid.innerHTML += `<div class="svc-card reveal"><div class="svc-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>`;
});

// Portfolio data
const projects = [
  ["Sunday Service Highlight Reel","Church","A highlight edit moving through the full service: opening, hymns, preaching, prayer, and praise, cut together with transitions and one background music track. No live service audio, music carries the whole edit.","https://vm.tiktok.com/ZS4aPLuvd/"],
  ["Lord's Chosen Youth Programme Promo","Short-form","A retention-first promo for a Lord's Chosen youth programme. The hook is built so viewers don't realise it's church content until they're already watching. Voiceover, background music, and sound effects throughout.","https://vm.tiktok.com/ZS453bXy7/"],
  ["ODI'S CHOICE Toilet Cleaner Ad","Business","A story-driven product ad for ODI'S CHOICE. A woman finds her toilet dirty, orders the product, and the germs and dirt are shown being flushed away after use.","https://vm.tiktok.com/ZS453u8dc/"],
  ["Community Outreach Highlight","Events","A highlight edit for a community outreach event, paired with a background voiceover that carries the story and keeps the mood consistent from start to finish.","https://vm.tiktok.com/ZS4aPdYtS/"],
  ["Personal Storytelling Project","Storytelling","A self-directed narrative piece combining images and short clips with narration, built to show pacing, storytelling, and voiceover sync in a longer format.","https://vm.tiktok.com/ZS45wrw3f/"],
  ["Church Rally Publicity Video","Church","Full video coverage and edit for a church rally publicity campaign, from filming through final cut, with clips paired to background music that fits the mood of each scene.","https://vm.tiktok.com/ZS453cdL4/"],
  ["Motivational Short","Short-form","A single-character motivational piece, one person speaking directly to camera over a styled background, edited for pacing and delivery.","https://vm.tiktok.com/ZS45TFVga/"]
];
const filters = document.getElementById('filters');
const portGrid = document.getElementById('portGrid');
function renderPortfolio(filter){
  portGrid.innerHTML = '';
  projects.filter(p => filter==='All' || p[1]===filter).forEach(([title,catLabel,desc,link])=>{
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
filters.addEventListener('click', e=>{
  if(e.target.classList.contains('filter-btn')){
    filters.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    renderPortfolio(e.target.dataset.filter);
  }
});
renderPortfolio('All');

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
  ["Can you edit YouTube videos?","Yes. Long-form YouTube editing, including pacing, captions, and retention-focused cuts, is a core service."],
  ["Can you edit church programs?","Yes. From full-length event coverage to short highlight edits for crusades, conventions, and worship services."],
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
