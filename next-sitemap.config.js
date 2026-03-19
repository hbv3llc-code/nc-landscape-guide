/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nclcrb.org',
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
