
let userScore = 0
let computerScore = 0 
        
          function playGame () {
            
            
            const userInput = theUserChoice();
            const computerInput = theComputerChoice();
                  
                    function theUserChoice () {
                     const userChoice = prompt("ROCK, PAPER OR SCISSOR?"); 
                     return userChoice ;
                    }


                   function theComputerChoice () {
                           const computerChoice = Math.floor(Math.random() * 3);
                              if (computerChoice===1) {
                                        console.log("ROCK");
                                        return "ROCK";
                                           } else if (computerChoice===2) {
                                                       console.log("PAPER");
                                                        return "PAPER";
                                                 }  else {
                                                         return "SCISSOR";
                                                         }     
                                                           return computerChoice ; 
                                                      }

                                                      
                    function oneRound (userInput, computerInput) {
    

                                   userInput = userInput.toUpperCase();
                                   computerInput = computerInput.toUpperCase();
                
                    
                
                
                                 
                                if   (
                                    (userInput==="ROCK" && computerInput==="SCISSOR") || 
                                    (userInput==="PAPER" && computerInput==="ROCK") ||
                                    (userInput==="SCISSOR" && computerInput==="PAPER") 
                                 ) {
                                            userScore++;
                                        }  
                                 else {
                                    computerScore++;
                                      }
                
                                console.log(`userScore=${userScore}` +" "+ `computerScore=${computerScore}`);

                            }
                            
                            
                            
                            for (let i = 0;i < 3; i++) {
                                const userInput = theUserChoice();
                                const computerInput = theComputerChoice();
                                oneRound(userInput,computerInput);
                            }

                                  if (userScore === computerScore) {
                                    console.log("It's a tie.")
                                  } else if (userScore > computerScore) {
                                    console.log("You are the winner!");
                                  } else {
                                    console.log("You lose!");
                                  }


                         }
                            playGame();