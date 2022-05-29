// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

/*
document.getElementById('text').onclick = function () {
    document.getElementById('text').style.display = 'none';
}
*/


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

/*    document.getElementById('btn').onclick = function () {
        let age = document.getElementById('age').value;
        if (!age) {
            document.body.innerText = 'Вы не ввели свой возраст';
        } else if (+age < 18) {
            document.body.innerText = 'Извините но вам еще рановато';
        } else {
            document.body.innerText = 'Добро пожаловать на сайт';
        }
    }*/




// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

/*let div_1 = document.createElement('div');
div_1.innerText = 'Form';

let div_2 = document.createElement('div');
div_2.innerText = 'Form';

document.body.append(div_1 ,div_2);

let form_1 = document.createElement('form');
form_1.setAttribute('name', 'form_1');

let form_2 = document.createElement('form');
form_2.setAttribute('name', 'form_2');
div_2.append(form_1 ,form_2);

let input_1 = document.createElement('input');
input_1.setAttribute('name', 'input_1');

let input_2 = document.createElement('input');
input_2.setAttribute('name', 'input_2');

let input_3 = document.createElement('input');
input_3.setAttribute('name', 'input_3');

let input_4 = document.createElement('input');
input_4.setAttribute('name', 'input_4');

let btn = document.createElement('button');
btn.innerText = 'КНОПКА';

document.body.append(btn);

form_1.append(input_1, input_2);
form_2.append(input_3, input_4);

btn.addEventListener('click', function () {
    console.log(document.forms.form_1.input_1.value);
    console.log(document.forms.form_1.input_2.value);
    console.log(document.forms.form_2.input_3.value);
    console.log(document.forms.form_2.input_4.value);
})*/

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

/*
const input_1 = document.createElement('input');
const input_2 = document.createElement('input');
const input_3 = document.createElement('input');
const btn = document.createElement('button');

btn.innerText = 'cформувати таблицю';
document.body.append(input_1, input_2, input_3, btn);

btn.addEventListener('click', function () {
    let val_1 = input_1.value;
    let val_2 = input_2.value;
    let text = input_3.value;

    function tableGen (val_1, val_2, inner) {
        const table = document.createElement('table');
        table.style.border = 'solid 3px black';
        const div_table = document.createElement('div');

        div_table.appendChild(table);
        document.body.appendChild(table)

        for (let i = 0; i < val_1; i++) {
            let val_1 = document.createElement('tr')
            val_1.style.border = 'solid 3px red';
            for (let j = 0; j < val_2; j++) {
                let val_2 = document.createElement('td');
                val_2.style.border = 'solid 3px green';
                val_2.innerText = `${inner}`;
                table.appendChild(val_1);
                val_1.appendChild(val_2);


            }

        }
    }
    tableGen(val_1, val_2, text)
})
*/
