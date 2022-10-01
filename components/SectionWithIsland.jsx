import Island from '@/components/Island.jsx';
import GameListIsland from '@/is-lands/GameListIsland.jsx';

export default function Section({ section }) {
  return (
    <section>
      <h2>{section.icon}{section.title}</h2>
      <Island whenIdle>
        <GameListIsland section={section} />
      </Island>
      <a class="see-all link" id={`collection-${section.type}`} href={`/collection/${section.type}`} aria-label={`Ver el listado completo de ${section.title}`}>Ver más</a>
    </section>
  );
}
