// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*function rectangle(a, b) {
    return a * b;
}
console.log(rectangle(5,10));*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r

/*function areaCircle(r) {
    let radius = r **2;
    return 3.14 * radius;
}
console.log(areaCircle(100));*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*function radiusHeight (r, h) {
    return 2 * 3.14 * r * h;
}

console.log(radiusHeight(20, 10));*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*let arrAll = ['q','w','e','r','t','y',true,false];

let array = [0,1,2,3,4,5,6,7,8,9,10];

function creatArr(arr) {
 for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
 }
}

creatArr(array);
creatArr(arrAll);*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function createP (arguments) {
 for (let i = 0; i < arguments.length; i++) {
  document.write(`<p>${arguments}</p>`);
 }
}

createP('Hello Okten');*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function createUl (arguments) {
  document.write(`<ul>`)
  document.write(`<li>${arguments}</li>`)
  document.write(`<li>${arguments}</li>`)
  document.write(`<li>${arguments}</li>`)
  document.write(`</ul>`)
}

createUl('Hello World');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function creatUl (arguments, amount) {
 document.write(`<ul>`)
 for (let i = 0; i < amount; i++) {
  document.write(`<li>${arguments}</li>`)
 }
 document.write(`</ul>`)
}

creatUl('some text missing',3)*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*let array = [12, 34, true, 'hello', 56, false, 'okten'];

function creatList (arr) {
 document.write(`<ul>`)
 for (let i = 0; i < arr.length; i++) {
  document.write(`<li>${arr[i]}</li>`)
 }
 document.write(`</ul>`)
}
creatList(array)*/


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*
let users = [{id:1, name: 'Viktor', age: 30},
 {id:2, name: 'Fedor', age: 20},
 {id:3, name: 'Alona', age: 25},
 {id:4, name: 'Vlad', age: 50},
 {id:5, name: 'Masha', age: 40}];

function createUsers(users) {
 for (let i = 0; i < users.length; i++) {
  let user = users[i];
  document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
 }
}
createUsers(users);
*/

// - створити функцію яка повертає найменьше число з масиву

/*
let array = [55,45,76,33,89,88,32,18,34,56,21,35];

function minNum(array) {
 let arrayNumber = array[0];
 for (const arrayElement of array) {
  if (arrayElement < arrayNumber) {
   arrayNumber = arrayElement;
  }
 }
 return arrayNumber;
}

console.log(minNum(array))

minNum(array)
*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*
let arr = [1, 2, 10];

function sumNum(arr) {
 let sumNum = 0;
 for (const arrElement of arr) {
  sumNum = sumNum + arrElement;
 }
 return sumNum;
};

console.log(sumNum(arr));*/
