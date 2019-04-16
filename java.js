function Cat(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += this.speed;
    };
    this.moveDown = function(){
        this.top += this.speed;
    };
    this.moveLeft = function(){
        this.left -= this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    }
}

let cat = new Cat('cat.png', 0, 0, 180, 3);
let on = cat.left;
let bottom = cat.top;
function start(){
    if(cat.left < window.innerWidth - cat.size && cat.top === bottom){
        cat.moveRight();
    }else if(cat.top < window.innerHeight - cat.size && cat.left > on){
        cat.moveDown();
    } else if (cat.top > bottom && cat.left === on) {
        cat.moveUp();
    } else {
        cat.moveLeft();
    }
    document.getElementById('game').innerHTML = cat.getHeroElement();
    setTimeout(start, 5)
}
start();