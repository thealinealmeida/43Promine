class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("nome");
    this.buttonImg = createImg("./images/start.png");
  }
 display() {
    this.input.position(380, 180);
    this.input.size(180, 30);
    this.buttonImg.position(475 + 50, 250);
    this.buttonImg.size(150, 50);

    this.buttonImg.mousePressed(() => {
      this.input.hide();
      this.buttonImg.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.updateCount(playerCount);
      player.index = playerCount;
      player.addPlayer();      
      this.greetings.html("Olá " + player.name);
      this.greetings.position(300, 180);
    });
  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }
  
}

