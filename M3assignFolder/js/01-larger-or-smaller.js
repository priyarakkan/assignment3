let num1 = prompt('Enter your first number: ')
let num2 = prompt('Enter your second number: ')

if (num1 > num2) {
    console.log(`The larger number entered is: ${num1}`)
} else if (num2 > num1) {
    console.log(`The larger number entered is: ${num2}`)
} else {
    console.log(`The two numbers are equal`)
}