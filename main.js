var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 20;
player_y = 20;
var player_object = "";
var block_image_object = "";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img)
{
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_y,
top:player_x
});
canvas.add(player_object);
});
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_Image, function(Img){

        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        
        block_image_object.set({
            top:player_y,
            top:player_x
            });
            canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftkey == true && keyPressed == '80')
{
console.log("p and shift are pressed together");
block_image_height = block_image_height + 10;
block_image_width = block_image_width + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}
if(e.shiftkey == true && keyPresed == '77')
{
    console.log("m and shift are pressed together");
    block_image_height = block_image_height - 10;
    block_image_width = block_image_width - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
 if(keyPressed == '38'){
up();
console.log("up key is pressed");
 } 
if(keyPressed == '40'){
down();
console.log("down is pressed");
}
if(keyPressed == '37'){
left();
console.log("left is pressed");
}
if(keyPressed == '39'){;
right();
console.log("right is pressed");
}
if(keyPressed == '87'){
new_image('wall.jpg');
console.log("w is pressed the wall");
}
if(keyPressed == '71'){
    new_image('ground.png');
    console.log("g is pressed the ground");
    }
    if(keyPressed == '76'){
        new_image('light_green.png');
        console.log("l is pressed the light wall");
        }
        if(keyPressed == '84'){
            new_image('trunk.jpg');
            console.log("t is pressed the trunk");
            }
            if(keyPressed == '82'){
                new_image('roof.jpg');
                console.log("r is pressed the roof");
                }
                if(keyPressed == '89'){
                    new_image('yellow_wall.png');
                    console.log("y is pressed the yellow wall");
                    }
                    if(keyPressed == '68    '){
                        new_image('dark_green.png');
                        console.log("d is pressed the dark wall");
                        }
                        if(keyPressed == '67'){
                            new_image('cloud.jpg');
                            console.log("c is pressed the cloud");
                            }
                            if(keyPressed == '85'){
                                new_image('unique.png');
                                console.log("u is pressed the animal");
                                }
}
function down()
{
if(player_y <= 550)
{
player_y = player_y + block_image_height;
console.log("block image height = " + block_image_height );
console.log("When Down Arrow is pressed/clicked , X = " + player_x +  ", Y" + player_y);
canvas.remove(player_object);
player_update();
}
}

function up()
{
    if(player_y >= 0)
    {
    player_y = player_y - block_image_height;
    console.log("block image height = " + block_image_height );
    console.log("When Up Arrow is pressed/clicked , X = " + player_x +  ", Y" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function left()
{
    if(player_x > 0)
    {
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width );
    console.log("When Left Arrow is pressed/clicked , X = " + player_x +  ", Y" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function right()
{
    if(player_x <= 0)
    {
    player_x = player_x + block_image_width;
    console.log("block image width = " + block_image_width );
    console.log("When Right Arrow is pressed/clicked , X = " + player_x +  ", Y" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}