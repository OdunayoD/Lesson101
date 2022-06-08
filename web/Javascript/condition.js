let grade = prompt('what is your score');

grade = Number(grade);

if (grade >= 90) {
    console.log('You got an A');
} else if (grade >= 80) {
    console.log('You got a B');
} else if (grade >= 70) {
    console.log('You got a C');
} else if (grade >= 60) {
    console.log('You got a D');
} else if (grade >= 50) {
    console.log('You got an E');
} else {
    console.log('You failed');
}

// Next class ---> switch statement

/** 
 * 1. Log the grade for D and E too.
 * 
 * 2. Log if an expression is an even number or odd number.
*/

let mod = (6 % 2);

// let sum = 0;
// 2 + 2 = 4
// 6 % 2 = 0
// 0 = 6 % 2
// sum = 2 + 4

if (mod == 0) {
    console.log('Expression is an even number');
} else {
    console.log('Expression is an odd number');
}
