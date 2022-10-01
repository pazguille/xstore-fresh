import { h, hydrate } from 'preact';

window.addEventListener('load', () => {
  function hydrateIsland(island) {
    const component = island.getAttribute('name').toLowerCase();
    import('/islands/island-' + component + '.js').then((component) => {
      const props = JSON.parse(island.getAttribute('props'));
      hydrate(
        h(component.default, {...props}),
        island,
      );
    });
  }

  [].slice.call(document.querySelectorAll('n-island[whenidle]'))
    .forEach((island) => {
      let i = island;
      requestIdleCallback(() => {
        hydrateIsland(i);
      });
    });

  const io = new IntersectionObserver(
    async (entries) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hydrateIsland(entry.target);
          io.unobserve(entry.target);
        }
      });
    }
  );

  [].slice.call(document.querySelectorAll('n-island[whenvisible]'))
    .forEach(island => io.observe(island));
});
