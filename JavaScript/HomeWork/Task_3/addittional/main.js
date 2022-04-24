// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.


/*let arrayNum = [];

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}*/

// b. заповнити його 50 непарними числами за допомоги циклу.

/*
let arrayUnpaired = [];

for (let i = 0; i < 76; i++) {
    if (i % 3) {
        console.log(i)
    }
}
*/


//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

/*let random_start = 1000;
let random_end = 20;

let object = {};
let array = [];
for (let i = 0; i < random_end; ++i) {
    let random = Math.floor(Math.random() * (random_start - i));
    array.push(((random in object) ? object[random] : random) + 1);
    let num = random_start - i - 1;
    object[random] = (num in object) ? object[num] : num;
}

console.log(array);*/

/*let randomNum = 1000;
let allCycles = 20;

for (let i = 0; i < allCycles; i++) {
    let test = Math.floor(Math.random() * (randomNum + 1) +1)
    console.log(test)
}*/

/*
for (let i = 0; i < 20; i++) {
    console.log(Math.floor(Math.random() * 1000))
}
*/


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


/*
for (let i = 0; i < 20; ++i) {

console.log(Math.floor(Math.random() * 732) + 8 )
}
*/


// 2. Вивести за допомогою console.log кожен третій елемен

/*let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(arr.filter((item, index) =>! ((index + 1) % 3)))*/




