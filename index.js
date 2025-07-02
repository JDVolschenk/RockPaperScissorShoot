
/*--Computer Logic--*/


function theComputerChoice (computerInput) {
                   const computerChoice = Math.floor(Math.random() * 3);
                   if (computerChoice===1) {
                    console.log("ROCK");
                      return "ROCK";
                   } else if (computerChoice===2) {
                    console.log("PAPER");
                    return "PAPER";
                   }  if (computerChoice===0) {
                    console.log("SCISSOR");
                        return "SCISSOR";
                   }     
                   return computerChoice ; 
}


/*--Human Logic--*/

function theUserChoice () {
    const userChoice = prompt("ROCK, PAPER OR SCISSOR?"); 
    return userChoice ;
}


/*--Score Variable--*/

let userScore = 0
let computerScore = 0 

/*--Play ONE round--*/

function oneRound (userInput, computerInput) {
    

    userInput = userInput.toUpperCase();

    


    if (userInput===computerInput) {
        console.log("TIE");}
       else if   (
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
        
    
     
   
const userInput = theUserChoice();
const computerInput = theComputerChoice();

oneRound(userInput, computerInput);
oneRound(userInput,computerInput);








``