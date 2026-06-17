// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar visibility on scroll
let lastScroll = 0;
const nav = document.querySelector('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            nav.classList.remove('shadow-none');
            return;
        }
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
}

// Subtle scroll reveal effect for card containers
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('.card-border, .surface-card, .glass-card').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});

function animateCounter(el) {
  const targetText = el.dataset.target || '0';
  const target = parseFloat(targetText);
  const isDecimal = targetText.includes('.');
  const suffix = el.dataset.suffix || '';
  const duration = 700; // fast, snappy animation
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    
    // EaseOut Quart function for a snappy start and smooth finish
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const current = target * easeOut;
    
    el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = targetText + suffix;
    }
  }
  
  el.textContent = (isDecimal ? '0.0' : '0') + suffix;
  window.requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-counter]').forEach(el => {
  counterObserver.observe(el);
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const bars = entry.target.querySelectorAll('.skill-bar');
      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.transition = 'width 1s ease-in-out';
          bar.style.width = bar.dataset.width + '%';
        }, i * 150);
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.glass-card').forEach(el => {
  if (el.querySelector('.skill-bar')) skillObserver.observe(el);
});
