/** @jsx h */
import { h } from 'preact';

export default function Header() {
  return (
    <header>
      <h1>
        <a href="/" aria-label="XStore Games">
          <svg aria-hidden="true" width="32" height="32" fill="none" viewBox="-10 52 125 12" xmlns="http://www.w3.org/2000/svg">
            <path d="m110 104.1-5.5-77A5.5 5.5 0 0 0 99 22H77a22 22 0 1 0-44 0H11a5.5 5.5 0 0 0-5.5 5.1l-5.5 77a5.5 5.5 0 0 0 5.5 5.9h99a5.5 5.5 0 0 0 5.5-5.9ZM55 5.5c9.1 0 16.5 7.4 16.5 16.5h-33c0-9.1 7.4-16.5 16.5-16.5Zm-49.5 99 5.5-77h88l5.5 77h-99Z" fill="#9AA495" />
            <path d="M43.6 46.4h-.1v-.1A23.2 23.2 0 0 1 55 43a21.7 21.7 0 0 1 11.5 3.2l-.1.2H66l-.3-.1h-.8l-2 .1a18 18 0 0 0-4.1 1.3 108.3 108.3 0 0 0-3.8 1.8 20.8 20.8 0 0 0-4.8-2.2l-2.6-.8-2.5-.3-.8.1h-.7Zm5.4 8.8a83 83 0 0 0-9.4 14.3c-.7 1.4-1.2 2.7-1.6 3.9a11.9 11.9 0 0 0-.5 4.1l.1.8h-.1a21.5 21.5 0 0 1-2.8-21.8l2-3.9c.9-1.2 1.8-2.3 2.9-3.2l.3-.1h.3c.4 0 1 0 1.4.2l1.6.8a17.6 17.6 0 0 1 3.3 2.5A21.6 21.6 0 0 1 49 55v.1Zm20.8-6h.3A21.4 21.4 0 0 1 77 65a21.6 21.6 0 0 1-4.5 13.3h-.1V78l.1-.5v-.8c0-1-.1-2-.5-3.3l-1.6-3.9a52 52 0 0 0-4.7-8 84 84 0 0 0-4.7-6.3V55a87.4 87.4 0 0 1 4-3.6l1.7-1.2 1.6-.8 1.5-.3ZM55 60.7l1.2.9a73.6 73.6 0 0 0 3.4 3 71.3 71.3 0 0 1 8 9.3c.8 1 1.4 2.1 1.8 3.2.5 1 .7 2 .7 2.7l-.1 1-.5.8-1.5 1.2-1.6 1a21.9 21.9 0 0 1-22.8 0 55.6 55.6 0 0 1-3-2.2c-.3-.2-.5-.5-.6-.8a3 3 0 0 1-.1-1c0-.7.2-1.6.6-2.6a34.5 34.5 0 0 1 6.7-9.3 66 66 0 0 1 7.8-7.2Z" fill="#9AA495" />
          </svg>
        </a>
      </h1>

      <button
        is="install-button"
        id="install-btn"
        class="header-btn install-btn"
        aria-label="Instalar"
        hidden
      >
        <span>
          <svg width="16" height="16" viewBox="0 0 38 38" fill="#9AA495" aria-hidden="true"><path class="clr-i-outline clr-i-outline-path-1" d="M31 8h-4a1 1 0 0 0 0 2h4v20H5V10h4a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path class="clr-i-outline clr-i-outline-path-2" d="m10 19 7 7a1 1 0 0 0 2 0l7-7a1 1 0 0 0-2-2l-5 6V4a1 1 0 0 0-2 0v19l-5-6a1 1 0 0 0-2 2Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          Instalar
        </span>
      </button>

      <button
        is="back-button"
        id="page-back-btn"
        class="page-back-btn header-btn"
        aria-label="Volver para atrás"
        hidden
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.3 18.7a1 1 0 0 0 1.4-1.4l-1.4 1.4ZM9 12l-.7-.7a1 1 0 0 0 0 1.4L9 12Zm6.7-5.3a1 1 0 0 0-1.4-1.4l1.4 1.4Zm0 10.6-6-6-1.4 1.4 6 6 1.4-1.4Zm-6-4.6 6-6-1.4-1.4-6 6 1.4 1.4Z" fill="#9AA495"/></svg>
      </button>

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
