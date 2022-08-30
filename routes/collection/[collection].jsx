/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import CollectionList from '@/islands/CollectionList.jsx';
import { titles } from '@/utils.js';

export const handler = {
  async GET(req, ctx) {
    const { collection } = ctx.params;
    const games = await fetch(getXboxURL(collection, 0)).then(res => res.json());
    return ctx.render({ collection, games });
  },
};

export default function Collection({ data }) {
  const { collection, games } = data;

  return (
    <Layout>
      <Head>
        <title>{`${titles[collection]} | XStore`}</title>
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
