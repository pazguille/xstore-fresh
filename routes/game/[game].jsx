/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import { gameXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameDetail from '@/components/GameDetail.jsx';

export const handler = {
  async GET(req, ctx) {
    const gameId = ctx.params.game.split('_')[1];

    if (!gameId) {
      return Response.redirect(new URL(req.url).origin, 307);
    }

    const game = await fetch(gameXboxURL(gameId)).then(res => res.json()).then(game => game[0]);
    const lcp = game.images.titledheroart ?
      (game.images.titledheroart.url || game.images.titledheroart[0].url)
      : game.images.screenshot ? game.images.screenshot[0].url
      : game.images.superheroart.url;

    return ctx.render({ game, lcp });
  },
};

export default function Detail({ data }) {
  const { game, lcp } = data;

  return (
    <Layout>
      <Head>
        <title>{`${game.title} | XStore`}</title>
        <meta name="description" content={`${game.title}: ${game.description.split('.')[0].replace(/\n/gi, '')}.`} />
        <link rel="preload" as="image" href={`${lcp}?w=1160&q=70`} fetchpriority="high" />
        <link rel="preconnect" href="https://media.rawg.io/" />
      </Head>
      <div className="detail page page-on">
        <div className="detail-content page-content">
          <GameDetail game={game} />
        </div>
      </div>

      {/* <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
          document.querySelector('.detail-content').addEventListener('click', (eve) => {
            if (eve.target.classList.contains('game-buy-now')) {
              gtag('event', 'begin_checkout', {
                page_location: window.location.href,
              });
            }

            if (eve.target.classList.contains('share-btn')) {
              gtag('event', 'share', {
                page_location: window.location.href,
              });
            }

            if (eve.target.classList.contains('fav-btn')) {
              if (eve.target.active) {
                gtag('event', 'add_to_wishlist', {
                  page_location: window.location.href,
                });
              }
            }
          });
        });
      `}} /> */}
    </Layout>
  )
}
