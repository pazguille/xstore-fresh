/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { getXboxURL } from '@/utils.js';
import { Head } from '$fresh/runtime.ts';
import Layout from '@/components/Layout.jsx';
import GameImportant from '@/components/GameImportant.jsx';
import Section from '@/components/Section.jsx';
import SectionWithIsland from '@/components/SectionWithIsland.jsx';
import GamePassSection from '@/components/GamePassSection.jsx';
import GoldSection from '@/components/GoldSection.jsx';

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

export const handler = {
  async GET(req, ctx) {

    const aboveTheFold = [
      {
        type: 'new',
        title: 'Salidos del horno',
        icon: '',
        list: [],
        skipitems: 0,
      },
      {
        type: 'deals',
        title: 'Ahorrate unos mangos',
        icon: <img src="/src/assets/icons/tag.svg" width="24" height="24" />,
        list: [],
        skipitems: 0,
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

    return ctx.render({ aboveTheFold, hotsale, lcp: lcp + '?w=720&q=70' });
  },
};

export default function Home(ctx) {
  const { lcp, hotsale, aboveTheFold } = ctx.data;

  return (
    <Layout section="">
      <Head>
        <link rel="preload" as="image" href={lcp} fetchpriority="high" />

        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=free&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=most&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=best&skipitems=0" crossorigin="anonymous" />
        <link rel="preload" as="fetch" href="https://api.xstoregames.com/api/games?list=coming&skipitems=0" crossorigin="anonymous" />
      </Head>
      <div className="home">
        <notification-prompt hidden></notification-prompt>

        <GameImportant game={hotsale} />
        {aboveTheFold.map((section) =>
          <Section section={section} key={section.type} />
        )}

        {
          belowTheFold.map((section, index) =>
            <>
              <SectionWithIsland section={section} key={section.type} />
              { index === 0 && <GamePassSection /> }
              { index === 3 && <GoldSection /> }
            </>
          )
        }
      </div>

      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', () => {
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
