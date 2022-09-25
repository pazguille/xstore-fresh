export async function handler(req, ctx) {
  const accept = req.headers.get('accept');
  const res = await ctx.next();
  if (accept) {
    if (accept.includes('text/html')) {
      res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

    } else if (accept.includes('image/*') || req.url.includes('.woff2')) {
      res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
  return res;
};
