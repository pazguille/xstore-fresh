import { useEffect, useRef } from 'preact/hooks';

export default function PageTransition() {
  const $page = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', (eve) => {
      if (!eve.target.classList.contains('link')) { return; }

      $page.current.removeAttribute('hidden');
      requestIdleCallback(() => {
        $page.current.classList.add('page-on');
      });

      window.addEventListener('pagehide', () => {
        $page.current.toggleAttribute('hidden');
        requestIdleCallback(() => {
          $page.current.classList.remove('page-on');
        });
      }, { once: true });
    });
  }, []);

  return (
    <div ref={$page} class="page page-transition" hidden>
      <x-loader></x-loader>
    </div>
  );
}
