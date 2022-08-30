/** @jsx h */
import { h } from 'preact';
import { IS_BROWSER } from "$fresh/runtime.ts";
import { getXboxURL } from '@/utils.js';
import { useEffect, useState, useRef } from 'preact/hooks';
import GameCard from '@/components/GameCard.jsx';

const LIMIT = 10;

export default function Collection({ type, games }) {
  const $collection = useRef(null);
  const [gamesCollection, setGames] = useState(games);
  const [skip, setSkip] = useState(LIMIT);

  if (IS_BROWSER) {
    const io = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        io.unobserve(io.current);
        const response = await fetch(getXboxURL(type, skip)).then(res => res.json());
        if (response.length > 0) {
          const all = new Set([...gamesCollection, ...response]);
          setGames([...all]);
          setSkip(skip+LIMIT);
        }
      }
    });

    useEffect(() => {
      io.current = $collection.current.lastElementChild.previousElementSibling.previousElementSibling;
      io.observe(io.current);
    }, [gamesCollection]);
  }

  return (
    <ul ref={$collection}>
      {gamesCollection.map((game, index) => (
        <li key={index}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
}
