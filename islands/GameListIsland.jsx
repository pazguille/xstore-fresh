import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import { getXboxURL } from '@/utils.js';
import GameList from '@/components/GameList.jsx';

export default function GameListIsland({ section }) {
  const gamesCollection = useSignal(null);

  useEffect(async () => {
    const games = await fetch(getXboxURL(section.type)).then(res => res.json());
    requestIdleCallback(() => {
      gamesCollection.value = games;
    });
  }, []);

  return (
    <div>
      {gamesCollection.value && <GameList section={{ ...section, list: gamesCollection.value }} />}
    </div>
  );
}
