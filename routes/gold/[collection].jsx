import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import GameCard from '@/components/GameCard.jsx';
import EmptyList from '@/components/EmptyList.jsx';
import { titles } from '@/utils.js';

export default async function Gold(req, ctx) {
  const { collection } = ctx.params;
  const games = await fetch(getXboxURL(collection, 0)).then(res => res.json());

  return (
    <>
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
    </>
  )
}
