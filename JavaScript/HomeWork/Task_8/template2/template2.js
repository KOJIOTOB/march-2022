// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const mainHeader = document.getElementById('main_header');
mainHeader.classList.add('target');
console.log(mainHeader);

// b) робить шириниу елементу ul 400px

const allUl = document.getElementsByTagName('ul');
for (const allUlElement of allUl) {
    allUlElement.style.width = '400px';
    allUlElement.style.border = 'solid 3px red'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const allClass = document.getElementsByClassName('linkList');
for (const allClass1 of allClass) {
    allClass1.style.width = '50%';
    allClass1.style.border = 'solid 3px blue'
}

// d) отримує текст який зберігається в елементі з класом listElement2

const textElement = document.getElementsByClassName('listElement2');
for (const textElementElement of textElement) {
    console.log(textElementElement)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

const elementLi = document.getElementsByTagName('li');
for (const elementLiElement of elementLi) {
    elementLiElement.style.background = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const element_A = document.getElementsByTagName('a');
for (const elementAElement of element_A) {
    elementAElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

const elem_A = document.getElementsByTagName('a');
for (const elemAElement of elem_A) {
    if(elemAElement.innerText === 'link3') {
        elemAElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const allElement_A = document.getElementsByTagName('a');
for (const allElementAElement of allElement_A) {
    allElementAElement.classList.add(`element_${allElementAElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

/*const subHeader = document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.background = prompt('колір фону: BLACK');
    subHeaderElement.style.color = prompt('колір тексту: CORAL')
}*/

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/*
const element_subHeader = document.getElementsByClassName('sub-header');
for (const elementSubHeaderElement of element_subHeader) {
    if (elementSubHeaderElement.innerText === 'content 2 segment') {
        elementSubHeaderElement.style.color = prompt('Тут змінюй колір тексту ')
    }
}
*/

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

/*const elementContent = document.getElementsByClassName('content_1');
for (const elementContentElement of elementContent) {
    elementContentElement.innerText = prompt('Довільний Текст')
}*/

// l) отримати елементи p та змінити їм padding на 20px

const element_P = document.getElementsByTagName('p');
for (const elementPElement of element_P) {
    elementPElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const getElement = document.getElementsByClassName('text2');
for (const elementElement of getElement) {
    elementElement.innerText = 'mon-year. Пример sep-2021';
}