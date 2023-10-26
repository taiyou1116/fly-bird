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
    square(entity.x, entity.y, 40);
}

// ---- ゲーム全体に関わる部分 ---------------------------------------------

/** プレイヤーエンティティ */
let player = {
    x: 200, // 位置 x座標
    y: 300, // 位置 y座標
    vx: 0,  // 速度 x成分
    vy: 0   // 速度 y成分
}

// ---- setup/draw 他 --------------------------------------------------

function setup() {
    createCanvas(800, 600);
    rectMode(CENTER); // 四角形の基準点を角から中心に変える
  
    // プレイヤーを作成
    player = createPlayer();
}
  
function draw() {
    // プレイヤーの位置を更新
    updatePosition(player);

    // プレイヤーに重力を適用
    applyGravity(player);

    // プレイヤーを描画
    background(0);
    drawPlayer(player);
}
  
function mousePressed() {
    // プレイヤーをジャンプさせる
    applyJump(player);
}