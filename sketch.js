var greeting;
var findBooksButton;
var depositBooksButton;
var database;




function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
  
greeting = createElement ("h1")
greeting.position(windowWidth/2-100, 0);
greeting.html("Hello Visitor!");
greeting.style("color","red");
//fill("white")
textSize(20)
text("This is a website where you can pick and drop some of your favourite books! You can deposit and browse books here.",windowWidth/20 ,150);
findBooksButton = createA('firstPage.html','Find Books');
findBooksButton.position(windowWidth/2,windowHeight-80);

depositBooksButton = createA('secondPage.html','Deposit Books');
depositBooksButton.position(windowWidth/2-200    ,windowHeight-80);
depositBooksButton.size = 11;

  }
  
 
