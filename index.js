
/*--Computer Logic--*/


function theComputerChoice () {
                   const computerChoice = Math.floor(Math.random() * 3);
                   if (computerChoice===1) {
                    console.log("ROCK");
                   } else if (computerChoice===2) {
                    console.log("PAPER");
                   }  if (computerChoice===0) {
                    console.log("SCISSOR");
                   } else if (computerChoice===3) {
                    console.log("SCISSOR");
                   }
}

theComputerChoice();

/*--Human Logic--*/

function theUserChoice () {
    const userChoice = prompt("ROCK, PAPER OR SCISSOR?");
}

theUserChoice();
theUserChoice();

