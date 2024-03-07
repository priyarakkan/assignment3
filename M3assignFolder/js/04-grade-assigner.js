let grade = prompt('Enter your grade: ')

if (grade < 1 || grade > 100) {
    prompt('Your number is invalid. Please ener a number between 1 and 100.')
} else if (grade >= 90) {
    document.write('You recieved and A.')
} else if (grade >= 80) {
    document.write('You recieved and B.')
} else if (grade >= 70) {
    document.write('You recieved and C.')
} else if (grade >= 60) {
    document.write('You recieved and D.')
} else {
    document.write('You failed the course.')
}