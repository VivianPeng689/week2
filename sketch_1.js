function setup() {  //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布寬高
  
    createCanvas(windowWidth, windowHeight); 
  }
  
  function draw() {
     //背景顏色為8e9aaf(8e為十六進位的職，翻成10進位為142)
    background('#8e9aaf');
    //畫圓的顏色為#feeafa(fe為十六進位的職，翻成10進位為254)
    fill('#feeafa');
    //在視窗中間畫一個圓，寬高為200
    //ellipse(windowWidth/2, windowHeight/2, 200, 200);
    //畫圓的邊框為#cbc0d3(cb為十六進位的職，翻成10進位為203)
    stroke('#cbc0d3');
    //畫圓的邊框寬度為10
    strokeWeight(10);
    //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
    for (let i = 0; i < windowWidth+200; i += 200) {
      ellipse(i, windowHeight/2, 200, 200);
    }
    
  }
  
  //當視窗大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }