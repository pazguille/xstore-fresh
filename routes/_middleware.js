export async function handler(req, ctx) {
  const accept = req.headers.get('accept');
  const res = await ctx.next();
  if (accept && accept.includes('text/html')) {
    res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  return res;
};
