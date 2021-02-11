var database, listNode;
var allBooks;
var displayName = "";
var displayEmail = "";
var bookLink;

function setup(){
    createCanvas(windowWidth,windowHeight);
    database =  firebase.database();
    listNode = database.ref("users");
    listNode.on("value",(data)=>{
    allBooks = data.val();

    });
    user =  new Users(); 
}

function draw(){
    var pos = 100;
    var num = 0;
    for(var books in allBooks){
        pos = pos+30;
        num = num+1;
         bookLink = createA("#", allBooks[books].title);
        bookLink.position(100,pos);
       if(num === user.index){
    displayName = allBooks[num].name;
    displayEmail = allBooks[num].email;

        }
        bookLink.mousePressed(()=>{
            text(displayName, 200,200);
            text(displayEmail, 300,200);
        
        })
        
}

 }