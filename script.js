/* ============================================================
   MULANGA MADZIMBALALA — PORTFOLIO JAVASCRIPT
   script.js
   ============================================================
   TABLE OF CONTENTS
   01. Project Data
   02. Project Modal — Open & Close
   03. Modal Gallery Tabs
   04. Project Card Filter
   05. Experience Tab Switcher
   06. Navigation — Scroll & Mobile Menu
   07. Scroll-To-Top Button
   08. Scroll Reveal Animations
   09. Contact Form
   10. Preloader + Hero Entrance
   ============================================================ */


/* ============================================================
   01. PROJECT DATA
   ─────────────────────────────────────────────────────────────
   HOW TO ADD SCREENSHOTS:
   ─ heroImg  → the large image shown at the top of the modal
               e.g.  heroImg: 'Assets/PreXpiry/hero.png'

   ─ screens  → array of gallery tab images (click to swap hero)
               each item: { label: 'Tab name', src: 'path.jpg' }
               e.g.  { label: 'Dashboard', src: 'Assets/PreXpiry/pic1.png' }

   HOW TO ADD A VIDEO:
   ─ videoSrc → path to your .mp4 demo video
               e.g.  videoSrc: 'Assets/PreXpiry/demo.mp4'
               Leave as '' to show the placeholder.

   HOW TO ADD LINKS:
   ─ github   → direct repo URL
   ─ demo     → live deployment URL (set '#' if not deployed yet)

   COMING SOON PROJECTS (SkillBridge & TrackIt):
   ─ comingSoon: true   — clicking the card shows a "Coming Soon"
                          toast instead of opening the modal.
                          The card is blurred in the HTML via CSS.
   ============================================================ */

const PROJECT_DATA = {

  /* ── PreXpiry ──────────────────────────────────────────── */
  prexpiry: {
    title:    'PreXpiry',
    subtitle: 'Pharmaceutical Inventory & Expiry Tracking',
    desc:     'PreXpiry is a pharmaceutical inventory management system built to help pharmacies track stock levels and medicine expiration dates. The platform features real-time database monitoring, colour-coded expiry alerts, a full inventory dashboard, and a subscription billing model powered by PayFast.',
    features: [
      'Colour-coded expiration alert system for medication tracking',
      'Real-time inventory dashboard with database-driven monitoring',
      'PayFast payment gateway integration for subscription billing',
      'Supplier management workflows and automated stock level alerts',
      'Designed to minimise medication waste and improve pharmacy compliance',
    ],
    stack:    ['JavaScript', 'Firebase', 'HTML5', 'CSS3', 'SQL', 'PayFast'],
    icon:     'fa-capsules',
    github:   'https://github.com/cyerMadzi',
    demo:     '#',

    /* ── SCREENSHOTS ──
       Replace '' with the path to each image.
       heroImg shows first when modal opens.
       screens[] are the clickable gallery tabs below the hero. */
    heroImg:  'Assets/Prexpiry/pic1.png',
    screens: [
      { label: 'Screen 01', src: 'Assets/Prexpiry/pic1.png' },
      { label: 'Screen 02', src: 'Assets/Prexpiry/pic2.png' },
      { label: 'Screen 03', src: 'Assets/Prexpiry/pic3.png' },
      /* ADD MORE: { label: 'Screen 04', src: 'Assets/Prexpiry/pic4.png' }, */
    ],

    /* ── DEMO VIDEO ──
       Replace '' with e.g. 'Assets/Prexpiry/demo.mp4'
       Leave '' to show the placeholder. */
    videoSrc: '',
  },


  /* ── GigHost ────────────────────────────────────────────── */
  gighost: {
    title:    'GigHost',
    subtitle: 'Artist & Talent Booking Marketplace · Ongoing',
    desc:     'GigHost is a digital talent marketplace connecting artists, influencers, and performers with event organisers. It supports artist profile management, availability scheduling, booking workflows, and talent discovery — all backed by Stripe-powered escrow payments and automated payout flows.',
    features: [
      'Artist profile management with availability scheduling',
      'Booking workflow system for event organisers',
      'Stripe payment gateway with escrow-style payment holds',
      'Automated freelancer payout flows on booking completion',
      'Marketplace-style architecture designed for scalability',
    ],
    stack:    ['Flutter', 'Dart', 'Firebase', 'REST API', 'Stripe API', 'BLoC'],
    icon:     'fa-music',
    github:   'https://github.com/cyerMadzi',
    demo:     '#',
    heroImg:  'Assets/GigHost/pic1.png',
    screens: [
      { label: 'Screen 01', src: 'Assets/GigHost/pic1.png' },
      { label: 'Screen 02', src: 'Assets/GigHost/pic2.png' },
      { label: 'Screen 03', src: 'Assets/GigHost/pic3.png' },
      { label: 'Screen 04', src: 'Assets/GigHost/pic5.png' },
      /* ADD MORE: { label: 'Screen 05', src: 'Assets/GigHost/pic6.png' }, */
    ],
    videoSrc: '',
  },


  /* ── Epic ───────────────────────────────────────────────── */
  epic: {
    title:    'Epic',
    subtitle: 'Restaurant Reservation Platform',
    desc:     'Epic is a web-based restaurant reservation platform enabling customers to browse restaurants, check real-time table availability, and make online bookings. A full restaurant-side administration panel handles bookings and customer flow, and reservation deposits are collected securely via PayPal REST API.',
    features: [
      'Customer-facing reservation system with real-time availability',
      'Restaurant administration panel for booking and customer management',
      'Online pre-payment for reservation deposits via PayPal REST API',
      'Responsive design optimised for desktop and mobile',
      'Database-driven scheduling and customer flow management',
    ],
    stack:    ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'PayPal REST API'],
    icon:     'fa-utensils',
    github:   'https://github.com/cyerMadzi',
    demo:     '#',
    heroImg:  'Assets/Epic/pic1.png',
    screens: [
      { label: 'Screen 01', src: 'Assets/Epic/pic1.png' },
      { label: 'Screen 02', src: 'Assets/Epic/pic2.png' },
      { label: 'Screen 03', src: 'Assets/Epic/pic3.png' },
      /* ADD MORE: { label: 'Screen 04', src: 'Assets/Epic/pic4.png' }, */
    ],
    videoSrc: '',
  },


  /* ── WebCraft Studios ───────────────────────────────────── */
  webcraft: {
    title:    'WebCraft Studios',
    subtitle: 'Business & E-Commerce Web Design Platform',
    desc:     'WebCraft Studios is a responsive business website built to showcase professional web design and digital services for clients across South Africa and internationally. The platform features detailed service packages for business and e-commerce websites, interactive pricing sections, a portfolio showcase, customer testimonials, and lead generation tools via enquiry forms and WhatsApp integration. Deployed on Render with Firebase for backend services.',
    features: [
      'Responsive mobile, tablet, and desktop design',
      'Dynamic service and pricing package presentation',
      'Business and e-commerce website quotation system',
      'Portfolio showcase for previous client projects',
      'Customer reviews and testimonials section',
      'WhatsApp integration for direct client enquiries',
      'Contact and lead generation forms',
      'SEO-friendly page structure and performance optimisation',
      'AI-powered chatbot for visitor enquiries',
      'Conversion-focused user experience design',
    ],
    stack:    ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Render', 'SEO Optimisation', 'UI/UX Design'],
    icon:     'fa-globe',
    github:   'https://github.com/cyerMadzi',
    demo:     '#',            /* UPDATE: replace with your Render deployment URL */

    /* ── SCREENSHOTS ──
       Add your WebCraft screenshots here.
       heroImg:  'Assets/WebCraft/pic1.png',
       screens: [
         { label: 'Home',     src: 'Assets/WebCraft/pic1.png' },
         { label: 'Services', src: 'Assets/WebCraft/pic2.png' },
         { label: 'Pricing',  src: 'Assets/WebCraft/pic3.png' },
       ],
    */
    heroImg:  '',             /* UPDATE: add your screenshot path */
    screens:  [],             /* UPDATE: add { label, src } objects */
    videoSrc: '',             /* UPDATE: add demo video path */
  },


  /* ── SkillBridge — COMING SOON ──────────────────────────── */
  skillbridge: {
    title:       'SkillBridge',
    subtitle:    'Freelance Services Marketplace',
    desc:        'SkillBridge is a peer-to-peer freelance platform connecting clients with verified service providers. It features advanced search and filtering, real-time chat, and milestone-based project management. Stripe Connect handles split payments, service-fee deductions, and automated freelancer payouts.',
    features: [
      'Advanced search and filtering for service provider discovery',
      'Real-time chat between clients and service providers',
      'Milestone-based project management and progress tracking',
      'Stripe Connect for split payments, fee deductions, and payouts',
      'Review and rating system to build platform trust and quality',
    ],
    stack:       ['Flutter', 'Dart', 'Firebase', 'REST API', 'Stripe Connect'],
    icon:        'fa-handshake',
    github:      'https://github.com/cyerMadzi',
    demo:        '#',
    heroImg:     '',
    screens:     [],
    videoSrc:    '',
    comingSoon:  true,    /* ← This marks the card as Coming Soon */
  },


  /* ── TrackIt — COMING SOON ──────────────────────────────── */
  trackit: {
    title:       'TrackIt',
    subtitle:    'Personal Finance & Budget Tracker',
    desc:        'TrackIt is a cross-platform mobile budgeting app featuring expense categorisation, spending insights, and monthly goal tracking. A Python data processing layer generates Power BI-compatible reports and exportable financial summaries. Built with interactive charts and BLoC state management.',
    features: [
      'Expense categorisation with a visual spending insights dashboard',
      'Monthly budget goal tracking and real-time progress monitoring',
      'Python (pandas) data processing scripts for advanced reporting',
      'Power BI-compatible export of financial summaries',
      'Interactive charts with clean UI and BLoC state management',
    ],
    stack:       ['Flutter', 'Dart', 'Firebase', 'Python', 'pandas', 'Power BI', 'BLoC'],
    icon:        'fa-wallet',
    github:      'https://github.com/cyerMadzi',
    demo:        '#',
    heroImg:     '',
    screens:     [],
    videoSrc:    '',
    comingSoon:  true,    /* ← This marks the card as Coming Soon */
  },

};


/* ============================================================
   02. PROJECT MODAL — OPEN & CLOSE
   ─────────────────────────────────────────────────────────────
   openProject(id)
     • Reads PROJECT_DATA[id]
     • If comingSoon === true → shows toast, does NOT open modal
     • Otherwise → fills and opens the modal

   closeProjectModal()   — hides modal, restores page scroll
   closeModalOutside(e)  — closes if dark overlay is clicked
   Escape key            — also closes the modal
   ============================================================ */

/**
 * Show a brief "Coming Soon" toast notification.
 * Used for projects that are still in development.
 */
function showComingSoonToast(projectTitle) {
  /* Remove any existing toast first */
  const existing = document.getElementById('comingSoonToast');
  if (existing) existing.remove();

  /* Create toast element */
  const toast = document.createElement('div');
  toast.id = 'comingSoonToast';
  toast.innerHTML = `
    <i class="fa fa-clock"></i>
    <span><strong>${projectTitle}</strong> is coming soon — currently in development.</span>
  `;

  /* Inline styles so it works without any extra CSS */
  Object.assign(toast.style, {
    position:       'fixed',
    bottom:         '2.5rem',
    left:           '50%',
    transform:      'translateX(-50%) translateY(20px)',
    background:     '#1a1a1a',
    color:          '#f2f0eb',
    padding:        '0.85rem 1.5rem',
    borderRadius:   '50px',
    fontSize:       '0.85rem',
    fontWeight:     '500',
    display:        'flex',
    alignItems:     'center',
    gap:            '0.6rem',
    zIndex:         '9999',
    boxShadow:      '0 8px 30px rgba(0,0,0,0.25)',
    opacity:        '0',
    transition:     'opacity 0.3s ease, transform 0.3s ease',
    whiteSpace:     'nowrap',
    maxWidth:       '90vw',
    pointerEvents:  'none',
    fontFamily:     'var(--font-sans, DM Sans, sans-serif)',
  });

  /* Purple dot accent */
  const dot = toast.querySelector('i');
  if (dot) dot.style.color = '#7c6fe0';

  document.body.appendChild(toast);

  /* Animate in */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity    = '1';
      toast.style.transform  = 'translateX(-50%) translateY(0)';
    });
  });

  /* Auto-dismiss after 3 seconds */
  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}


/**
 * Open the project detail modal for the given project id.
 * If the project is marked comingSoon, shows a toast instead.
 * @param {string} id — key in PROJECT_DATA (e.g. 'prexpiry')
 */
function openProject(id) {
  const project = PROJECT_DATA[id];
  if (!project) return;

  /* ── Coming soon: block modal, show toast ── */
  if (project.comingSoon) {
    showComingSoonToast(project.title);
    return;
  }

  /* ── Populate text content ── */
  document.getElementById('modalTitle').textContent    = project.title;
  document.getElementById('modalSubtitle').textContent = project.subtitle;
  document.getElementById('modalDesc').textContent     = project.desc;

  /* ── Populate links ── */
  document.getElementById('modalGithub').href = project.github || '#';
  document.getElementById('modalDemo').href   = project.demo   || '#';

  /* ── Features list ── */
  document.getElementById('modalFeats').innerHTML = project.features
    .map(f => `<li>${f}</li>`)
    .join('');

  /* ── Tech stack tags ── */
  document.getElementById('modalTags').innerHTML = project.stack
    .map(s => `<span class="modal-tag">${s}</span>`)
    .join('');

  /* ── Hero image or icon placeholder ──
     heroImg path → shows as <img>
     no heroImg   → shows icon + text placeholder              */
  const heroEl = document.getElementById('modalHero');
  if (project.heroImg) {
    heroEl.innerHTML = `<img src="${project.heroImg}" alt="${project.title} screenshot" class="modal-hero-img">`;
  } else {
    heroEl.innerHTML = `
      <div class="modal-hero-placeholder">
        <i class="fa ${project.icon}"></i>
        <p>Add your project screenshot here</p>
      </div>`;
  }

  /* ── Gallery tabs ──
     If screens[] has items → build real clickable tabs.
     If screens[] is empty  → show 3 placeholder tabs.
     A "Demo Video" tab is always appended at the end.        */
  const galEl  = document.getElementById('modalGal');
  const screens = project.screens || [];

  let tabsHtml = '';

  if (screens.length > 0) {
    screens.forEach((screen, i) => {
      tabsHtml += `<div class="gal-tab${i === 0 ? ' active' : ''}" data-index="${i}">${screen.label || 'Screen ' + String(i + 1).padStart(2, '0')}</div>`;
    });
  } else {
    /* Placeholder tabs — visible but clicking them won't swap images
       until you add real paths to the screens[] array above.        */
    tabsHtml = `
      <div class="gal-tab active" data-index="0">Screen 01</div>
      <div class="gal-tab"        data-index="1">Screen 02</div>
      <div class="gal-tab"        data-index="2">Screen 03</div>`;
  }

  /* Video tab always present */
  tabsHtml += `<div class="gal-tab" data-index="video">Demo Video</div>`;
  galEl.innerHTML = tabsHtml;

  /* ── Tab click listeners ── */
  galEl.querySelectorAll('.gal-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      /* Update active state */
      galEl.querySelectorAll('.gal-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const idx = this.dataset.index;

      /* Video tab → scroll to the video player */
      if (idx === 'video') {
        const videoWrap = document.querySelector('.modal-video');
        if (videoWrap) videoWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      /* Screenshot tab → swap hero image */
      const i = parseInt(idx, 10);
      if (screens[i] && screens[i].src) {
        heroEl.innerHTML = `<img src="${screens[i].src}" alt="${project.title} screenshot ${i + 1}" class="modal-hero-img">`;
      }
    });
  });

  /* ── Demo video ──
     videoSrc path → shows real <video> player
     no videoSrc   → shows placeholder                         */
  const videoWrap = document.querySelector('.modal-video');
  if (project.videoSrc) {
    videoWrap.innerHTML = `
      <video controls>
        <source src="${project.videoSrc}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>`;
  } else {
    videoWrap.innerHTML = `
      <div class="video-ph">
        <i class="fa fa-circle-play"></i>
        <p>Add your demo video here — update videoSrc in script.js</p>
      </div>`;
  }

  /* ── Show modal ── */
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}


/**
 * Close the project modal and restore page scrolling.
 */
function closeProjectModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Close modal if the user clicks outside the modal card (on the dark overlay).
 * @param {MouseEvent} e
 */
function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    closeProjectModal();
  }
}

/* Close modal with Escape key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeProjectModal();
});

/* ── Wire up every project card to open its modal on click ── */
document.querySelectorAll('.proj-card').forEach(function (card) {
  card.addEventListener('click', function () {
    const id = card.dataset.project;
    if (id) openProject(id);
  });
});


/* ============================================================
   03. PROJECT CARD FILTER
   ─────────────────────────────────────────────────────────────
   Filter buttons (All / Flutter / Web / etc.) show or hide
   .proj-card elements by matching data-category on each card.
   ============================================================ */

document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    /* Update active state */
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.proj-card').forEach(function (card) {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});


/* ============================================================
   04. EXPERIENCE TAB SWITCHER
   ─────────────────────────────────────────────────────────────
   Clicking a role tab in the sidebar activates the matching
   content panel. Called via onclick="switchExp('id', this)".
   ============================================================ */

function switchExp(panelId, tabEl) {
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));

  const target = document.getElementById('exp-' + panelId);
  if (target) target.classList.add('active');
  tabEl.classList.add('active');
}


/* ============================================================
   05. NAVIGATION — SCROLL & MOBILE MENU
   ============================================================ */

const navbar    = document.getElementById('navbar');
const menuBtn   = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

menuBtn.addEventListener('click', function () {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.innerHTML = isOpen
    ? '<i class="fa fa-xmark"></i>'
    : '<i class="fa fa-bars"></i>';
});

function closeMobile() {
  mobileNav.classList.remove('open');
  menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
}


/* ============================================================
   06. SCROLL-TO-TOP BUTTON
   ============================================================ */

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
});


/* ============================================================
   07. SCROLL REVEAL ANIMATIONS
   ─────────────────────────────────────────────────────────────
   Elements with .reveal fade in when they enter the viewport.
   Delay classes .rd1–.rd4 stagger siblings.
   ============================================================ */

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ============================================================
   08. CONTACT FORM
   ─────────────────────────────────────────────────────────────
   Front-end only. To send real emails use Formspree or EmailJS.
   See comments in script for integration options.
   ============================================================ */

function handleSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('formOk');
  successMsg.style.display = 'flex';
  e.target.reset();
  setTimeout(function () {
    successMsg.style.display = 'none';
  }, 5000);
}


/* ============================================================
   09. PRELOADER + HERO ENTRANCE
   ─────────────────────────────────────────────────────────────
   The preloader overlay hides the page while fonts and images
   load. Once ready (or after maxDelay ms), it fades out and
   the hero bento cards animate in via CSS transitions.
   ============================================================ */

document.body.classList.add('is-loading');

const preloader = document.getElementById('preloader');
const heroGrid  = document.querySelector('.bento-hero');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let revealed = false;

function revealSite() {
  if (revealed) return;
  revealed = true;

  document.body.classList.remove('is-loading');
  if (preloader) preloader.classList.add('loaded');
  if (heroGrid)  heroGrid.classList.add('hero-in');
}

const minDelay = prefersReduced ? 50 : 1100;
const maxDelay = prefersReduced ? 50 : 3500;

if (document.readyState === 'complete') {
  setTimeout(revealSite, minDelay);
} else {
  window.addEventListener('load', () => setTimeout(revealSite, minDelay));
}

/* Safety fallback — always reveal by maxDelay */
setTimeout(revealSite, maxDelay);