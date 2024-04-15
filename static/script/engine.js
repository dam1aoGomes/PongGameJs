class GameObject 
{
    constructor(x,y,width,height,color,tag) 
    {
        this.x = x;
        this.y = y;
        this.width  = width;
        this.height = height;
        this.color  = color;
        this.tag    = tag;
    }
    constructor(x,y,radius,color,tag) 
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color  = color;
        this.tag    = tag;
    }
    draw() 
    {

    }
}

const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

var player1 = new GameObject();
var player2 = new GameObject();
var ball    = new GameObject();

function draw()
{
    ctx.fillRect(0,0,10,10);
}

function main()
{
    draw();    
}

main();