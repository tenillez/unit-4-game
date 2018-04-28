//first attempt using return to display the gems
$( document ).ready(function(){
    var wins = 0;
    var losses = 0; 
    var randomNumber = generateRandomNumber();
    var userTotal; 
    var crystals;
  
    function generateRandomNumber (){
        return Math.floor(Math.random()*101+19);
    }
  
    function generateCrystals() {
      return {
        red: {
          points: Math.floor(Math.random() * 11 + 1),
          imageURL: "/Users/tenille3/Desktop/unit-4-game/assets/images/ruby.png"
        },
        blue: {
          points: Math.floor(Math.random() * 11 + 1),
          imageURL: "/Users/tenille3/Desktop/unit-4-game/assets/images/blue.png"
        },
        pink: {
          points: Math.floor(Math.random() * 11 + 1),
          imageURL: "/Users/tenille3/Desktop/unit-4-game/assets/images/pink.png"
        },
        clear: {
          points: Math.floor(Math.random() * 11 + 1),
          imageURL: "/Users/tenille3/Desktop/unit-4-game/assets/images/clear.png"
        }
      }
  
    }
    function startGame (){
      userTotal = 0;
      crystals = generateCrystals();
      randomNumber = generateRandomNumber();
      $('#randomNumber').text(randomNumber);
    }
    
    function renderCrystals (){
      for (var key in crystals){
       // var crystalDiv = $("<div class = 'crystalButton' data-name ='" + key + "'>'");
       var crystalDiv = $("<span class='crystalButton' data-name='" +key + "'>");
       var crystalImg = $("<img alt='image' class = 'gemImage' >").attr ("src", crystals [key].imageURL);
        crystalDiv.append (crystalImg);
        $('.gems').append (crystalDiv);
      }
    }
    startGame ();
    renderCrystals();
  
  
  //  function yay(){
     alert("WooHoo! You won!");
       wins++; 
       $('#numberWins').text(wins);
       reset();
     
     //addes the losses to the userTotal
     function loser(){
     alert ("Bummer. You lose.");
       losses++;
       $('#numberLosses').text(losses);
       reset()
     }
     //sets up click for jewels
       $('#one').on ('click', function(){
         userTotal = userTotal + num1;
         console.log("New userTotal= " + userTotal);
         $('#finalTotal').text(userTotal); 
      //sets win/lose conditions
             if (userTotal == Random){
               yay();
             }
             else if ( userTotal > Random){
               loser();
             }   
       })  
       $('#two').on ('click', function(){
         userTotal = userTotal + num2;
         console.log("New userTotal= " + userTotal);
         $('#finalTotal').text(userTotal); 
             if (userTotal == Random){
               yay();
             }
             else if ( userTotal > Random){
               loser();
             } 
       })  
       $('#three').on ('click', function(){
         userTotal = userTotal + num3;
         console.log("New userTotal= " + userTotal);
         $('#finalTotal').text(userTotal);
  
        //sets win/lose conditions
               if (userTotal == Random){
               yay();
             }
             else if ( userTotal > Random){
               loser();
             } 
       })  
       $('#four').on ('click', function(){
         userTotal = userTotal + num4;
         console.log("New userTotal= " + userTotal);
         $('#finalTotal').text(userTotal); 
        
               if (userTotal == Random){
               yay();
             }
             else if ( userTotal > Random){
               loser();
             }
       });   
    }); 
         // Appending random number to the randomNumber id in the html doc
      //
      var red= Math.floor(Math.random()*11+1)
      var blue= Math.floor(Math.random()*11+1)
      var num3= Math.floor(Math.random()*11+1)
      var num4= Math.floor(Math.random()*11+1)
      // Setting up random numbers for each jewel
      // Random number has to be between 1 - 12
      // 
      var userTotal= 0; 
      var wins= 0;
      var losses = 0;
      //  Decaring variables for tallies
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //resets the game
    function reset(){
          Random=Math.floor(Math.random()*101+19);
          console.log(Random)
          $('#randomNumber').text(Random);
          red= Math.floor(Math.random()*11+1);
          blue= Math.floor(Math.random()*11+1);
          num3= Math.floor(Math.random()*11+1);
          num4= Math.floor(Math.random()*11+1);
          userTotal= 0;
          $('#finalTotal').text(userTotal);
          } 
  