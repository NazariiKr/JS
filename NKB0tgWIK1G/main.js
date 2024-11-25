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