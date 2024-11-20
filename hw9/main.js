// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let bloc = document.createElement('div')
bloc.classList.add('wrap')
bloc.classList.add('collapse')
bloc.classList.add('alpha')
bloc.classList.add('beta')
bloc.style.background = 'red'
bloc.style.color = 'black'
bloc.style.fontSize = '24px'

const clon = bloc.cloneNode(true)
document.body.append(bloc, clon)

//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main', 'Products', 'About us', 'Contacts']
let ul = document.createElement('ul')
document.body.appendChild(ul)
for (const string of arr) {
    let li = document.createElement('li')
    li.innerText = string
    ul.appendChild(li)
}


//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
for (const element of coursesAndDurationArray) {
  let divElement= document.createElement('div')
   divElement.innerText=`${element.title} ${element.monthDuration}`
   document.body.appendChild(divElement)
}
//
// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const element of coursesAndDurationArray) {
    let divItem= document.createElement('div')
    divItem.classList.add('item')
    document.body.appendChild(divItem)
    let h1= document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText=element.title
    let p= document.createElement('p')
    p.classList.add('description')
    p.innerText=element.monthDuration
    divItem.append(h1,p)

}