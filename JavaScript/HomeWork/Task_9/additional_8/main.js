//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const allClass = document.getElementsByClassName('rules');
for (const allClass1 of allClass) {
    console.log(allClass1.classList)
}
