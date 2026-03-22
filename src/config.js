// ============================================================
//  SITE CONFIG
//  This is the only file you need to edit to update your site.
//  Every piece of visible copy, every link, every label lives here.
// ============================================================

export const SITE = {

  // ── Identity ──────────────────────────────────────────────
  name:   'Benjamin Alban-Berth',
  handle: 'Copywriting Specialist',   // subtitle under your name in the nav
  role:   'Copywriter & Creative',  // shown in footer

  // ── SEO / Browser tab ─────────────────────────────────────
  siteTitle:   'Benjamin Alban-Berth — Copywriter',
  description: 'Freelance copywriter. Technical writing, social media, brand storytelling, and more.',
  siteUrl:     'https://benjalbanberth.netlify.app',  // update after deploying

  // ── Contact ───────────────────────────────────────────────
  email:        'ebroth98@gmail.com',
  responseTime: 'Within 24 hours',
  available:    true,  // set to false to show "Not currently available"

  // ── Social links (set any to '' to hide it) ───────────────
  linkedin:  'https://www.linkedin.com/in/benjamin-alban-berth-bbb8263b6/',
  bluesky:   'https://bsky.app/profile/benjalbanberth.bsky.social',
  instagram: 'https://instagram.com/benjalbanberth',

  // ── Home page ─────────────────────────────────────────────
  home: {
    eyebrow:       'Freelance Copywriter',
    // Your name is shown as the H1 — edit SITE.name above
    bio:           'I am a capable writer with many skills. Able to address your needs in technical copy, eye-catching social media posts, powerful prose, and more.',
    cta_primary:   'View My Work',
    cta_secondary: 'Get In Touch',
    featured_heading:  'Featured Work',
    featured_subhead:  'Recent Projects',
    featured_link:     'View all work →',
  },

  // ── Stats (shown on home and about pages) ─────────────────
  stats: [
    { num: '6+',  label: 'Years Creating'  },
    { num: '10+', label: 'Clients Served' },
  ],

  // ── Work page ─────────────────────────────────────────────
  work: {
    eyebrow:  'Portfolio',
    heading:  'Writing Samples',
    subhead:  'A snapshot of copy created for an assortment of needs. Swap in your own samples via src/data/samples.js.',
    read_btn: 'Read Sample →',
  },

  // ── Testimonials page ─────────────────────────────────────
  testimonials: {
    eyebrow:  'Client Reviews',
    heading:  'Testimonials',
    subhead:  'Here are just a few of my satisfied clients',
    cta_text: 'Happy with your final product?',
    cta_link: 'Get in touch',
    cta_note: 'and I\'ll provide you with a short response form',
  },

  // ── About page ────────────────────────────────────────────
  about: {
    eyebrow:       '',
    heading:       'About Me',
    headlinePart1: 'A thoughtful and competent writer',
    headlineEm:    'with the soul of a poet.',
    bio: [
      "I am a freelance writer with a multitude of talents. I have a background in technical copyediting and expressive content creation, specialized copyediting to AMA 11, MLA, Chicago, social media, and many, many more aspects of the art of the written word. One thing remains consistent across them all: attention to detail and voracious curiosity.",
      "When my eyes aren't glued to a chunk of copy, I am instead hooked inside a great book, dominating the lanes in Dota 2, or slinging spells in a Commander game. Be they words on a page, my client's expectations, or my opponents behind a screen or a battlefield, I demolish them all.",
    ],
    services_heading: 'What I Do',
    cta_label: 'Work With Me',
    services: [
      {
        title: 'Brand, Marketing, and Advertising',
        desc:  'Comprehensive and consistent messaging, taglines, style and voice guidelines, website copy, and campaigns that capture the essence of your brand.',
      },
      {
        title: 'Technical Writing',
        desc:  'Documentation, help articles, product explainers, and other jargon-laden writing made digestible and accessible for every reader.',
      },
      {
        title: 'Creative and Opinionated Content',
        desc:  'Essays, blog posts, articles, opinion pieces, video and podcast scripts that convince your audience clearly, cleanly, concisely, and completely.',
      },
      {
        title: 'Personalized Professional Assistance',
        desc:  'Resume formatting and editing, interview coaching, and how to stand out in a sea of applicants. I use my knowledge of pedagogy and professional trends to help you find the right line of work.',
      },
    ],
  },

  // ── Contact page ──────────────────────────────────────────
  contact: {
    eyebrow:          'Let\'s Talk.',
    heading:          'Get In Touch',
    subhead:          'Tell me your writing requirements and I\'ll give you a full breakdown of what I can provide. No sells, no frills, and no smoke.',
    direct_heading:   'Direct Contact',
    social_heading:   'Stalk My Socials',
    available_yes:    'Currently accepting new clients',
    available_no:     'Busy with a backlog, but send an inquiry anyway!',
    response_label:   'Response time:',
    form_note:        '* Required. You\'ll hear from me within 24 hours.',
    submit_label:     'Send Message →',
    success_msg:      'Heard and acknowledged. I\'ll be in touch with you soon.',
    project_types: [
      'Brand Copy, Messaging, and Guides',
      'Digital Copy / Website Pages',
      'Email Communications',
      'Technical Writing',
      'Creative / Editorial',
      'Advertising & Marketing',
      'Professional Development',
      'Ongoing Retainer',
      'Other',
    ],
  },

};
