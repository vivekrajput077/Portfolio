/**
 * components.js — Centralised Header & Footer
 * ─────────────────────────────────────────────
 * Each page sets data attributes on <body>:
 *   data-nav="main"         → Full portfolio navbar (index, ecommerce)
 *   data-nav="case-study"   → Simple Back / Next navbar (case studies)
 *   data-base="./"          → Path prefix to root (e.g. "../" for case-studies/)
 *   data-next="ecommerce.html" → Next project URL (case-study pages only)
 */

(function () {
  const body    = document.body;
  const navType = body.dataset.nav  || 'main';
  const base    = body.dataset.base || '';
  const nextUrl = body.dataset.next || '#';

  /* ── MAIN PORTFOLIO NAV ─────────────────────────────────────────── */
  const mainNavHTML = `
<nav id="main-nav"
     class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10
            shadow-[0_0_40px_rgba(108,99,255,0.15)] transition-all duration-300 ease-in-out">
  <div class="max-w-[1200px] mx-auto flex justify-between items-center px-gutter py-stack-md">
    <a href="${base}index.html"
       class="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter hover:text-primary transition-colors">
      VK.
    </a>
    <div class="hidden md:flex gap-10 items-center">
      <a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
         href="${base}index.html#about">ABOUT</a>
      <a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
         href="${base}index.html#work">WORK</a>
      <a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
         href="${base}index.html#process">PROCESS</a>
      <a href="${base}index.html#contact"
         class="bg-primary text-background px-6 py-3 rounded font-label-caps text-label-caps hover:opacity-90 transition-all">
        Let's Talk
      </a>
    </div>
    <!-- Mobile toggle -->
    <button id="mobile-menu-btn" class="md:hidden text-on-surface" aria-label="Toggle menu">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
  <!-- Mobile dropdown -->
  <div id="mobile-menu" class="hidden md:hidden bg-surface border-t border-white/10 px-gutter py-4 flex flex-col gap-4">
    <a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
       href="${base}index.html#about">ABOUT</a>
    <a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
       href="${base}index.html#work">WORK</a>
    <a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
       href="${base}index.html#process">PROCESS</a>
    <a href="${base}index.html#contact"
       class="font-label-caps text-label-caps text-primary">LET'S TALK</a>
  </div>
</nav>`;

  /* ── CASE STUDY NAV (Back / Next) ───────────────────────────────── */
  const caseStudyNavHTML = `
<nav id="main-nav"
     class="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10 
            shadow-[0_0_20px_rgba(108,99,255,0.1)] py-3">
  <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center">
    
    <!-- Back button — styled pill -->
    <a class="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 
              text-on-surface-variant hover:border-primary hover:text-primary 
              transition-all duration-200 font-label-caps text-label-caps text-sm"
       href="${base}index.html">
      <span class="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to Work
    </a>

    <!-- Center logo -->
    <a href="${base}index.html"
       class="font-headline-md text-headline-md font-bold text-on-surface 
              tracking-tighter hover:text-primary transition-colors">
      VK.
    </a>

    <!-- Next button — filled pill -->
    <a class="group flex items-center gap-2 px-4 py-2 rounded-full 
              bg-primary text-on-primary hover:opacity-90 hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]
              transition-all duration-200 font-label-caps text-label-caps text-sm"
       href="${nextUrl}">
      Next Project
      <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </a>

  </div>
</nav>`;

  /* ── SHARED FOOTER ───────────────────────────────────────────────── */
  const footerHTML = `
<footer class="bg-surface-container-lowest w-full py-section-padding border-t border-white/5">
  <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-gutter gap-8">
    <div class="flex flex-col items-center md:items-start gap-1">
      <p class="font-headline-md text-headline-md font-bold text-on-surface">VK.</p>
      <p class="font-body-md text-body-md text-on-surface-variant opacity-60">
        © 2024 Vivek Kumar. All rights reserved.
      </p>
    </div>
    <div class="flex gap-8">
      <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-1"
         href="https://linkedin.com/in/vivekrajput7594" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-outlined text-sm">link</span> LinkedIn
      </a>
      <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md"
         href="https://behance.net/vivekrajput7594" target="_blank" rel="noopener noreferrer">Behance</a>
      <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md"
         href="https://github.com/vivekrajput7594" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </div>
</footer>`;

  /* ── INJECT ──────────────────────────────────────────────────────── */
  const navEl    = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');

  if (navEl)    navEl.innerHTML    = (navType === 'main') ? mainNavHTML : caseStudyNavHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  /* ── MOBILE MENU TOGGLE ──────────────────────────────────────────── */
  const mobileBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  /* ── HIDE NAV ON SCROLL DOWN ─────────────────────────────────────── */
  const nav = document.getElementById('main-nav');
  if (nav && navType === 'main') {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const cur = window.pageYOffset;
      if (cur <= 0) { nav.style.transform = 'translateY(0)'; return; }
      nav.style.transform = (cur > lastScroll && cur > 100) ? 'translateY(-100%)' : 'translateY(0)';
      lastScroll = cur;
    });
  }
})();
