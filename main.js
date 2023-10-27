// ---- エンティティ関連の関数 ---------------------------------------------

// 全エンティティ共通

function updatePosition(entity) {
    entity.x += entity.vx;
    entity.y += entity.vy;
}
  
  // プレイヤーエンティティ
  
function createPlayer() {
    return {
      x: 200,
      y: 300,
      vx: 0,
      vy: 0
    };
}
  
function applyGravity(entity) {
    entity.vy += 0.15;
}
  
function applyJump(entity) {
    entity.vy = -5;
}
  
function drawPlayer(entity) {
    noStroke();
    fill("#ffb677");
    square(entity.x, entity.y, 40);
}

// ブロックエンティティ用

function createBlock(y) {
    return {
      x: 900,
      y,
      vx: -2,
      vy: 0
    };
}
  
function drawBlock(entity) {
    noStroke();
    fill("#5f6caf");
    // 四角形の描画(x, y, width, height)
    rect(entity.x, entity.y, 80, 400);
}

// ---- ゲーム全体に関わる部分 ---------------------------------------------

/** プレイヤーエンティティ */
let player = {
    x: 200, // 位置 x座標
    y: 300, // 位置 y座標
    vx: 0,  // 速度 x成分
    vy: 0   // 速度 y成分
}

let block;

// ---- setup/draw 他 --------------------------------------------------

function setup() {
    createCanvas(800, 600);
    rectMode(CENTER); // 四角形の基準点を角から中心に変える
  
    // プレイヤーを作成
    player = createPlayer();

    block = createBlock(300);
}
  
function draw() {
    // プレイヤーの位置を更新
    updatePosition(player);
    updatePosition(block);

    // プレイヤーに重力を適用
    applyGravity(player);

    // プレイヤーを描画
    background("#edf7fa");
    drawPlayer(player);
    drawBlock(block);
}
  
function mousePressed() {
    // プレイヤーをジャンプさせる
    applyJump(player);
}