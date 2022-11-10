import { Head } from '$fresh/runtime.ts';
import { gameXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameCard from '@/components/GameCard.jsx';
import EmptyList from '@/components/EmptyList.jsx';

function fetchSearchGames(query) {
  const params = new URLSearchParams({
    market: 'es-ar',
    clientId: '7F27B536-CF6B-4C65-8638-A0F8CBDFCA65',
    sources: 'DCatAll-Products',
    filter: '+ClientType:StoreWeb',
    counts: '20,0,0',
    query,
  }).toString();
  return fetch(`https://www.microsoft.com/msstoreapiprod/api/autosuggest?${params}`, {
    headers: {
      'accept-language': 'es,es-419;q=0.9,en;q=0.8',
    }
  })
  .then(response => response.json())
  .then(response => response.ResultSets[0])
  .then(data => {
    if (!data) { return Promise.reject(new Error()); }
    return data.Suggests
      .filter((result) => result.Source === 'Juego')
      .map((result) => result.Metas[0].Value);
  })
  .then((games) => fetch(gameXboxURL(games)).then(res => res.json()))
  .catch(err => { throw { error: err }; });
};

export const handler = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q');
    const games = await fetchSearchGames(q);
    return ctx.render({ q, games });
  },
};

export default function Search({ data }) {
  const { q, games } = data;

  return (
    <Layout>
      <Head>
        <title>{`${q} | XStore`}</title>
      </Head>
      <div class="results list page page-on">
        <div class="results-content page-content">
          <h2>Resultados para "{q}"</h2>
          {games.length ? <ul>{games.map((game, index) => (
            <li key={index} >
              <GameCard game={game} />
            </li>
          ))}</ul> : <EmptyList />}
        </div>
      </div>
    </Layout>
  )
}
