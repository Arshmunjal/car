class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
    var Title = createElement("h2");
    Title.html("car racing game")
    Title.position(130,0)
    
    this.input.position(130,60);
    this.button.position(250,200);
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
       player.Name = this.input.value()
        playercount += 1
        player.index = playercount
        player.update()
        player.updatecount(playercount)
        
        this.greeting.html("hello "+Name)
        this.greeting.position(130,160);
    })
    }
}