import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import CollectionList from '@/islands/CollectionList.jsx';
import { titles } from '@/utils.js';

export default async function Collection(req, ctx) {
  const { collection } = ctx.params;
  const games = await fetch(getXboxURL(collection, 0)).then(res => res.json());
  const game = games[0];
  const lcp = game.images.boxart ? game.images.boxart.url : game.images.poster?.url;

  return (
    <>
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
    </>
  )
}
