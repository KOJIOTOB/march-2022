// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

/*let stringLength_1 = 'hello world';
console.log(stringLength_1.length);

let stringLength_2 = 'lorem ipsum';
console.log(stringLength_2.length);

let stringLength_3 = 'javascript is cool';
console.log(stringLength_3.length);*/

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

/*let upText_1 = 'hello world';
console.log(upText_1.toLocaleUpperCase());

let upText_2 = 'lorem ipsum';
console.log(upText_2.toLocaleUpperCase());

let upText_3 = 'javascript is cool';
console.log(upText_3.toLocaleUpperCase());*/


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*let downText_1 = 'HELLO WORLD';
console.log(downText_1.toLocaleLowerCase());

let downText_2 = 'LOREM TEXT';
console.log(downText_2.toLocaleLowerCase());


let downText_3 = 'JAVASCRIPT IS COOL';
console.log(downText_3.toLocaleLowerCase());*/


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

/*let str = ' dirty string   ';
console.log(str.trim());*/

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

/*let str = 'Ревуть воли як ясла повні';

const stringToarray = (str) => {
    return str.split(' ');
};

console.log(stringToarray(str));*/


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

/*let array = [10,8,-7,55,987,-1011,0,1050,0];

let map = array.map(value => {
    return value + '';
});

console.log(map);*/


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

/*let sortNums1 = (array, direction) => {
    if (direction === 'direction1') return array.sort((a, b) => a - b);
}
console.log(sortNums1([11,21,3], 'direction1'));

let sortNums2 = (array, direction) => {
    if (direction === 'direction2') return array.sort((a, b) => b - a);
}
console.log(sortNums2([11,21,3], 'direction2'))*/


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

/*let sortMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortMonth)*/

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

/*let filterCourses = coursesAndDurationArray.filter((value => {
    return value.monthDuration > 5
}));

console.log(filterCourses);*/


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardDeck = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
];

//console.log(cardDeck.filter(item => item.cardSuit === 'spade' && item.value === 'ace'))
//console.log(cardDeck.filter(item => item.value === '6'));
//console.log(cardDeck.filter(item => item.color === 'red'));
//console.log(cardDeck.filter((item => item.cardSuit === 'diamond')))
//console.log(cardDeck.filter(item => item.cardSuit === 'clubs' && item.value > '8'))







