// const cspHeader = `
//     default-src 'self' 'https://ecc.staging.dso.mil' 'https://ecc.staging.dso.mil/ecc-openlxp-xds/' 'https://ecc.apps.dso.mil''https://ecc.apps.dso.mil/ecc-openlxp-xds-ui/';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'https://ecc.apps.dso.mil' 'https://ecc.apps.dso.mil/ecc-openlxp-xds-ui/' 'https://ecc.staging.dso.mil' 'https://fonts.googleapis.com';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `

const { createSecureHeaders } = require("next-secure-headers");


module.exports = {

  reactStrictMode: true,
  swcMinify: true,
    // basePath: '/ecc-openlxp-xds-ui',
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          forceHTTPSRedirect: [
            true,
            { maxAge: 1024000, includeSubDomains: true, preload: true },
          ],
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                "https://ecc.staging.dso.mil",
                "https://ecc.staging.dso.mil/ecc-openlxp-xds/",
                "https://ecc.apps.dso.mil",
                "https://ecc.apps.dso.mil/ecc-openlxp-xds-ui/",
                "'unsafe-eval'"
              ],
              styleSrc: [
                "'self'",
                "https://ecc.apps.dso.mil",
                "https://ecc.apps.dso.mil/ecc-openlxp-xds-ui/",
                "https://ecc.staging.dso.mil",
                "https://fonts.googleapis.com",
                "'unsafe-inline'"

              ],
              imgSrc: ["'self'",
                "data:",
                "data:*",
                "https://www.jcs.mil",
                "https://www.aetc.af.mil",
                "https://prod-discovery.edx-cdn.org",
              ],
              fontSrc: [
                "'self'",
                "https://fonts.gstatic.com",

              ],
              frameAncestors: [
                "'self'",
                "https://ecc.staging.dso.mil",
                "https://ecc.apps.dso.mil",
                "https://ecc.apps.dso.mil/ecc-openlxp-xms-ui/"
              ]
            },
            frameGuard: "deny",
            noopen: "noopen",
            nosniff: "nosniff",
            xssProtection: "sanitize",
            referrerPolicy: "origin-when-cross-origin",
          }
        })
      },
    ];
  },
}