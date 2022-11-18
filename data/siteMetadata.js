const siteMetadata = {
  title: 'Raul Pacheco',
  author: 'Raul Pacheco Rodriguez',
  headerTitle: 'Raul Pacheco',
  description:
    '✨ Este es un espacio para que aprendamos juntos 👩‍💻👨‍💻 sobre desarrollo de tecnologia 🛰️. Aprende conmigo Desarrollo Web, Inteligencia Artificial, Electronica y más. ¡Construyamos la tecnologia del futuro 🙌!',
  language: 'es-mx',
  theme: 'system', // system, dark or light
  siteUrl: 'https://raulpacheco.dev',
  siteRepo: 'https://github.com/RaulprTech/blog-portfolio-2022',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@raulpacheco.me',
  github: 'https://github.com/RaulprTech',
  twitter: 'https://twitter.com/RaulprTech',
  facebook: 'https://facebook.com/RaulprTech',
  youtube: 'https://youtube.com/RaulprTech',
  linkedin: 'https://www.linkedin.com/in/RaulprTech',
  instagram: 'https://www.instagram.com/RaulprTech',
  whatsapp: 'https://wa.link/57j5f1',
  feedly: 'https://feedly.com/i/subscription/feed/https://raulpacheco.dev/feed.xml',
  rss: 'https://feedly.com/i/subscription/feed/https://raulpacheco.dev/feed.xml',
  platzi: 'https://platzi.com/p/RaulprTech/',
  pinterest: 'https://pin.it/3DnwKxF',
  googlenews: 'https://news.google.com/publications/CAAqBwgKMPDjwwswk__aAw?ceid=MX:es-419&oc=3',
  locale: 'es-MX',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'https://raulpacheco.dev/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-84HCGBBFCK', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'mailchimp',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'es',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
