var stage, square;

function init(){
    stage = new createjs.Stage('myCanv');
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', tickTock);
    square = new createjs.Shape();
    square.graphics.beginFill("#F0F").drawRect(0,0,50,50);
    square.x=0;
    square.y=230;
    stage.addChild(square);
}

function tickTock(e){
    square.x++;
    stage.update(e);
}

window.addEventListener('load', init);