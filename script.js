var stage, rim1, rim2, tree;

function init(){
    stage = new createjs.Stage('myCanv');
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', tickTock);
  
    var road = new createjs.Shape();
    road.graphics.beginFill('#999').drawRect(0, 690, 800, 40);
    stage.addChild(road);
  
    tree = new createjs.Shape();
    tree.graphics.beginFill('#aa5').drawRect(800, 300, 20, 300).beginFill('#5f5').drawEllipse(770,100,80,280);
    stage.addChild(tree);
    
    var body = new createjs.Shape();
    body.graphics.beginFill("#444").drawRect(200,600,400,80);
    stage.addChild(body);
    
    var roof = new createjs.Shape();
    roof.graphics.beginFill("#444").drawRect(250,540,300,60);
    stage.addChild(roof);
  
    var windows = new createjs.Shape();
    windows.graphics.beginFill("#aaf").drawRoundRect(260,550,280,60, 5, 5, 5, 5);
    stage.addChild(windows);
    
    rim1 = new createjs.Bitmap("wheel.png");
    rim1.x = 270;
    rim1.y = 670;
    rim1.regX = 400;
    rim1.regY = 400;
    rim1.scaleX = 0.09;
    rim1.scaleY = 0.09;
    stage.addChild(rim1);
    
    rim2 = new createjs.Bitmap("wheel.png");
    rim2.x = 530;
    rim2.y = 670;
    rim2.regX = 400;
    rim2.regY = 400;
    rim2.scaleX = 0.09;
    rim2.scaleY = 0.09;
    stage.addChild(rim2);
}

function tickTock(e) {
  rim1.rotation += 5;
  rim2.rotation += 5;
  if (tree.x == -850) tree.x = 0;
  else tree.x -= 2;
  stage.update(e);
}

window.addEventListener('load', init);