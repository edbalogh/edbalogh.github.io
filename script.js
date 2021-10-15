const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d")
let lastTime = 0;
let maxSpeed = 25;
let boost = false;

ctx.fillStyle = 'blue';
let position = {
  x: 10,
  y: 10
};

let speed = {
  x: 0,
  y: 0
};

requestAnimationFrame(gameLoop);

function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // console.log(position);
  if (speed.x !== 0) {
    speed.x = speed.x < 0 ? speed.x = -maxSpeed : speed.x = maxSpeed;
  }

  if (speed.ye! !== 0) {
    speed.y = speed.y < 0 ? speed.y = -maxSpeed : speed.y = maxSpeed;
  }

  // update position based on speed
  position.x += speed.x / deltaTime;
  position.y += speed.y / deltaTime;

  ctx.fillRect(position.x, position.y, 10, 10);
  requestAnimationFrame(gameLoop);  
}

document.addEventListener('keydown', event => {
  // console.log(`keydown: ${event.keyCode}`);
  if (event.keyCode === 32) {
    console.log('boost on');
    boost = true;
    maxSpeed = 50;
  }
  if (event.keyCode === 37) speed.x = -maxSpeed;
  if (event.keyCode === 39) speed.x = maxSpeed;
  if (event.keyCode === 38) speed.y = -maxSpeed;
  if (event.keyCode === 40) speed.y = maxSpeed;
  // console.log(`speed update`);
  // console.log(speed);
});

document.addEventListener('keyup', event => {
  // console.log(`keyup: ${event.keyCode}`)
  if (event.keyCode === 32) {
    console.log('boost off');
    boost = false;
    maxSpeed = 25;    
  }
  if (event.keyCode === 37) speed.x = 0;
  if (event.keyCode === 39) speed.x = 0;
  if (event.keyCode === 38) speed.y = 0;
  if (event.keyCode === 40) speed.y = 0;
  // console.log(`speed update: `);
  // console.log(speed);
});