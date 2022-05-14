// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

/*class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let userData = [
    new User(21,'Igor', 'Pupkin', 'qwerty@gmail.ua', '0951234567'),
    new User(32,'Ivan', 'Baton', 'qwerty@gmail.ua', '0952322005'),
    new User(53,'Andrey', 'Mozer', 'qwerty@gmail.ua', '0957320232'),
    new User(47,'Fedor', 'Muller', 'qwerty@gmail.ua', '0957232345'),
    new User(58,'Viktor', 'Fedorov', 'qwerty@gmail.ua', '0957567890'),
    new User(69,'Vova', 'Sosna', 'qwerty@gmail.ua', '0950000000'),
    new User(77,'Sergey', 'Duda', 'qwerty@gmail.ua', '0957756545'),
    new User(82,'Sacha', 'Oleynik', 'qwerty@gmail.ua', '0954667667'),
    new User(94,'Anton', 'Dron', 'qwerty@gmail.ua', '0953453535'),
    new User(10,'Taras', 'Kot', 'qwerty@gmail.ua', '0954545224'),
];

console.log(userData);*/

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(userData.filter(item => item.id % 2 === 0 ));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

/*console.log(userData.sort((a, b) => a.id - b.id))*/

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

/*
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClient = [
    new Client(3,'iPhone','13 Pro Max', 'qwerty@gmail.ua', '+380912345678', [ 'case','glass', 'power-bank']),
    new Client(1,'Samsung','S22 Pro', 'qwerty@gmail.ua', '+380912345678', ['return', 'case','glass', 'laden', 'power-bank','cabell']),
    new Client(2,'Sony','Xperia', 'qwerty@gmail.ua', '+380912345678', ['return', 'case','glass',  'power-bank']),
    new Client(6,'Motorola','Raze 2', 'qwerty@gmail.ua', '+380912345678', ['return', 'case','glass', 'laden', 'power-bank']),
    new Client(5,'Huawei','P40i', 'qwerty@gmail.ua', '+380912345678', ['return', 'case', 'power-bank']),
    new Client(4,'Xiaomi', 'qwerty@gmail.ua', '+380912345678', '+380912345678',['return', 'case','glass', 'laden']),
    new Client(10,'Siemens','C65 pro', 'qwerty@gmail.ua', '+380912345678', ['return', 'case', 'power-bank']),
    new Client(9,'Nokia','N93', 'qwerty@gmail.ua', '+380912345678', [ 'case','glass', 'laden', 'power-bank']),
    new Client(7,'LG','Maf 007', 'qwerty@gmail.ua', '+380912345678', ['return', 'glass', 'laden',]),
    new Client(8,'HTC','One M7', 'qwerty@gmail.ua', '+380912345678', [ 'case','glass', 'laden', 'power-bank'])
];
*/

//console.log(arrClient.length)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*console.log(arrClient.sort((a, b) => a.order.length - b.order.length))*/


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

/*
class Car {
    constructor(model, producer, releaseTime, maxSpeed,volume ) {
        this.model = model;
        this.producer = producer;
        this.releaseTime = releaseTime;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = function () {

        }
    }
    drive () {
        return `їдемо зі швидкістю ` +  this.maxSpeed  + `/км на годину`;
        // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    }

    info () {
        return `
    Модель: ${this.model},
    Производитель: ${this.producer},
    Год выпуска: ${this.releaseTime},
    Максимальная скорость: ${this.maxSpeed},
    Объем: ${this.volume}`
        // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    }

    changeYear (newValue) {
this.releaseTime = this.releaseTime = newValue;

        // -- changeYear (newValue) - змінює рік випуску на значення newValue
    }

    addDriver = function (driver) {
        this.driver = driver;
    }

}


let arrayCar = new Car('540i', 'BMW', 2022, 320, 4400);

console.log((arrayCar.drive()))
console.log(arrayCar.info())
arrayCar.increaseMaxSpeed(50)
console.log(arrayCar.drive());
arrayCar.changeYear(2023)
console.log(arrayCar.releaseTime)
console.log(arrayCar.info());
console.log(arrayCar.addDriver('Vova'))
console.log(arrayCar)
*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*function Cars (model, year, maxSpeed, volume) {
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = function () {
    }
    this.drive = function (msg) {
        return `${msg} їдемо зі швидкістю ${this.maxSpeed}км на годину`
    };
    this.info = function () {
       const information =  {
           model: this.model,
           year: this.year,
           maxSpeed: this.maxSpeed,
           volume: this.volume,
       }
        for (const key in information) {
            console.log(`${key}: ${information[key]}` )
        }
    }
    this.newMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
let addCar = new Cars('BMW',2015, 300,4.4)
console.log(addCar.drive('Ми'));
addCar.info();
addCar.newMaxSpeed(20);
addCar.changeYear(2022);
console.log(addCar.drive('Ми'));
addCar.info();
console.log(addCar.addDriver('DIma'))
console.log(addCar)*/


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class  Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrCinderella = [
    new Cinderella('Masha', 29, 35),
    new Cinderella('Maryna', 29, 40),
    new Cinderella('Alona', 29, 37),
    new Cinderella('Fatima', 29, 39),
    new Cinderella('Valeriya', 29, 41),
    new Cinderella('Katya', 29, 41),
    new Cinderella('Hizira', 29, 43),
    new Cinderella('Olay', 29, 38),
    new Cinderella('Putana', 29, 45),
    new Cinderella('Masha', 29, 40),
];

console.log(arrCinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let thisPrince = new Prince('Carl', 30, 45);
console.log(thisPrince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const findSlipper = (arrCinderella, thisPrince) => {
    for (const arrCinderellaElement of arrCinderella) {
        if (arrCinderellaElement.size === thisPrince.slipper) {
            return `${thisPrince.name} привiт, це твоя попелюшка ${arrCinderellaElement.name} iз ${arrCinderellaElement.size} розмiром туфлi`;
        }
    }
}
console.log(findSlipper(arrCinderella, thisPrince));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const brideSearch = arrCinderella.find((item) => item.size === thisPrince.slipper);
console.log(brideSearch);