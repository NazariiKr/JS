// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
let btn = document.getElementsByTagName('button')[0];
let divText = document.getElementById('text');
btn.onclick = function () {
    divText.style.height = '0'
}
//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form1 = document.getElementById('form1');
let pForm = document.getElementById('pform1');
form1.onsubmit = function (ev) {
    ev.preventDefault()
    if (this.userAge.value >= 18) {
        pForm.innerText = 'все добре'
    } else {
        pForm.innerText = 'ви занадто юні'
    }
}


//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form2 = document.getElementById('form2');
;
form2.onsubmit = function (ev) {
    ev.preventDefault()
    document.getElementById('divForm2').innerText = `{name:${this.userName.value},surname:${this.userSurName.value},age:${this.userAge.value}}`
}


//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
let number = +localStorage.getItem('number')
number += 1
localStorage.setItem('number', number)
document.getElementById('numberClick').innerText = `${localStorage.getItem("number")}`


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а малювати в DOM

// LhSfdhM3.html


//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
let divWeight = document.getElementById('weightFut');
let inputWeight = document.getElementById('input');
console.log(inputWeight.value)
inputWeight.oninput = function () {
    divWeight.innerText = `вага у футах - ${inputWeight.value * 2.22}`
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    let array = JSON.parse(localStorage.getItem(arrayName));
    if (typeof objToAdd === 'object') {
        array.push(objToAdd)
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}

// addToLocalStorage('load',{})

//
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let table = document.getElementById('table');
let form3 = document.getElementById('form3');
form3.onsubmit = function (ev) {
    ev.preventDefault()
    let valueLines = +this.lines.value
    let valueCells = +this.cells.value
    let valueData = this.data.value
    for (let i = 0; i < valueLines; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        for (let j = 0; j < valueCells; j++) {
            let td = document.createElement('td');
            td.innerText = valueData
            tr.appendChild(td)

        }

    }
}

//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let divSuma = document.getElementById('divSuma');

let load = JSON.parse(localStorage.getItem('load')) || []
let date = new Date() - new Date(0)
load.push(date)
localStorage.setItem('load', JSON.stringify(load))
let array = JSON.parse(localStorage.getItem('load'));
let sum = (array[array.length - 1] - array[array.length - 2]) / 1000
let cost = +localStorage.getItem('cost')
if (sum > 10) {
    cost += 10
    localStorage.setItem('cost', cost)
    divSuma.innerText = `${+localStorage.getItem("cost") + 100}`
} else {
    divSuma.innerText = `${+localStorage.getItem("cost") + 100}`
}


//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arrayEnter = document.getElementById('arrayEnter');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let arr = []
for (let i = 0; i < 100; i++) {
    arr.push({id: i + 1, name: 'vasia'})
}

for (let i = 0; i < 10; i++) {
    const arrElement = arr[i];
    let item = document.createElement('div')
    item.classList.add(`item`)
    item.innerText = `id-${arrElement.id} name-${arrElement.name}`;
    arrayEnter.appendChild(item)
}
localStorage.setItem('key', 10)
let a, b
next.onclick = function () {
    let j = +localStorage.getItem('key')
    if (j >= 0 && j < 10) {
        a = 0
        b = 10
        if (j <= 90) localStorage.setItem('key', j + 10)


        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }

    if (j >= 10 && j < 20) {
        a = 10
        b = 20
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 20 && j < 30) {
        a = 20
        b = 30
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 30 && j < 40) {
        a = 30
        b = 40
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 40 && j < 50) {
        a = 40
        b = 50
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 50 && j < 60) {
        a = 50
        b = 60
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 60 && j < 70) {
        a = 60
        b = 70
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 70 && j < 80) {
        a = 70
        b = 80
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 80 && j < 90) {
        a = 80
        b = 90
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j >= 90 && j < 100) {
        a = 90
        b = 100
        if (j <= 90) localStorage.setItem('key', j + 10)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
}
prev.onclick = function () {

    let j = +localStorage.getItem('key') - 10
    if (j > 0 && j <= 10) {
        a = 0
        b = 10
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }

    if (j > 10 && j <= 20) {
        a = 10
        b = 20
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 20 && j <= 30) {
        a = 20
        b = 30
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 30 && j <= 40) {
        a = 30
        b = 40
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 40 && j <= 50) {
        a = 40
        b = 50
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 50 && j <= 60) {
        a = 50
        b = 60
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 60 && j <= 70) {
        a = 60
        b = 70
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 70 && j <= 80) {
        a = 70
        b = 80
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 80 && j <= 90) {
        a = 80
        b = 90
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
    if (j > 90 && j <= 100) {
        a = 90
        b = 100
        if (j >= 10) localStorage.setItem('key', j)
        for (let i = a; i < b; i++) {
            const arrElement = arr[i];
            let item = document.getElementsByClassName('item')[i - a];
            item.innerText = `id-${arrElement.id} name-${arrElement.name}`

        }
    }
}