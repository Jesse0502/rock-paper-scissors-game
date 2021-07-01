// const companies = [
//     {name: "CompanyOne", category: "Finance", start: 1907, finish: 2002 },
//     {name: "CompanyTwo", category: "automobiles", start: 2007, finish: 2012 },
//     {name: "CompanyThree", category: "FMCG", start: 1900, finish: 1982 },
//     {name: "CompanyFour", category: "industrial", start: 1917, finish: 1932 },
//     {name: "CompanyFive", category: "Tech", start: 1937, finish: 2012 },
//     {name: "CompanySix", category: "Finance", start: 1947, finish: 2004 },
// ]

// const ages = [13, 23, 54,2 ,4, 34, 21];


// for (let i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }
 
// companies.forEach(function(company){
//     console.log(company.category)
// })

// ages.forEach(function(age){
//     if(age >= 21){
//         return true;
//     }}
// )


// const financeComp = companies.forEach(function(companies){
//     if(companies.category == "Finance"){
//         console.log(companies)
//     }
// })

 
 

// const oldCompanies = companies.filter((companies) => companies.start <= 1980 && companies.category === "Finance" )

// console.log(oldCompanies)

//  const lastedTenYears = companies.filter(companies =>  companies.finish - companies.start > 10)

//  console.log(lastedTenYears)


// const testMap = companies.map(function(companies){
//         return `${companies.name} [ ${companies.start} - ${companies.finish}]`
// })

// console.log(testMap)

// const sqroot = ages.map(age =>
//     Math.sqrt(age)
// )

// console.log(sqroot)

// const double = ages.map(age => age * 2).map(age => Math.sqrt(age))

// console.log(double)


// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

// console.log(sortedCompanies)

// const add = companies.forEach(   (comapnies) => comapnies + comapnies)

// console.log(add)

// function fun1() {
//     x=10;
//     y = 0;

//      function num (y){
//        y = 5;  
//      return y;
//         }

//      y = num();   

//         console.log(x+y);
//  }

//  fun1();

// function total(y){
//     // console.log(`Num is ${num.call(y)}`);
//     console.log("running total fun")
//     console.log(`${fun1.call(y)}`)
// }

// total();


// 'use strict'
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//         this.calcArea();
//     }

//     get area(){
//         return this.calcArea()
//     }

//     calcArea(){
//         return this.height * this.width;
//     }
// };

// let a = new Rectangle(20, 38)

// console.log(a.area)

 
 
 


// class person {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     get fullName(){
//        return `${this.firstName} ${this.lastName}`
//     }
 
// }
// const persons1 = [
//     new person("Mosh", "Hamedani"),
//     new person("David", "kenny"),
//     new person("Josh", "carry"),
//     new person("daniel", "kibi"), 
// ]


// persons1.map(person => console.log(person.fullName)) 

// class Square {
//     constructor(width, height){
//         this.height = height
//         this.width = width
//     }

//     get area(){
//         return this.height * this.width
//     }
// }

// const arr = [
// new Square(10, 23),
//  new Square(3,4),
//  new Square(2,5)
// ]
// console.log(arr.map(totalArea => totalArea.area))

 
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
// }

// class Programmer extends Person{
 
//     constructor(name, age, exp){
//         super(name, age, exp);
//         this.exp = exp
//     }
   
    
// }

// let result = new Programmer("David", 32, 4)

// console.log(result)

// class Xerox {
 
//   get msg(){
//     setTimeout(() => {
//         console.log("This is async message")
//     }, 1000)
//   }
// }

// const a1 = new Xerox()

// console.log(a1.msg)

// const Name ="anakin" 

// function ok()
// {
//     for(i = 0; i <= Name.length; i++)
//     {
//         let a = (Name[i] === "a");
//        let consoe = a ? console.log(Name[i]) :
//     }
// }
// console.log(ok())


// let age = prompt("age", 4) 
// let vakue = age < 3 ?  "Hi baby"  :
// age < 18 ?  "Hello"  :
// age < 100 ? "hi grandpa"  :  "who are you" ;

// alert(vakue)

// let user = prompt("Enter your name")

// if(user == ""){
//     alert("cancelled");
// } else if(user != "TheMaster"){
//     alert("I don't know you");
// } else {
//     alert("Welcome");
// }

// for(let i = 0;; i++){
//     if(i % 2 != 0){
//         alert(i++)
//     }
// }

// let a = 2 + 1
// b = 0

// switch (a){
//     case 3:
//         alert("sum is three")
//         switch (a){
//             case b + 1:
//                 alert("This is equal to b + 1")
//                 break;
//         }
//         break;

//     case 4:
//         alert("Sum is 4")
//         break;

//     case 5:
//         alert("Sum is 5")
//         break;
// }

// const button = document.querySelector(".button")
// const demo = document.querySelector("#demo")

// button.addEventListener("click", () => {
//      add(); 
// })

// demo.textContent = "Hello"

// function add(){
//     let a  = 9
//     let b = 5
//     let total = 0
//     do{
//         total = a + b
//         total++;
//         alert(total)
//     }while(total == true)

// }

// function subtract(){
//     let a = 9
//     let b = 4

//     const h3 = document.createElement("h3")

//     h3.appendChild(body)
//     h3.textContent(a - b)
// }

// let x = prompt("Enter x")
// let n = prompt("Enter n")

// function power(){
//  let p = Math.pow(x,n)
//  alert(p)
// }

// power();
"use strict";
//  function ask (question, yes, no) {
//      if(confirm(question)) yes();
//      else no();
//  }

//  function showOk(){
//      alert("You agreed")
//  }

//  function showNo(){
//      alert("You disagreeed")
//  }

//  ask("DO you agree", showOk, showNo);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree",
//      () => alert("you agreed"),
//      () => alert("You diagreed")
//     );

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
 
// function Calculator(){
//  this.read = function(){
//      this.a = +prompt("a?")
//      this.b = +prompt("b?")
//  },

//  this.sum = function() {
//      return this.a + this.b;
//  }

//  this.mul = function() {
//      return this.a * this.b;
//  }
// }

// let calculator = new Calculator();

// calculator.read();
// alert("SUm is " + calculator.sum())
// alert("Product is " + calculator.mul())


// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }



// function truncate(str, maxlength) {

//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// alert(truncate("yo bebes agua, tu bebes agua?", 30))

// let a = {
//     name: "Joe",
//     age: 30
// }

// let {name, age, isAdmin = true} = a

// console.log(Date())

// let a = new Date("Feb 20, 2012, 03:12:00")

// console.log(a)

// function getDay(date){
//     let day = [ "SU", "MO", "TU", "WE", "TH", "FR", "SA",]
//     if(day == 0){
//         day == 7
//     }
//         return day[date.getDay()];
// }

// let date = new Date(2001, 1, 5)
// console.log(getDay(date))

// let student = {
//     name: "john",
//     age: 23,
//     courses: ["html", "css", "javscript"],
//     marks: undefined
// }

// let json = JSON.stringify(student)

// console.log(student)

// console.log(json)

// let a = 2

// function check(){
   
//     if(a === 10){
//         console.log("True")
       
//     }else{
//         console.log(a)
//         ++a;
//         check(a);
        
//     }
// };

// check();

// 

// let p = new Promise((resolve, reject) => {
//     let a = 2 + 2
//     if(a === 4){
//         resolve("True")
//     }else{
//         reject("Not true")
//     }
// })

// p.then((message) => {
//     console.log("This is in then " + message)
// }).catch((message) => {
//     console.log("This is in catch " + message)
// })

// function fun(){
//     setTimeout (() => {
//         console.log("Hello")
//     }, 1000)
// }

// fun();

// const promise = new Promise((resolve, reject) => {
//     if(false){
//         resolve(setTimeout(() => {console.log("distractions are awful")}));
//     } else {
//         reject(console.log("no distractions"));
//     }
// })

// promise.then(() => {
//     console.log("this is from then")
// }).catch(() => {
//     console.log("This is from catch")
// })

// const newWeb = new Promise((resolve, reject) => {
//     let a = 0
//     if(a == 2){
//         setTimeout(() => resolve("no distractions"), 1000)
//     }else {
//         setTimeout(() => reject("dustractiosn are awful"), 1000)
//     }
// })

// newWeb.then(console.log).catch(console.error)

// const select = document.querySelector("select") 
// const btn = document.querySelector("#btn")
// const demo = document.querySelector("#demo") 

// select.addEventListener("change", updateWeather)

// function updateWeather(){
//      let choice = select.value
//     switch(choice){
//         case "Sunny": 
//         demo.textContent = "It is a sunny day"
//         break;

//         case "Rainy":
//             demo.textContent = "It is a rainy day"
//             break;

//         case "snow":
//             demo.textContent = "It is a snowy day"
//             break;

//         case "thunder": 
//             demo.textContent = "Today is thunder day"
//             break;
//     }
// }

//  const select = document.querySelector("select")
//  const body = document.querySelector("body")

//  select.addEventListener("change", updateTheme)

//  function updateTheme(){
//      let choice = select.value 
//      switch(choice){
//          case "Black": 
//         body.style.backgroundColor = "Black"
//         body.style.color = "White"
//         break;
     
//         case "Purple": 
//         body.style.backgroundColor = "Purple"
//         body.style.color = "White"
//         break;

//         case "Blue": 
//         body.style.backgroundColor = "Blue"
//         body.style.color = "White"
//         break;

//         case "Green": 
//         body.style.backgroundColor = "Green"
//         body.style.color = "White"
//         break;
//     }
//  }

// const btn = document.querySelector("#btn")
// const demo = document.querySelector("#demo")

// btn.addEventListener("click", () => {
//     let a = +prompt("Enter first value")
//     let b = +prompt("Enter second value")
//     demo.innerHTML = `${a} + ${b} = ${sum(a, b)}` 
// })

// function sum(x, y){
//     return x + y;
// }

//Capitalizing first letter
// function caps(){
//     let string = "bithces"
//     let string2 = string.charAt(0).toUpperCase() + string.substr(1, string.length)
//     console.log(string2)
// }

// caps();

// Return the last letter of a string
// function lastLetter(a){
    
//     return a.charAt(a.length - 1)

// }

// console.log(lastLetter("shotgun"));

// Fizz buzz game
// let choice = +prompt("Enter a number")
// for (let i = 1; i <= choice; i++) {
//     if(i % 5 == 0 && i % 3 == 0){
//         console.log("fizz buzz")
//      }
//     if(i % 3 == 0 && i & 5 !== 0){
//        console.log("fizz")
//     }
//     if(i % 5 == 0 && i % 3 !== 0 ){
//         console.log("buzz")
//      }
//     console.log(i)
// }


//Rock paper scissors game

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
    demo.textContent = "'It was a tie' "
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