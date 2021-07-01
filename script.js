const rock = document.querySelector("[rock]")
const paper = document.querySelector("[paper]")
const scissors = document.querySelector("[scissors]")
const demo = document.querySelector("#demo")
const user = document.querySelector("#user")
const comp = document.querySelector("#comp")
const userScore = document.querySelector("#userScore")
const compScore = document.querySelector("#compScore")

userScore.textContent = +0;
compScore.textContent = +0;

rock.addEventListener("click", () => {
   choice("Rock");
})

paper.addEventListener("click", () => {
    choice("Paper");
 })

 scissors.addEventListener("click", () => {
    choice("Scissors");
 })
    
function roll(){
    return Math.floor(Math.random() * 3);
}

function compRoll(){

    let comp = roll();
    if(comp == 0){
        return "Rock"
    }
    if(comp == 1){
        return "Paper"
    }
    if(comp == 2){
       return "Scissors"
    } 
}

function userWon(choice, compChoice){
    demo.textContent = "You won!!"
    user.textContent = choice 
    comp.textContent = compChoice
    let score = userScore
    score.textContent = 1 + +score.textContent
}

function compWon(choice, compChoice){
    demo.textContent = "Computer wins!!"  
    user.textContent = choice 
    comp.textContent = compChoice
    let score = compScore
    score.textContent = 1 + +score.textContent
}

function tie(choice, compChoice){
    demo.textContent = "'Tie' "
        user.textContent = choice 
        comp.textContent = compChoice
}

function choice(userChoice){
    let compChoice = compRoll()
     let choice = userChoice
    if(compChoice == "Rock" && choice == "Paper"){
        userWon(choice, compChoice)
    }
    if(compChoice == "Paper" && choice == "Rock"){
        compWon(choice, compChoice)
    }
    if(compChoice == "Rock" && choice == "Rock"){
        tie(choice, compChoice)
    }

    if(compChoice == "Scissors" && choice == "Rock"){
        userWon(choice, compChoice)
    }
    if(compChoice == "Rock" && choice == "Scissors"){
        compWon(choice, compChoice)
    }
    if(compChoice == "Scissors" && choice == "Scissors"){
        tie(choice, compChoice)
    }

    if(compChoice == "Paper" && choice == "Scissors"){
        userWon(choice, compChoice)
    }
    if(compChoice == "Scissors" && choice == "Paper"){
        compWon(choice, compChoice)
    }
    if(compChoice == "Paper" && choice == "Paper"){
        tie(choice, compChoice)
    }
}
