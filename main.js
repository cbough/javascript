let x = document.getElementById('profileBtn')
let y = document.getElementsByClassName('para')

console.log(y)



let main = prompt('Who is your main?')// ask question, store answer in main variable
console.log(main)// log main variable to the console

// main variable is input from user. Which means it oculd look like anything

if (main == "Roy" || main == 'roy') { // convert string in main to ensure it will be lower case
  alert('That is correct!')
} else {
  alert('you suck!')
}
