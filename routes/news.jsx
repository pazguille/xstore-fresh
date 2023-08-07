import { Head } from '$fresh/runtime.ts';
import { getXboxNewsURL } from '@/utils.js';
import Layout from '@/components/Layout.jsx';
import News from '@/components/News.jsx';

export const handler = {
  async GET(req, ctx) {
    const news = await fetch(getXboxNewsURL()).then(res => res.json());
    return ctx.render(news);
  },
};

export default function NewsPage({ data }) {
  const news = data;
  return (
    <Layout section="news">
      <Head>
        <link rel="preload" as="image" href={news[0].image} fetchpriority="high" />
      </Head>
      <div className="news page page-fixed page-on">
        <div className="news-content page-content">
          <h2><img src="/src/assets/icons/news.svg" width="24" height="24" /> Noticias recientes</h2>
          <ul>
            {news.map((n, i) => (
              <li key={i}>
                <News news={n} lazy={ i!==0 } />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
