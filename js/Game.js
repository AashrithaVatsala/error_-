class Game {
    constructor(){

    }
    
    getState(){
        var playerStateRef = database.ref('gameState');
        playerStateRef.on("value",(data)=>{
          gameState = data.val();
        })
      }
    
      updateState(state){
        database.ref('/').update({
          gameState : state
        });
      }

      start(){
          if (gameState === 0) {
              form = new Form();
              form.display();

              player = new Player ();
              player.getCount();
          }

          chef = createSprite(250, 440, 10, 10);
          chef.addAnimation("chef", chefImage);
          chef.scale = 0.5;  

          customer1 = createSprite(700, 320, 10, 10);
          randCustomer = Math.round(random(1, 3));
          switch(randCustomer){
            case 1 :  customer1.addAnimation("custumer", custumer1Image);
              break;
            case 2 : customer1.addAnimation("customer1", custumer2Image);
              break;
            case 3 :  customer1.addAnimation("custumer2", custumer3Image);
               break;
            default : break;    
          }
          
          customer1.scale = 0.5;  

          dish1 = createSprite(700, 320, 10, 10);
          rand2 = Math.round(random(1, 3));
          switch(rand2){
            case 1 : dish1.addAnimation("dish1", dish1Image);
            dish1.scale = 0.5;
              break;
            case 2 : dish1.addAnimation("dish2", dish2Image);
            dish1.scale = 0.1;
              break;
            case 3 : dish1.addAnimation("dish3", dish3Image);
            dish1.scale = 0.2;
            break;
            default : break;    
          }
      
          coffeemachine = createSprite(540, 330, 10, 10);
          coffeemachine.addAnimation("coffemachine", coffeemachineImage);
          coffeemachine.scale = 0.3;
          
          happinessbar = createSprite(570, 220, 10, 150);
          happinessbar.shapeColor = "green"

      }
      
      play(){

        image(chefImage, 600, 250, 150, 250);
        grandmaTime++
        if (grandmaTime > 10) {
          clear();
          image(backgroundImg, 0, 0, 800, 700);
          form.greeting.hide();
          image(grandmaImage, 50, 50);
          image(speechImage, 180, 80, 300, 200);
          
          if (grandmaTime > 10 && grandmaTime < 50) {
          text("Hi " + player.name, 270, 160);
          text("Grab the corn", 270, 170)
          text("put in the steamer", 270, 180);
        
        } else if(grandmaTime > 50 && grandmaTime < 100){
            text("Take the cookie dough", 270, 170);
            text("place in the oven", 270, 180);
        
          } else if(grandmaTime > 100 && grandmaTime < 150){
            text("Grab the coffee", 270, 170)
            text("serve it to the custumer", 270, 180)
        
          }  
          
        }
        
        if (grandmaTime > 150) {
          clear();
          image(kitchenImage, 0, 0, 800, 600);
          image(cookieDoughImage, 420, 300, 50, 50);
          image(cornImage, 370, 300, 50, 50);
          image(steamerImage, 310, 300, 50, 50);
          drawSprites();

        }
        
        if(grandmaTime > 200){
          image(custSpeechBubble, 650, 240, 50, 110);
          if (mousePressedOver(coffeemachine)) {
            chef.x = 506;
            chef.y = 360;
          }
          if (chef.x = 506 && chef.y = 306) {
            dish1.x = 506;
            dish1.y = 360;
          } 

          happiness ++;
          if (happiness < 50) {
            happinessbar.shapeColor = "green"
          } else if (happiness > 50 && happiness < 100) {
            happinessbar.shapeColor = "orange"
          } else if(happiness > 100){
            happinessbar.shapeColor = "red"
          }

        }
      
      }


}