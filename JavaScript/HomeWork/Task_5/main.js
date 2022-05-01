
// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*let number = [1,2,3,4,5,6,7,8,9,10];

const sumNum = (number) => {
  let sumNum = 0;
    for (const numberElement of number) {
        sumNum = sumNum + numberElement;
    }
    return sumNum / number.length;
}

console.log(sumNum(number));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*const anyNum = (...array) => {
  let minNum = array[0];
  let maxNum = array[0];
    for (const number of array) {
        if (number < minNum) {
            minNum = number;
        }else if (number > maxNum) {
            maxNum = number;
        }
    }
    console.log('Максимальное число', maxNum);
    return minNum;
}

console.log('Минимальное число', anyNum(123,234,65,779,87,44));*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*const randomNum = (random) => {
    let number = [];
    for (let i = 0; i < random; i++) {
        number.push(Math.floor(Math.random() * 100))
    }
    return number;
}

console.log(randomNum(15));*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*const randomNum = (length, limit) => {
    let number = [];
    for (let i = 0; i < length; i++) {
        number.push(Math.floor(Math.random() * limit))
    }
    return number;
}

console.log(randomNum(10, 999));*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*let arr = [1,2,3];

const revers = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i-- ) {
        newArr.push(arr[i])
    }
    return newArr;
}
console.log(revers(arr));*/


//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*const rectangle = (a, b) => {
    return a * b;
}

console.log(rectangle(20,20))*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r

/*const areaCircle = (r) => {
    let radius = r **2;
    return 3.14 * radius;
}
console.log(areaCircle(10));*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*const radiusHeight = (r, h) => {
  return 2 * 3.14 * r * h;
}
console.log(radiusHeight(20, 20));*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*let arrAll = ['q','w','e','r','t','y',true,false];

let array = [0,1,2,3,4,5,6,7,8,9,10];

const creatArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

creatArray(arrAll);
creatArray(array);*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*const creatP = (argument) => {
    for (let i = 0; i < 1; i++) {
        document.write(`<p>${argument}</p>`)
    }
}
creatP('параграф з текстом');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*const creatUl = (arguments) => {
    document.write(`<ul>`)
        document.write(`<li>${arguments}</li>`)
        document.write(`<li>${arguments}</li>`)
        document.write(`<li>${arguments}</li>`)
    document.write(`</ul>`)
}

creatUl('Fункція яка створює ul з трьома елементами li.');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*const createUl = (arguments, num) => {
    document.write(`<ul></ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${arguments}</li>`)
    }
    document.write(`</ul>`)
}

createUl('Fункція яка створює ul з трьома елементами li', 3);*/


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*let array = ['q','w','e','r','t','y',true,false];

const listCreat = (list) => {
    for (let i = 0; i < list.length; i++) {
        document.write(`<div>${list[i]}</div>`)
    }
}

listCreat(array);*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*let users = [{id:1, name: 'Viktor', age: 31},
    {id:2, name: 'Fedor', age: 23},
    {id:3, name: 'Alona', age: 33},
    {id:4, name: 'Vlad', age: 41},
    {id:5, name: 'Masha', age: 32}];

const creatUser = (arguments) => {
    for (let i = 0; i < arguments.length; i++) {
        let user = users[i];
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

creatUser(users);*/

// - створити функцію яка повертає найменьше число з масиву

/*let array = [55,45,76,33,89,88,32,44,34,56,21,35];

const minNum = (array) => {
    let arrayNumber = array[0];
    for (const arrayElement of array) {
        if (arrayElement < arrayNumber) {
            arrayNumber = arrayElement;
        }
    }
    return arrayNumber;
}

console.log(minNum(array));*/


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*let array = [1,2,10]

const sumArr = (array) => {
    let sumArr = 0;
    for (const arrayElement of array) {
        sumArr = sumArr + arrayElement
    }
    return sumArr
}

console.log(sumArr(array));*/

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

/*let array = ['<<<<<<left', 'right>>>>>>'];

const conversely = (arr) => {
   let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}

console.log(conversely(array));*/
