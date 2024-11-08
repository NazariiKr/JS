// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = []
let k = 0
for (let i = 2; i < 101; i++) {
    if (i % 2 === 0) {
        arr[k] = i
        k++
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 1; i < 101; i++) {
    if (i % 2 > 0) {
        arr[k] = i
        k++
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[k] = Math.floor(Math.random() * (100 - 1)) + 1;
    k++
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[k] = Math.floor(Math.random() * (732 - 8)) + 8;
    k++
}
console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr.length; i = i + 3) {
    const arrElement = arr[i];
    console.log(arrElement)
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr.length; i = i + 3) {
    const arrElement = arr[i];
    if (arrElement % 2 === 0) {
        console.log(arrElement)
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
let t = 0;
for (let i = 0; i < arr.length; i = i + 3) {
    const arrElement = arr[i];
    if (arrElement % 2 === 0) {
        newArr[t] = arrElement
        t++
    }
}
console.log(newArr)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    if (arrElement % 2 === 0 && i >= 1) {
        console.log(arr[i - 1])
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
let sum = 0
let m = 0
let arrSum = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arrSum.length; i++) {
    let arrSumElement = arrSum[i];
    sum = sum + arrSumElement
    m++
}
console.log(sum / m)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRandom = [35, 48, 500, 456, 233];
let newArrRandom = [];
for (let i = 0; i < arrRandom.length; i++) {
    const arrRandomElement = arrRandom[i];
    newArrRandom[i] = arrRandomElement * 5
}
console.log(newArrRandom)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
// - додати його в інший масив.
let arr2 = ['okten', true, 234, 'nazir', 345, 0, false, 'number'];
let newArr2 = [];
let p = 0;
for (let arr2Element of arr2) {
    if (typeof arr2Element === 'number') {
        newArr2[p] = arr2Element
        p++
    }
}
console.log(newArr2)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let arrLength=usersWithId.length;
for (let i = 0; i < citiesWithId.length; i++) {
    const citiesWithIdElement = citiesWithId[i];
    usersWithId[citiesWithIdElement.user_id-1]["address"] = citiesWithIdElement;
}
console.log(usersWithId)


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr3=[]
for (let i = 0; i <10; i++) {
    arr3[i]= Math.floor(Math.random() * 100);
}
console.log(arr3)
for (let arr3Element of arr3) {
    if (arr3Element%2===0){
        console.log(arr3Element)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let copyArr3=[];
for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    copyArr3[i]=arr3Element;
}
console.log(copyArr3)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arrString=[ 'a', 'b', 'c'];
let forArrString='';
let whileArrString='';
let forOfArrString='';
for (let i = 0; i < arrString.length; i++) {
    const arrStringElement = arrString[i];
    forArrString=forArrString+arrStringElement
}
console.log(forArrString)
let r=0;
while (r<arrString.length){
    whileArrString=whileArrString+arrString[r]
    r++
}
console.log(whileArrString)

for (let string of arrString) {
    forOfArrString=forOfArrString+string
}
console.log(forOfArrString);