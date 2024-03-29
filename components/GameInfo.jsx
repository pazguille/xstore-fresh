import { slugify } from '@/utils.js';
import GamePrice from '@/components/GamePrice.jsx';

export default function GameInfo({ game }) {
  return (
    <div>
      <h3 class="game-title"><a id={`detail-${game.id}`} href={`/game/${slugify(game.title)}_${game.id}`} class="link">{game.title}</a></h3>
      <p class="game-by">by {game.developer || game.publisher}</p>
      {game.game_pass ? <img class="game-pass" src="/src/assets/game-pass.svg" width="60" height="11" alt="Disponible en Game Pass" loading="lazy" decoding="async" /> : null}
      {game.ea_play ? <img class="game-pass" src="/src/assets/ea-play.png" width="60" height="11" alt="Disponible en EA Play" loading="lazy" decoding="async" /> : null}
      <GamePrice game={game} />
    </div>
  );
}
