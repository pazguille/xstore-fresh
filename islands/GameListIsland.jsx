/** @jsx h */
import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import { getXboxURL } from '@/utils.js';
import GameList from '@/components/GameList.jsx';

export default function GameListIsland({ section }) {
  const [games, setGames] = useState(null);

  useEffect(async () => {
    const games = await fetch(getXboxURL(section.type)).then(res => res.json());
    requestIdleCallback(() => {
      setGames(games);
    });
  }, []);

  return (
    <div>
      {games && <GameList section={{ ...section, list: games }} />}
    </div>
  );
}
