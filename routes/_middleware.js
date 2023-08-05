// import { cache } from '../builder.js';
// if (req.url.includes('/islands/')) {
//   const path = new URL(req.url).pathname;
//   const content = cache.get(path);
//   return new Response(content, {
//     headers: {
//       'content-type': 'application/javascript; charset=utf-8',
//       'Cache-Control': 'public, max-age=31536000, immutable'
//     },
//   });

// }

export async function handler(req, ctx) {

  const accept = req.headers.get('accept');
  const res = await ctx.next();
  if (accept) {
    if (accept.includes('image/*') || req.url.includes('.woff2')) {
      res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    } else if (accept.includes('text/html')) {
      res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
  return res;
};
