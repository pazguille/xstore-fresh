import { Head } from '$fresh/runtime.ts';
import { getXboxURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import Island from '@/components/Island.jsx';
import CollectionList from '@/is-lands/CollectionList.jsx';
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
          <Island whenIdle>
            <CollectionList type={collection} games={games} />
          </Island>
        </div>
      </div>
    </Layout>
  )
}
