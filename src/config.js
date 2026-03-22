// ============================================================
//  SITE CONFIG
//  This is the only file you need to edit to update your site.
//  Every piece of visible copy, every link, every label lives here.
// ============================================================

export const SITE = {

  // ── Identity ──────────────────────────────────────────────
  name:   'Your Name',
  handle: 'Copywriter',   // subtitle under your name in the nav
  role:   'Copywriter & Creative',  // shown in footer

  // ── SEO / Browser tab ─────────────────────────────────────
  siteTitle:   'Your Name — Copywriter',
  description: 'Freelance copywriter. Brand copy, technical writing, creative content, and advertising.',
  siteUrl:     'https://your-site.netlify.app',  // update after deploying

  // ── Contact ───────────────────────────────────────────────
  email:        'hello@yourname.com',
  responseTime: 'Within 24 hours',
  available:    true,  // set to false to show "Not currently available"

  // ── Social links (set any to '' to hide it) ───────────────
  linkedin:  'https://linkedin.com/in/yourhandle',
  bluesky:   'https://bsky.app/profile/yourhandle',
  instagram: 'https://instagram.com/yourhandle',

  // ── Home page ─────────────────────────────────────────────
  home: {
    eyebrow:       'Freelance Copywriter',
    // Your name is shown as the H1 — edit SITE.name above
    bio:           'I write for brands that want to say something real. Across brand strategy, technical documentation, creative writing, and advertising — clarity and a reason to care, every time.',
    cta_primary:   'View My Work',
    cta_secondary: 'Get In Touch',
    featured_heading:  'Featured Work',
    featured_subhead:  'Recent projects',
    featured_link:     'View all work →',
  },

  // ── Stats (shown on home and about pages) ─────────────────
  stats: [
    { num: '5+',  label: 'Years Writing'  },
    { num: '40+', label: 'Clients Served' },
  ],

  // ── Work page ─────────────────────────────────────────────
  work: {
    eyebrow:  'Portfolio',
    heading:  'Writing Samples',
    subhead:  'A cross-section of work spanning brand, technical, creative, and advertising formats. Swap in your own samples via src/data/samples.js.',
    read_btn: 'Read Sample →',
  },

  // ── Testimonials page ─────────────────────────────────────
  testimonials: {
    eyebrow:  'Client Reviews',
    heading:  'Testimonials',
    subhead:  'What people say after we\'ve worked together.',
    cta_text: 'Want to add your review?',
    cta_link: 'Get in touch',
    cta_note: 'and I\'ll send you a short form.',
  },

  // ── About page ────────────────────────────────────────────
  about: {
    eyebrow:       'Background',
    heading:       'About Me',
    headlinePart1: 'A writer who thinks',
    headlineEm:    'before they write.',
    bio: [
      "I'm a freelance copywriter with a background spanning brand marketing, technical communication, and literary writing. I've written landing pages, white papers, email sequences, short stories, and ad campaigns — and I approach all of them the same way: figure out what the reader needs, then get out of the way.",
      "Outside of work I'm reading Brandon Sanderson, watching Dota, and thinking about why some stories earn your attention and others don't. It turns out the answer is the same whether you're writing a fantasy epic or a six-word tagline.",
    ],
    services_heading: 'What I Do',
    cta_label: 'Work With Me',
    services: [
      {
        title: 'Brand & Marketing',
        desc:  'Messaging strategy, taglines, brand voice guides, website copy, and campaigns that make a company sound like itself — at its best.',
      },
      {
        title: 'Technical Writing',
        desc:  'White papers, documentation, product explainers, and long-form content that makes complex ideas accessible without losing accuracy.',
      },
      {
        title: 'Creative Copy',
        desc:  'Short stories, essays, scripts, and narrative-driven content for brands and publications that want a genuine literary sensibility.',
      },
      {
        title: 'Advertising',
        desc:  'Print, digital, and social ad copy — from a single sharp headline to a full multi-channel campaign concept.',
      },
    ],
  },

  // ── Contact page ──────────────────────────────────────────
  contact: {
    eyebrow:          'Let\'s Talk',
    heading:          'Get In Touch',
    subhead:          'Tell me about your project and I\'ll tell you whether I\'m the right fit. No hard sell — just an honest conversation.',
    direct_heading:   'Direct Contact',
    social_heading:   'Find Me Online',
    available_yes:    'Currently accepting new projects',
    available_no:     'Not currently available',
    response_label:   'Response time:',
    form_note:        '* Required. I\'ll respond within one business day.',
    submit_label:     'Send Message →',
    success_msg:      'Message received — I\'ll be in touch soon.',
    project_types: [
      'Brand Copy & Messaging',
      'Website / Landing Page',
      'Email Campaign',
      'Technical Writing',
      'Creative / Editorial',
      'Advertising Campaign',
      'Ongoing Retainer',
      'Other',
    ],
  },

};
