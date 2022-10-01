import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
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

export default function Wishlist() {
  const loading = useSignal(true);
  const wishCollection = useSignal([]);

  useEffect(async () => {
    const wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
    if (wishlist && wishlist.length > 0) {
      const games = Array.from(wishlist).reverse().join(',');
      const data = await fetch(gameXboxURL(games)).then(res => res.json());
      if (data) {
        wishCollection.value = data;
      }
    }
    loading.value = false;
  }, []);

  return (
    <div>
      { loading.value ? <x-loader></x-loader> : null}
      { wishCollection.value.length > 0 && <List games={wishCollection.value} /> }
      { !loading.value && wishCollection.value.length === 0 && <EmptyWishlist /> }
    </div>
  );
}
