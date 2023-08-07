import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import CollectionList from '@/islands/CollectionList.jsx';
import { titles } from '@/utils.js';

export const handler = {
  async GET(req, ctx) {
    const { collection } = ctx.params;
    const games = await fetch(getXboxURL(collection, 0)).then(res => res.json());
    const game = games[0];
    const lcp = game.images.boxart ? game.images.boxart.url : game.images.poster?.url;
    return ctx.render({ collection, games, lcp });
  },
};

export default function Collection({ data }) {
  const { collection, games, lcp } = data;
  return (
    <Layout>
      <Head>
        <title>{`${titles[collection]} | XStore`}</title>
        <link rel="preload" as="image" href={`${lcp}?w=330`} fetchpriority="high" />
      </Head>
      <div class="collection list page page-on">
        <div class="collection-content page-content">
          <h2>{titles[collection]}</h2>
          <CollectionList type={collection} games={games} />
        </div>
      </div>
    </Layout>
  )
}
