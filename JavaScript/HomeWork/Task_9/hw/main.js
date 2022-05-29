// Все робити за допомоги js.

// - створити блок,
/*
let block = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'darkblue';
block.style.width = '500px';
block.style.height = '500px';
block.innerText = 'Okten School';
block.style.display = 'flex';
block.style.justifyContent = 'center';
block.style.alignItems = 'center';
block.style.fontSize = '85px';
block.style.fontWeight = 'bold';
block.style.color = 'white';
block.style.borderRadius = '50%';
block.style.border = 'solid 10px black';

// - додати цей блок в body.
document.body.appendChild(block);
*/

// - клонувати його повністю, та додати клон в body.

/*let blockCopy = block;

// blockCopy.style.marginLeft = '500px'
// blockCopy.style.background = 'yellow';
// blockCopy.style.border = 'solid 10px darkblue';
// blockCopy.style.color = 'blue';

document.body.appendChild(blockCopy);*/



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


/*const array = ['Main','Products','About us','Contacts'];

for (const string of array) {
    let element_Ul = document.querySelector('.menu');
    let creatLi = document.createElement('li');
    creatLi.innerText = string;

    element_Ul.style.background = 'red';
    creatLi.style.fontSize = '30px';
    document.body.style.background = 'black';

    element_Ul.append(creatLi)

}*/
// - Є масив

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divTitle = document.createElement('div');
    let divMonth = document.createElement('div');

    divTitle.innerText = coursesAndDurationArrayElement.title;
    divMonth.innerText = coursesAndDurationArrayElement.monthDuration;

    document.body.append(divMonth, divTitle);
}*/

// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let divElem = document.createElement('div');
    let h1Elem = document.createElement('h1');
    let pElem = document.createElement('p');

    divElem.classList.add('item');
    h1Elem.classList.add('heading');
    pElem.classList.add('description');

    h1Elem.innerText = coursesAndDurationArrayElement.title;
    pElem.innerText = coursesAndDurationArrayElement.monthDuration;

    divElem.append(h1Elem, pElem);

    document.body.append(divElem);
}
