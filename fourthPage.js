var thankYou;
var mainPageButton;

function setup(){

    createCanvas(windowWidth,windowHeight);
    
 thankYou = createElement("h2");
 thankYou.position(windowWidth/2-200,windowHeight/2-100 );
 thankYou.html("Thank You for Depositing the book!");
 fill("white")
 
 mainPageButton = createButton('Return to home page');
 mainPageButton.position(windowWidth/2,windowHeight/2+100);

}