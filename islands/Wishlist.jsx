/** @jsx h */
import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import { gameXboxURL } from '@/utils.js';
import GameCard from '@/components/GameCard.jsx';

function EmptyWishlist() {
  return (<p class="empty-list">Aún no tienes favoritos.</p>);
}

function List({ games }) {
  return (
    <ul>
      {games.map((g, i) => <li key={i}><GameCard game={g} /></li>)}
    </ul>
  );
}

export default function Whislist() {
  const [loading, setLoading] = useState(true);
  const [wishCollection, setWish] = useState([]);

  useEffect(async () => {
    const wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
    if (wishlist && wishlist.length > 0) {
      const games = Array.from(wishlist).reverse().join(',');
      const data = await fetch(gameXboxURL(games)).then(res => res.json());
      if (data) {
        setWish(data);
      }
    }
    setLoading(false);
  }, []);

  return (
    <div>
      { loading ? <x-loader></x-loader> : null}
      { wishCollection.length > 0 && <List games={wishCollection} /> }
      { !loading && wishCollection.length === 0 && <EmptyWishlist /> }
    </div>
  );
}
