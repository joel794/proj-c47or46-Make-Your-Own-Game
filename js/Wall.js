class Wall{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body;

        fill("brown");
        noStroke();
        this.body = createSprite(this.x, this.y, this.w, this.h);
        this.body.velocityX = 0;
        this.body.velocityY = 0;
        wallGroup.add(this.body);
        
    }
}