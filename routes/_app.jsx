import { Head } from "$fresh/runtime.ts";
import { getPageFromURL } from '@/utils.js';

export default async function App(req, ctx) {
  const accept = req.headers.get('accept');

  if (accept) {
    if (accept.includes('text/html')) {
      const { page, store, lang } = getPageFromURL(req.url);
      ctx.state.section = page;
      ctx.state.lang = lang;
      ctx.state.store = store;
      ctx.state.back = false;

      if (
        !['home', 'wishlist', 'news'].includes(page)
        &&
        (req.headers.get('referer') !== req.url && req.headers.get('referer') !== null)
      ) {
        ctx.state.back = true;
      }
    }
  }

  return (
    <html lang={`${ctx.state.lang}-${ctx.state.store}`}>
      <Head />
      <body>
        <ctx.Component />
      </body>
    </html>
  );
}
