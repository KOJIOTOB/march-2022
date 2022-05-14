
/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд*/

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

const newName = (string, symbol) => {
  let arr = [];
  if (string.includes(symbol)) {
      let sing = string.split(symbol)
      sing.forEach((item) => {
          if (item) arr.push(item)
      })
      console.log(arr.join(' '))
  }
}

newName(n1, '.');
newName(n2, '-');
newName(n3, '_');
