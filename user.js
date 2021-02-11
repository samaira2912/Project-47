class Users{
    constructor(){
        this.index = 0;
        this.name = null;
        this.email = null;
        this.title = null;
    }
    update(){
        var userIndex = "users/user"+this.index;
        database.ref(userIndex).set({
            name:this.name,
            email:this.email,
            title:this.title
        });
    }
}