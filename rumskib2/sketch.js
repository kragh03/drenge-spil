let død;
let start;
let skyd;
let ram;
let frem;
let ship;
let asteroids = [];
let lasers = [];
let score = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  død = loadSound("sound/skrig.mp3", loaded);
  skyd = loadSound("sound/pew1.mp3");
  frem = loadSound("sound/piv.mp3");
  ram = loadSound("sound/bang1.mp3");
  start = loadSound("sound/crape.mp3");
  ship = new Ship();
  for (let i = 0; i < 15; i++) {
    asteroids.push(new Asteroid());

  }
}


function loaded() {
  start.play();
}

function draw() {
  background(0);

  textSize(32)
  fill('red');
  text(score, 200, 50);

  if (score > 3) {
    fill('red')
    let win = ['Du er bedre en Hans Mikkel'];
    let word = random(win);
    text(word, 500, 500);

  }


  for (let i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      let rød = background(255, 0, 0);
      rød
      let words = ['MIN YNGLINGS FARVE ER RØD'];
      let word = random(words); // select random word
      textSize(32)
      text(word, 500, 500); // draw the word

      if (!død.isPlaying()) {
        død.play();
      }
      //console.log('ups');



    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (let j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        ram.play();
        score++

        if (asteroids[j].r > 20) {
          let newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }


  }



  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}
function keyReleased() {
  ship.setRotation(0);
  if (keyCode === UP_ARROW) {
    ship.boosting(false);
  }
  // if (keyCode == UP_ARROW) {
  //   ship.setRotation(0);
  // } 

}


// drejning af skip
function keyPressed() {

  if (key == ' ') {
    skyd.play();
    skyd.setVolume(0.1);

    lasers.push(new Laser(ship.pos, ship.heading));
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    if (!frem.isPlaying()) {
      frem.play();
      frem.setVolume(0.1);
    }
    ship.boosting(true);


  }

}

