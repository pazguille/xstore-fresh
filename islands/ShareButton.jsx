/** @jsx h */
import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

export default function ShareButton({ title }){
  const $share = useRef(null);

  useEffect(() => {
    $share.current.show({
      title: `${title} en XStore`,
      url: window.location.href,
    });
  }, []);

  return (
    <button
      is="share-button"
      id="share-btn"
      class="share-btn header-btn"
      aria-label="Compartir"
      ref={$share}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path opacity=".12" d="M7.8 21h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V12H3v4.2c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33Z" fill="#9AA495"/><path d="M22 12a1 1 0 1 0-2 0h2ZM4 12a1 1 0 1 0-2 0h2Zm.64 8.67.45-.89-.45.9Zm-1.31-1.3.89-.46-.9.45Zm16.03 1.3-.45-.89.45.9Zm1.31-1.3.9.45-.9-.46ZM15.3 7.7a1 1 0 1 0 1.42-1.42l-1.42 1.42ZM12 3l.7-.7a1 1 0 0 0-1.4 0l.7.7ZM7.3 6.3a1 1 0 0 0 1.4 1.4L7.3 6.3ZM11 15a1 1 0 1 0 2 0h-2Zm5.2 5H7.8v2h8.4v-2Zm3.8-8v4.2h2V12h-2ZM4 16.2V12H2v4.2h2ZM7.8 20c-.86 0-1.44 0-1.89-.04-.44-.03-.66-.1-.82-.18l-.9 1.78c.48.25 1 .35 1.56.4.55.04 1.23.04 2.05.04v-2ZM2 16.2c0 .82 0 1.5.04 2.05.05.56.15 1.08.4 1.57l1.78-.91a2.16 2.16 0 0 1-.18-.82C4 17.64 4 17.06 4 16.2H2Zm3.1 3.58a2 2 0 0 1-.88-.87l-1.78.9a4 4 0 0 0 1.74 1.75l.91-1.78ZM16.2 22c.82 0 1.5 0 2.05-.04a4.09 4.09 0 0 0 1.57-.4l-.91-1.78c-.16.08-.38.15-.82.18-.45.04-1.03.04-1.89.04v2Zm3.8-5.8c0 .86 0 1.44-.04 1.89-.03.44-.1.66-.18.82l1.78.9c.25-.48.35-1 .4-1.56.04-.55.04-1.23.04-2.05h-2Zm-.18 5.36a4 4 0 0 0 1.74-1.74l-1.78-.91a2 2 0 0 1-.87.87l.9 1.78ZM16.7 6.3l-4-4-1.42 1.42 4 4 1.42-1.42Zm-5.42-4-4 4 1.42 1.42 4-4-1.42-1.42ZM11 3v12h2V3h-2Z" fill="#9AA495"/></svg>
    </button>
  );
}
