import { IS_BROWSER } from "$fresh/runtime.ts";
import { getXboxURL } from '@/utils.js';
import { useEffect, useRef } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import GameCard from '@/components/GameCard.jsx';

const LIMIT = 10;

export default function CollectionList({ type, games }) {
  const $collection = useRef(null);
  const gamesCollection = useSignal(games);
  const skip = useSignal(LIMIT);

  if (IS_BROWSER) {
    const io = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        io.unobserve(io.current);
        const response = await fetch(getXboxURL(type, skip.value)).then(res => res.json());
        if (response.length > 0) {
          const all = new Set([...gamesCollection.value, ...response]);
          gamesCollection.value = [...all];
          skip.value = skip.value + LIMIT;
        }
      }
    });

    useEffect(() => {
      io.current = $collection.current.lastElementChild.previousElementSibling.previousElementSibling;
      io.observe(io.current);
    }, [gamesCollection.value]);
  }

  return (
    <ul ref={$collection}>
      {gamesCollection.value.map((game, index) => (
        <li key={index}>
          <GameCard game={game} lazy={ index!==0 } />
        </li>
      ))}
    </ul>
  );
}
