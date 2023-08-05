import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from '@preact/signals';
import { getMarketplaceItemsURL } from '@/utils.js';
import { useEffect, useRef } from 'preact/hooks';

export default function MarketplaceIsland() {
  const $marketplace = useRef(null);
  const items = useSignal(null);;

  if (IS_BROWSER) {
    const io = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        io.unobserve($marketplace.current);
        const { results } = await fetch(getMarketplaceItemsURL()).then(res => res.json());
        items.value = results;
      }
    });

    useEffect(async () => {
      io.observe($marketplace.current);
    }, []);
  }

  return (
    <section ref={$marketplace}>
      <h2>Accesorios destacados</h2>
      {items.value ?
        <ul class="carousel" aria-roledescription="Carrusel" aria-label="Accesorios">
          <button class="prev arrow" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#ffffff"/></svg>
          </button>
          {items.value.map(item => (<li>
            <article class="game-preview">
              <div>
                <h3 class="game-title"><a href={item.permalink} class="marketplace_item" target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
                <div class="game-price">
                  <x-price amount={item.price}></x-price>
                </div>
              </div>
              <img class="game-img" width="165" height="165" alt="" decoding="async" loading="lazy" src={item.thumbnail.replace('http:', 'https:').replace('D_', 'D_2X_').replace('I.jpg', 'AB.webp')} />
            </article>
          </li>))}
          <button class="next arrow" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform: rotate(180deg) translate(-24px, -24px);" d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#ffffff"/></svg>
          </button>
        </ul>
      : null}
    </section>
  );
}
