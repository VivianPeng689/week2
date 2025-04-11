function setup() {  //設定函數，初始值的地方
  //建立依照視窗的高與寬當作畫布寬高
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB); // 設定顏色模式為 HSB
}

function draw() {
  // 不清除背景，保留原移動的軌跡
  
  //計算根據滑鼠 X 座標的色相
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  //計算根據滑鼠 Y 座標的亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  
  //設定圓的顏色
  fill(hue, 100, brightness); // HSB: 色相 hue, 飽和度 100, 亮度 brightness
  //設定圓的邊框顏色為金色
  stroke(51, 100, 100); // HSB: 色相 51, 飽和度 100, 亮度 100
  strokeWeight(5); // 邊框寬度為5
  
  //在滑鼠位置畫圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}