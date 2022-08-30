/** @jsx h */
import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

export default function WishToggle({ game }) {
  let wishlist = null;
  let db = null;
  const $fav = useRef(null);

  useEffect(async () => {
    const iddb = window.indexedDB.open('wishlist', 1);
    iddb.onupgradeneeded = eve => {
      eve.currentTarget.result
        .createObjectStore(
          'wishlist', { keyPath: 'id', autoIncrement: true }
        )
        .createIndex('game', 'game', { unique: true });
    };
    iddb.onsuccess = eve => { db = eve.target.result; };

    wishlist = new Set(
      JSON.parse(window.localStorage.getItem('wishlist'))
    );

    $fav.current.show(wishlist.has(game.id));
  }, []);

  function toogle(game) {
    const { pathname } = new URL(window.location.href);
    const pathSplit = pathname.split('/');
    const id = pathSplit[2].split('_')[1];

    if (wishlist.has(id)) {
      wishlist.delete(id);

      db
        .transaction('wishlist', 'readwrite')
        .objectStore('wishlist')
        .delete(id);

    } else {
      wishlist.add(id);

      db
        .transaction('wishlist', 'readwrite')
        .objectStore('wishlist')
        .add({
          id,
          title:  game.title,
          amount: game.price.amount,
        });
    }

    window.localStorage.setItem('wishlist', JSON.stringify(Array.from(wishlist)));
  }

  return (
    <button
      is="switch-button"
      id="fav-btn"
      class="fav-btn header-btn"
      aria-label="Favorito"
      ref={$fav}
      onClick={() => toogle(game)}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".12" d="M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21c-.178 0-10-5.186-10-11.52C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3Z" fill="#9AA495"/><path d="m12 4.924-.761.648a1 1 0 0 0 1.522 0L12 4.924ZM16.111 4C18.924 4 21 6.734 21 9.48h2C23 5.971 20.342 2 16.111 2v2ZM21 9.48c0 1.321-.513 2.64-1.368 3.915-.854 1.273-2.013 2.447-3.21 3.456a28.537 28.537 0 0 1-3.31 2.39c-.458.282-.839.5-1.106.644a8.052 8.052 0 0 1-.337.172l-.012.006.009-.003a.55.55 0 0 1 .1-.032c.02-.005.112-.028.234-.028v2c.125 0 .221-.024.246-.03a1.098 1.098 0 0 0 .186-.063 10.016 10.016 0 0 0 .524-.262c.304-.164.719-.401 1.208-.704a30.511 30.511 0 0 0 3.547-2.561c1.281-1.08 2.589-2.39 3.582-3.87C22.285 13.03 23 11.324 23 9.48h-2ZM12 20a.895.895 0 0 1 .334.06l.01.003-.013-.005a22.257 22.257 0 0 1-1.442-.817 28.536 28.536 0 0 1-3.311-2.39c-1.197-1.009-2.356-2.183-3.21-3.456C3.513 12.121 3 10.801 3 9.48H1c0 1.845.715 3.55 1.707 5.03.993 1.48 2.3 2.79 3.582 3.87a30.516 30.516 0 0 0 3.547 2.561c.49.303.904.54 1.208.704.151.081.28.147.379.195a3.157 3.157 0 0 0 .24.103c.02.007.052.017.091.027.025.006.121.03.246.03v-2ZM3 9.48C3 6.734 5.076 4 7.889 4V2C3.658 2 1 5.971 1 9.48h2ZM7.889 4c1.641 0 2.708.818 3.35 1.572l1.522-1.297C11.871 3.23 10.292 2 7.89 2v2Zm4.872 1.572C13.404 4.818 14.47 4 16.111 4V2c-2.403 0-3.981 1.23-4.872 2.275l1.522 1.297Z" fill="#9AA495"/></svg>
    </button>
  );
}
