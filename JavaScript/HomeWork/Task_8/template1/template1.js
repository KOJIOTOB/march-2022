// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const contentId = document.getElementById('content');
console.log(contentId);

// -- отримує текст з блоку з id "rules"

const rulesId = document.getElementById('rules');
console.log(rulesId.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentId.innerText = 'Бойцовского клуб';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesId.innerText = 'в схватке участвуют только двое.';

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

let allBgrRed = document.body.children;
for (const allBgrRedElement of allBgrRed) {
    allBgrRedElement.style.background = 'red';
    allBgrRedElement.style.color = 'blue';
    allBgrRedElement.style.fontSize = '30px';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

const allCllases = document.getElementById('rules');
console.log(allCllases.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let allRules = document.getElementsByClassName('fc_rules');
for (const allRule of allRules) {
    allRule.style.color = 'red'
}
