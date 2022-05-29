// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

const name = document.forms.userForm.name;
const age = document.forms.userForm.age;
const btn = document.getElementById('btn');
const key = 'key';

const save = (userName, userAge) => {
  let user  = {
      name: userName,
      age: userAge
  };
  localStorage.setItem(key, JSON.stringify(user))
};

btn.onclick = () => {
    save(name.value, age.value)
}



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const model = document.forms.userCar.model;
const type = document.forms.userCar.type;
const volume = document.forms.userCar.volume;
const btn_car = document.getElementById('btn_car');
const key1 = 'keyCar';

const saveCar = (carModel, carType, carVolume) => {
    let carArr = JSON.parse(localStorage.getItem(key1)) || [];
    carArr.push({carModel, carType, carVolume})
    localStorage.setItem(key1, JSON.stringify(carArr))
};

btn_car.onclick = () => {
    saveCar(model.value, type.value, volume.value)
}
