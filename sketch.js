let cols = 6;
let rows = 4;
let tileSize = 80;
let field = [];
let farmerEmoji = "👨‍🌾";

function setup() {
  createCanvas(cols * tileSize, rows * tileSize + 100);
  textAlign(CENTER, CENTER);
  textSize(32);
  for (let y = 0; y < rows; y++) {
    field[y] = [];
    for (let x = 0; x < cols; x++) {
      field[y][x] = {
        state: 0, // 0: vazio, 1: semente, 2: planta crescida
        timer: 0
      };
    }
  }
}

function draw() {
  background(200, 230, 180);
  drawField();
  drawFarmer();
}

function drawField() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let tile = field[y][x];
      let px = x * tileSize;
      let py = y * tileSize;

      // Fundo
      stroke(100);
      fill(139, 69, 19);
      rect(px, py, tileSize, tileSize);

      // Estado da planta
      if (tile.state === 1) {
        fill("green");
        ellipse(px + tileSize / 2, py + tileSize / 2, 20);
        tile.timer++;
        if (tile.timer > 180) {
          tile.state = 2;
        }
      } else if (tile.state === 2) {
        fill("lime");
        ellipse(px + tileSize / 2, py + tileSize / 2, 40);
      }
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / tileSize);
  let y = floor(mouseY / tileSize);
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    let tile = field[y][x];
    if (tile.state === 0) {
      tile.state = 1; // Plantar
      tile.timer = 0;
    } else if (tile.state === 2) {
      tile.state = 0; // Colher
      tile.timer = 0;
    }
  }
}

function drawFarmer() {
  textSize(32);
  text("👨‍🌾 Fazenda Interativa", width / 2, height - 60);
}