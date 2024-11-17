// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(22, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(3, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(45, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(40, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(5, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(67, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(71, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(82, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(90, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
    new User(10, 'vasia', 'pupkin', 'puplin@gmail.com', '+3806565565'),
]
console.log(users)

//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(value => value.id % 2 === 0);
console.log(filterUsers)

//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => a.id - b.id);
console.log(sortUsers)

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client {

    constructor(id, name, surname, email, phone, ...product) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = product;
    }
}

let clients = [
    new Client(1, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'car', 'pen'),
    new Client(2, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone'),
    new Client(3, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'pen'),
    new Client(4, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv'),
    new Client(5, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'car', 'pen', 'banan'),
    new Client(6, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'pen'),
    new Client(7, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'book', 'magazine'),
    new Client(8, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone', 'book', 'magazine', 'car', 'pen'),
    new Client(9, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone'),
    new Client(10, 'petro', 'kokos', 'dfd2@Gfdgdf.vfd', '=+343243', 'tv', 'phone'),
]
console.log(clients)
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = function info() {
        for (let key in this) {
            console.log(key, this[key])
        }
    }

    this.increaseMaxSpeed = function increaseMaxSpeed(addSpeed) {
        if (addSpeed > 0) this.maxSpeed = this.maxSpeed + addSpeed
    }

    this.changeYear = function changeYear(year) {
        if (year > 2000) this.year = year
    }
    this.addDriver = function addDriver(driver) {
        this.driver = driver
    }

}

let car = new Car('A3', 'Audi', 2010, 140, 2.2)
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(100)
car.changeYear(2018)
car.addDriver({name: 'Oleg', age: '23'})
console.log(car)
//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {

    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info = function info() {
        for (let key in this) {
            console.log(key, this[key])
        }
    }
    increaseMaxSpeed = function increaseMaxSpeed(addSpeed) {
        if (addSpeed > 0) this.maxSpeed = this.maxSpeed + addSpeed
    }
    changeYear = function changeYear(year) {
        if (year > 2000) this.year = year
    }
    addDriver = function addDriver(driver) {
        this.driver = driver
    }
}

let car1 = new CarClass('m5', 'bmw', 2012, 200, 3.0)
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(100)
car1.changeYear(2018)
car1.addDriver({name: 'Oleg', age: '23'})
console.log(car1)


//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Petro', 35, 36)
console.log(prince)
let cinderella = [
    new Cinderella('olia', 23, 35),
    new Cinderella('victoria', 23, 38),
    new Cinderella('olia', 23, 39),
    new Cinderella('natalia', 23, 36),
    new Cinderella('olia', 23, 33),
    new Cinderella('olia', 23, 38),
    new Cinderella('olia', 23, 37),
    new Cinderella('olia', 23, 39),
    new Cinderella('olia', 23, 41),
    new Cinderella('olia', 23, 35)
]
console.log(cinderella)

for (let girl of cinderella) {
    if (girl.footSize === prince.shoeSize) console.log(girl)
}
let findCinderella = cinderella.find(girl => girl.footSize === prince.shoeSize)
console.log(findCinderella)
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    for (let item of this) {
        callback(item)
    }
}
let testArray = [123, 22, 44, 55]
testArray.myForEach(value => console.log(value))
Array.prototype.myFilter = function (callback) {
    let arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }

    }
    return arr
}
let arrMyFilter = testArray.myFilter(value => value > 30)
console.log(arrMyFilter)


let foobar = [
    {name: 'vasia', age: 23},
    {name: 'vasia', age: 23},
    {name: 'vasia', age: 23},
    {name: 'vasia', age: 23},
    {name: 'vasia', age: 23}
]

Array.prototype.myMap = function (callback) {

    let arr = []
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        arr.push(callback(item, i))

    }
    return arr
}
let testMyMap = foobar.myMap((value, index) => {
    let newUser = {
        id: index + 1,
        name:value.name,
        age: value.age,
        userName:value.name+(index+1)


    }
    return newUser
})
console.log(testMyMap)

