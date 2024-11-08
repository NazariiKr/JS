// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
let arrNumber=[21,45,67,34,40];


// - з 5 стічкових значень
let arrString=['okten','name','oleh','bulka','100500'];
// - з 5 значень стрічкового, числового та булевого типу
let arr=['okten',7,true,25,'name'];
// - та вивести його в консоль
console.log(arrNumber);
console.log(arrString);
console.log(arr);


// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let arrEmpty=[];
arrEmpty[arrEmpty.length]=12;
arrEmpty[arrEmpty.length]='okten';
arrEmpty[arrEmpty.length]=true;
arrEmpty[arrEmpty.length]=145;
arrEmpty[arrEmpty.length]=0;
console.log(arrEmpty);

//
//
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrN=[2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while
let i=0
while (i<arrN.length){
    let number=arrN[i]
    console.log(number)
    i++
}
//     2. перебрати його циклом for
for (let j = 0; j < arrN.length; j++) {
    const arrNElement = arrN[j];
    console.log(arrNElement)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let q=0
while (q<arrN.length){
    let number=arrN[q]
    if (q%2>0){
        console.log(number)
    }
    q++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arrN.length; j++) {
    const arrNElement = arrN[j];
    if (j%2>0){
        console.log(arrNElement)
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let e=0
while (e<arrN.length){
    let number=arrN[e]
    if (number%2===0){
        console.log(number)
    }
    e++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arrN.length; j++) {
    const arrNElement = arrN[j];
    if (arrNElement%2===0){
        console.log(arrNElement)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < arrN.length; j++) {
    const arrNElement = arrN[j];
    if (arrNElement%3===0){
        arrN[j]='okten'
    }
}
console.log(arrN)
// 8. вивести масив в зворотньому порядку.
for (let j = arrN.length-1; j >=0; j--) {
    const arrNElement = arrN[j];
    console.log(arrNElement)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     #GamKju89ob
let arr1=[1,2,3,4,5,6,7,8,9,10]
for (let number of arr1) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//     #Bm76xmg
let arr2=['a','b','c','d','w','a','t','u','p','e']
for (let string of arr2) {
    console.log(string)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3=['a',2,6,true,4,'y','f',false,34,56]
for (let arr3Element of arr3) {
    console.log(arr3Element)
}
//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 for (let arr3Element of arr3) {
     if (typeof(arr3Element)==='boolean'){
         console.log(arr3Element)
     }
}

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let arr3Element of arr3) {
    if (typeof(arr3Element)==='number'){
        console.log(arr3Element)
    }
}

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let arr3Element of arr3) {
    if (typeof(arr3Element)==='string'){
        console.log(arr3Element)
    }
}


// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arrEmpty2=[];
arrEmpty2[arrEmpty2.length]=1;
arrEmpty2[arrEmpty2.length]=2;
arrEmpty2[arrEmpty2.length]=3;
arrEmpty2[arrEmpty2.length]=4;
arrEmpty2[arrEmpty2.length]=5;
arrEmpty2[arrEmpty2.length]=6;
arrEmpty2[arrEmpty2.length]=7;
arrEmpty2[arrEmpty2.length]=8;
arrEmpty2[arrEmpty2.length]=9;
arrEmpty2[arrEmpty2.length]=10;
for (let arrEmpty2Element of arrEmpty2) {
    console.log(arrEmpty2Element)
}


//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
   console.log(j+1)
    document.write(`<div>${j+1}</div> `)
}

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j+1)
    document.write(`<div>${j+1}</div>`)
}

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let l=0
for (let j = 0; j < 100; j=j+2) {
    console.log(l+1)
    document.write(`<div>${l+1}</div>`)
    l++
}
// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if ((j+1)%2===0){
        console.log(j+1)
        document.write(`<div>${j+1}</div>`)
    }
}
// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if ((j+1)%2>0){
        console.log(j+1)
        document.write(`<div>${j+1}</div>`)
    }
}


//
//
// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books=[
    {
        name:'spartak blood and sand',
        numberOfPages:345,
        authors:['vasia','stepan'],
        genre:['fantasy','historical']
    },
    {
        name:'Hary Poter',
        numberOfPages:500,
        authors:['vasia'],
        genre:['fantasy','historical','adventures']
    },
    {
        name:'Batman',
        numberOfPages:200,
        authors:['vasia','stepan'],
        genre:['fantasy']
    },
    {
        name:'spiderman',
        numberOfPages:300,
        authors:['stepan'],
        genre:['fantasy','historical']
    },
]

// - знайти наібльшу книжку.
let lengthBook=0
let nameBook1
for (let book of books) {
    if (book.numberOfPages>lengthBook){
        lengthBook=book.numberOfPages
        nameBook1=book
    }
}
console.log(nameBook1)
// - знайти книжку/ки з найбільшою кількістю жанрів
let nameBook2
let mostGenre=0
for (let book of books) {
    if (book.genre.length>mostGenre){
        mostGenre=book.genre.length
        nameBook2=book
    }
}
console.log(nameBook2)
// - знайти книжку/ки з найдовшою назвою
let nameBook3
let lengthName=0
for (let book of books) {
    if (book.name.length>lengthName){
        lengthName=book.name.length
        nameBook3=book
    }
}
console.log(nameBook3)
// - знайти книжку/ки які писали 2 автори
let nameBook4=[]
for (let book of books) {
    if (book.authors.length===2){
        nameBook4[nameBook4.length]=book
    }
}
console.log(nameBook4)

// - знайти книжку/ки які писав 1 автор
let nameBook5=[]
for (let book of books) {
    if (book.authors.length===1){
        nameBook5[nameBook5.length]=book
    }
}
console.log(nameBook5)