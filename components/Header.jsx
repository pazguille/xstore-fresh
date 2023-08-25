import { useContext } from 'preact/hooks';
import { AppContext } from '@/routes/_layout.jsx';

export default function Header() {
  const { back } = useContext(AppContext);

  return (
    <header>
      <h1>
        <a href="/" aria-label="XStore">
          <svg aria-hidden="true" width="32" height="32" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="195" cy="125" r="38.7" fill="#9AA495"/>
            <circle cx="125" cy="195" r="38.7" fill="#50AF62"/>
            <circle cx="54.7" cy="125" r="38.7" fill="#64A344"/>
            <circle cx="125" cy="54.7" r="38.7" fill="#3B844D"/>
          </svg>
          XStore
        </a>
      </h1>

      {!back ? <button
        is="install-button"
        id="install-btn"
        class="header-btn install-btn"
        aria-label="Instalar"
        hidden
      >
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#9AA495" aria-hidden="true"><path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3h-2z"></path><path d="m17 11.5-1.4-1.4-2.6 2.6V4h-2v8.7L8.4 10 7 11.5l5 5z"></path></svg>
          Instalar
        </span>
      </button> : null}

      {back ? <button
        is="back-button"
        id="page-back-btn"
        class="page-back-btn header-btn"
        aria-label="Volver para atrás"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#9AA495"/></svg>
      </button> : null}

      <x-toggle-collapse id="search-collapse">
        <button class="search-btn header-btn" aria-label="Buscar" slot="trigger">
          <svg width="25" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".1" d="M10.5 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#9AA495"/><path d="M20.8 21.7a1 1 0 0 0 1.4-1.4l-1.4 1.4Zm-4.6-7.4a1 1 0 0 0-1.4 1.4l1.4-1.4Zm6 6-6-6-1.4 1.4 6 6 1.4-1.4ZM16.5 10a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm-6 6a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm-6-6a6 6 0 0 1 6-6V2a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Z" fill="#9AA495"/></svg>
        </button>
        <form id="search" class="search" action="/search" slot="content" hidden>
          <label for="query">Buscar</label>
          <input type="search" id="query" name="q" placeholder="Buscar juegos..." />
          <button type="submit" aria-label="Buscar">
            <svg width="25" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".1" d="M10.5 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill="#9AA495"/><path d="M20.8 21.7a1 1 0 0 0 1.4-1.4l-1.4 1.4Zm-4.6-7.4a1 1 0 0 0-1.4 1.4l1.4-1.4Zm6 6-6-6-1.4 1.4 6 6 1.4-1.4ZM16.5 10a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2Zm-6 6a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm-6-6a6 6 0 0 1 6-6V2a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Z" fill="#9AA495"/></svg>
          </button>
        </form>
      </x-toggle-collapse>
    </header>
  );
}
