import Phaser from 'phaser';
import './styles/style.scss';


const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload,
    create,
  },
});

function preload () {
  for (const name of ['winner', 'winner2', 'happy', 'neutral', 'forward', 'stop', 'run1', 'run2'])
    this.load.image(name, `images/${name}.png`);
}

function create () {
  this.add.image(400, 300, 'happy');
  this.add.image(300, 200, 'run2');
  
}
