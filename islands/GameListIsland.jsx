import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useRef } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import { getXboxURL } from '@/utils.js';
import GameList from '@/components/GameList.jsx';

export default function GameListIsland({ section }) {
  const $section = useRef(null);
  const gamesCollection = useSignal(null);

  if (IS_BROWSER) {
    const io = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        io.unobserve($section.current);
        const games = await fetch(getXboxURL(section.type)).then(res => res.json());
        await yieldToMain(() => {
          gamesCollection.value = games;
        });
      }
    });

    useEffect(async () => {
      io.observe($section.current);
    }, []);
  }

  return (
    <div ref={$section}>
      {gamesCollection.value && <GameList section={{ ...section, list: gamesCollection.value }} />}
    </div>
  );
}
