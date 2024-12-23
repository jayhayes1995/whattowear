
    
   let currentX = 0; // Initial position
   let currentY = 60;
   let toplftbutton = document.getElementById("topleftbutton");
   const toprghtbutton = document.getElementById("toprightbutton");
   let clickCount = 0;

function moveImageLeft() {
    const image = document.getElementById("topImage");
    toplftbutton.style.scale="1"
    toprghtbutton.style.scale = '1';
    
   if(clickCount <= 5){
    clickCount++;
    currentX -= 75; // Adjust the movement distance as needed
    console.log(clickCount)
    image.style.transform = `translateX(${currentX}px) translateY(${currentY}px)`;
    
   }

   
   if (clickCount >= 5) { // Adjust the number of clicks as needed
     toplftbutton.style.scale = '0';
   }
   
   
   


  }



  ///////////////////////////////

  function moveImageRight() {
    
    const image = document.getElementById("topImage");
   
    toplftbutton.style.scale = '1';
    
   
  
    if(clickCount >= 1){
        toprghtbutton.style.scale = '1';
    clickCount--;
    currentX += 75; // Adjust the movement distance as needed
    console.log(clickCount)
    image.style.transform = `translateX(${currentX}px) translateY(${currentY}px)`;
  
    }
    if (clickCount == 1) { // Adjust the number of clicks as needed
        toprghtbutton.style.scale = '0';
      }

  }