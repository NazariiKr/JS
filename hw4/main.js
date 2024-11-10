// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a,b) {
    return a*b
}
let resultRectangleArea=rectangleArea(20,30);
console.log(resultRectangleArea)




// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(radius){
    return Math.PI*radius*radius
}
let resultCircleArea=circleArea(5)
console.log(resultCircleArea)




// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(radius,height) {
    return 2*Math.PI*radius*height
}
let resultCylinderArea=cylinderArea(10,20);
console.log(resultCylinderArea)



// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function print(array){
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}




// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function creatText(text) {
    document.write(`<p>${text}</p>`)
}
creatText('lorem')



// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати
// через аргумент всім однаковий
function creatThreeLi(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
creatThreeLi('lorem ipsum')


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write
function creatLi(text,j) {
    document.write(`<ul>`)
    for (let i = 0; i <j; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
creatLi('lorem ipsum the',5)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
function arrayInLi(array) {
    document.write(`<ul>`)
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
let arr=['okten',7,true,25,'name'];
arrayInLi(arr);




// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function foobar(users) {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([
    {id:1,name:'vasia',age:23},
    {id:2,name:'vasia',age:23},
    {id:3,name:'vasia',age:23},
    {id:4,name:'vasia',age:23},
    {id:5,name:'vasia',age:23}
])




//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minNumber(array){
let min=array[0]
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (number<min){
            min=number
        }
    }
    return min
}
let arrN=[2,17,13,6,22,31,45,66,100,-18]
console.log(minNumber(arrN))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sumNumber(arr){
    let sum=0;
    for (let arrElement of arr) {
        sum=sum+arrElement
    }
    return sum
}
console.log(sumNumber(arrN))

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
let a=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=a
    return arr
}
console.log(swap(arrN,2,7))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeSum=0
    for (let currencyValue of currencyValues) {
        if (exchangeCurrency===currencyValue.currency){
            exchangeSum=sumUAH/currencyValue.value
        }
    }
    return exchangeSum
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'))