// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr=[1,12,'red',true,234,-456,false,'green',45,7]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])





// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let haryPotter={
    title: 'Harry Potter',
    pageCount : 328,
    genre: 'fantasy'
};
console.log(haryPotter);

let robinsonCrusoe={
    title: 'Robinson Crusoe',
    pageCount : 220,
    genre: 'adventures'
};
console.log(robinsonCrusoe);

let captainFifteen={
    title: 'Captain at Fifteen',
    pageCount : 321,
    genre: 'adventures'
}
console.log(captainFifteen)




//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let captainFifteenAuthors={
    title: 'Captain at Fifteen',
    pageCount : 321,
    genre: 'adventures',
    authors: ['Jules Verne', 21]
}
console.log(captainFifteenAuthors)

let robinsonCrusoeAuthors={
    title: 'Robinson Crusoe',
    pageCount : 220,
    genre: 'adventures',
    authors: ['Daniel Defoe', 45]
}
console.log(robinsonCrusoeAuthors)

let haryPotterAuthors={
    title: 'Harry Potter',
    pageCount : 328,
    genre: 'fantasy',
    authors: ['J. K. Rowling', 50]
};
console.log(haryPotterAuthors);


//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users=[
    {
        name: 'oleh',
        username: 'oleh123',
        password:'123ASD'
    },
    {
        name: 'andrii',
        username: 'andrii123',
        password:'1234ASD'
    },
    {
        name: 'victor',
        username: 'victor123',
        password:'1235ASD'
    },
    {
        name: 'vania',
        username: 'vania123',
        password:'1236ASD'
    },
    {
        name: 'stepan',
        username: 'stepan123',
        password:'1237ASD'
    },
    {
        name: 'anton',
        username: 'anton123',
        password:'1238ASD'
    },
    {
        name: 'vika',
        username: 'vika123',
        password:'12345ASD'
    },
    {
        name: 'olena',
        username: 'olena123',
        password:'123345ASD'
    },
    {
        name: 'katia',
        username: 'katia123',
        password:'123dfgdfASD'
    },
    {
        name: 'natalia',
        username: 'natalia123',
        password:'123dfgdfASD'
    },

];
    console.log(users);





// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням вичключаємо одразу
let temp=[
    {
        day: 'monday',
        morning: 10,
        middleDay: 27,
        evening:15
    },
    {
        day: 'tuesday',
        morning: 10,
        middleDay: 27,
        evening:15
    },
    {
        day: 'wednesday',
        morning: 11,
        middleDay: 29,
        evening:17
    },
    {
        day: 'thursday',
        morning: 9,
        middleDay: 30,
        evening:18
    },
    {
        day: 'friday',
        morning: 8,
        middleDay: 24,
        evening:13
    },
    {
        day: 'saturday',
        morning: 14,
        middleDay: 34,
        evening:23
    },
    {
        day: 'sunday',
        morning: 10,
        middleDay: 26,
        evening:13
    },
];
console.log(temp);



// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a=-1;
if (a===0){
    console.log('вірно')
}else {
    console.log('Невірно')
}




// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=48;
if (time<=14 && time >=0){
    console.log('перша чверть')
}else if (time<=29 && time>14){
    console.log('друга чверть')
}else if (time<=44 && time>29) {
    console.log('третя чверть')
}else if (time<=59 && time>44) {
    console.log('четверта чверть')
}





// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day=11;
if (day>=1 && day<=10){
    console.log('У першу')
}else if (day>10 && day<=20){
    console.log('У другу')
}else if (day>20 && day<=31){
    console.log('У третю')
}else{
    console.log('??????')
}





// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberDay=5;
switch (numberDay) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;

}




//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let b=33;
let c=33
if (b>c){
    console.log(b)
}else if (c>b){
    console.log(c)
}else if (c===b){
    console.log('числа рівні')
}



//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x=!!33;
if (x===false){
    x="default";
    console.log(x)
}else {
    console.log('x=true')
}




//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за
//     5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i =0; i<coursesAndDurationArray.length; i++){
    if (coursesAndDurationArray[i].monthDuration>5){
        console.log(`${coursesAndDurationArray[i].title} супер`)
    }
}