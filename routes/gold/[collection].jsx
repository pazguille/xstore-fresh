import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameCard from '@/components/GameCard.jsx';
import EmptyList from '@/components/EmptyList.jsx';
import { titles } from '@/utils.js';

export const handler = {
  async GET(req, ctx) {
    const { collection } = ctx.params;
    const games = await fetch(getXboxURL(collection, 0)).then(res => res.json());
    return ctx.render({ collection, games });
  },
};

export default function Gold({ data }) {
  const { collection, games } = data;

  return (
    <Layout>
      <Head>
        <title>{`${titles[collection]} | XStore`}</title>

      </Head>
      <div class="collection list page page-on">
        <div class="collection-content page-content">
          <h2>{titles[collection]}</h2>
          {games.length ? <ul>{games.map((game, index) => (
            <li key={index} >
              <GameCard game={game} lazy={ index!==0 } />
            </li>
          ))}</ul> : <EmptyList />}
        </div>
      </div>
    </Layout>
  )
}
