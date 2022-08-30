/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import { searchXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import GameCard from '@/components/GameCard.jsx';
import EmptyList from '@/components/EmptyList.jsx';

export const handler = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q');
    const games = await fetch(searchXboxURL(q)).then(res => res.json());
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
