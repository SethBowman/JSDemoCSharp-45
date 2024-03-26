
//console.log("Hello world")

//using let

let greeting = "Hello world!"
let greetingTwo = 'Hello world!'
let greetingThree = `Hello world!`

let newString = `My computer says ${greeting} and ${greetingTwo}`

console.log(newString)


//using var
if(true) {
    var language = "JavaScript"
}

console.log(language)

//using const
const name = "Seth"
const birthYear = 1994

//get user input
let response  = prompt("What is your name?")

//alert(`Hello, ${response}!`)

//DOM manipulation
document.getElementById("title").innerHTML = `Hello, ${response}!`