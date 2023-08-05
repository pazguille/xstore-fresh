import { getXboxURL } from '@/utils.js';
import { Head } from '$fresh/runtime.ts';
import { asset } from '$fresh/runtime.ts';
import Layout from '@/components/Layout.jsx';
import GameImportant from '@/components/GameImportant.jsx';
import Section from '@/components/Section.jsx';
import SectionWithIsland from '@/components/SectionWithIsland.jsx';
import SupportSection from '@/components/SupportSection.jsx';
import GamePassSection from '@/components/GamePassSection.jsx';
import GoldSection from '@/components/GoldSection.jsx';
import MarketplaceIsland from '../islands/MarketplaceIsland.jsx';

export const handler = {
  async GET(req, ctx) {

    const aboveTheFold = [
      {
        type: 'new',
        title: 'Salidos del horno',
        icon: '',
        list: [],
      },
      {
        type: 'deals',
        title: 'Ahorrate unos pesos',
        icon: <img src="/src/assets/icons/tag.svg" width="24" height="24" />,
        list: [],
      },

      // {
      //   type: 'coming',
      //   title: '¡Mirá lo que se viene!',
      //   icon: '',
      //   list: [],
      // },
      // {
      //   type: 'best',
      //   title: 'Deberías jugarlos',
      //   icon: '',
      //   list: [],
      // },
      // {
      //   type: 'most',
      //   title: 'Los más jugados',
      //   icon: <img src="/src/assets/icons/chart.svg" width="24" height="24" />,
      //   list: [],
      // },
      // {
      //   type: 'free',
      //   title: 'Gratarola',
      //   icon: '',
      //   list: [],
      // },
    ];

    const belowTheFold = [
      {
        type: 'coming',
        title: '¡Mirá lo que se viene!',
        icon: '',
      },
      {
        type: 'best',
        title: 'Deberías jugarlos',
        icon: '',
      },
      {
        type: 'most',
        title: 'Los más jugados',
        icon: <img src="/src/assets/icons/chart.svg" width="24" height="24" />,
      },
      {
        type: 'free',
        title: 'Gratarola',
        icon: '',
      },
    ];

    await Promise.all(aboveTheFold.map(async ({ type }) => {
      const games = await fetch(getXboxURL(type)).then(res => res.json());
      const section = aboveTheFold.find(section => section.type === type);
      section.list.push(...games);
    }));

    const hotsale = aboveTheFold[1].list.reduce(function (p, v) {
      return ( p.price.off > v.price.off ? p : v );
    });

    const lcp = hotsale.images.featurepromotionalsquareart ?
    hotsale.images.featurepromotionalsquareart.url : hotsale.images.boxart?.url;

    // const res = await fetch(lcp + '?w=720&q=70');
    // const buff = await res.arrayBuffer();
    // const u8 = new Uint8Array(buff);
    // const b64encoded = btoa(String.fromCharCode.apply(null, u8));
    // const base64 = `data:${res.headers.get('content-type')};base64,${b64encoded}`;

    return ctx.render({ aboveTheFold, belowTheFold, hotsale, lcp: lcp + '?w=720&q=70' });
  },
};

export default function Home(ctx) {
  const { lcp, hotsale, aboveTheFold, belowTheFold } = ctx.data;

  return (
    <Layout section="">
      <Head>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />

        <link rel="prefetch" href="https://api.xstoregames.com/api/games?list=coming&skipitems=0&lang=es&store=ar" crossorigin="anonymous" />
        <link rel="prefetch" href="https://api.xstoregames.com/api/games?list=best&skipitems=0&lang=es&store=ar" crossorigin="anonymous" />
        <link rel="prefetch" href="https://api.xstoregames.com/api/games?list=most&skipitems=0&lang=es&store=ar" crossorigin="anonymous" />
        <link rel="prefetch" href="https://api.xstoregames.com/api/games?list=free&skipitems=0&lang=es&store=ar" crossorigin="anonymous" />
        <link rel="prefetch" href="https://api.mercadolibre.com/sites/MLA/search?category=MLA455245&limit=20" crossorigin="anonymous" />
      </Head>
      <div className="home">
        <notification-prompt hidden></notification-prompt>

        <GameImportant game={hotsale} />

        {aboveTheFold.map((section, index) =>
          <>
            <Section section={section} key={section.type} />
            { index === 1 && <SupportSection store="ar" /> }
            {/* { index === 2 && <GamePassSection /> }
            { index === 5 && <GoldSection /> }
            { index === 5 && <MarketplaceIsland /> } */}
          </>
        )}

        {
          belowTheFold.map((section, index) =>
            <>
              <SectionWithIsland section={section} key={section.type} />
              { index === 0 && <GamePassSection /> }
              { index === 3 && <GoldSection /> }
              { index === 3 && <MarketplaceIsland /> }
            </>
          )
        }
      </div>

      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
          import('${asset('/src/js/swipes.js')}');
          document.body.addEventListener('click', (eve) => {
            if (eve.target.classList.contains('next')) {
              eve.target.parentNode.scrollBy(660, 0);
            }
            if (eve.target.classList.contains('prev')) {
              eve.target.parentNode.scrollBy(-660, 0);
            }
          });
        });
      `}} />
    </Layout>
  );
};
