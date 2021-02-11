var input, email,bookName;
var checkBox;
var username;
var mail;
var title;
var database;
var returnToHomePage;
var count = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();
    input =  createInput();
    input.position(windowWidth/2-400,windowHeight/2);

    email = createInput();
    email.position(windowWidth/2-400,windowHeight/2+70);
    bookName = createInput();
    bookName.position(windowWidth/2-400,windowHeight/2+140)
    
    checkBox =  createA('#','Confirm');

    checkBox.position(windowWidth/2-400,windowHeight/2+240);

    returnToHomePage = createA('index.html','Return To HomePage')
    returnToHomePage.position(windowWidth/2-200,windowHeight/2+240);

    user =  new Users();
}

function draw(){
    checkBox.mousePressed(()=>{
        count = count+1;
        user.index = count;
        user.name = input.value();
        user.email = email.value();
        user.title = bookName.value();
        user.update();
    });

textSize(17)
text("Name:",60,300);
text("Email:",60,370);
text("Book Name:",60,440);

}
