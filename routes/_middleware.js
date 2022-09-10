export async function handler(req, ctx) {
  const accept = req.headers.get('accept');
  const res = await ctx.next();
  if (accept && accept.includes('text/html')) {
    res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  } else {
    res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  return res;
};
