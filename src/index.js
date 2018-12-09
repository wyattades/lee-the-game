import './styles/style.scss';
import Game from './game';

require.context('./static', true);

let game = new Game();

if (module.hot) {
  module.hot.accept('./game.js', () => {
    game.destroy();
    game = new Game();
  });
}
