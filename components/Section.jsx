import GameList from '@/components/GameList.jsx';

export default function Section({ section }) {
  return (
    <section>
      <h2>{section.icon}{section.title}</h2>
      <GameList section={section} />
      <a class="see-all link" id={`collection-${section.type}`} href={`/collection/${section.type}`} aria-label={`Ver el listado completo de ${section.title}`}>Ver más</a>
    </section>
  );
}
