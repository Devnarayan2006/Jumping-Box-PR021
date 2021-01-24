var canvas;
var music;
var box1,surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(795,550,40,10);
    surface2 = createSprite(785,545,40,10);
    surface3 = createSprite(775,535,40,10);
    surface4 = createSprite(765,525,40,10);



    //create box sprite and give velocity
    box1 = createSprite(random(20,750),40,40);
    box1.velocityX=-5;
    box1.velocityX=-4;
    
}

function draw() {
    background(rgb(169,169,169));

    surface1.shapeColor("green");
    surface2.shapeColor("pink");
    surface3.shapeColor("yellow");
    surface4.shapeColor("blue");

    //create edgeSprite
    createEdgeSprite();


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box1) && box1.bounceOff(surface1)){
        box1.shapeColor("green");
    }

    box1.display();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    
}
