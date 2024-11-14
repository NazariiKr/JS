// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloString='hello world';
let loremString='lorem ipsum';
let jsString='javascript is cool';

console.log(helloString.length);
console.log(loremString.length);
console.log(jsString.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloLoverString='hello world';
let loremLoverString='lorem ipsum';
let jsLoverString='javascript is cool';
console.log(helloLoverString.toUpperCase());
console.log(loremLoverString.toUpperCase());
console.log(jsLoverString.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let helloUpperString='hello world';
let loremUpperString='lorem ipsum';
let jsUpperString='javascript is cool';
console.log(helloUpperString.toLowerCase());
console.log(loremUpperString.toLowerCase());
console.log(jsUpperString.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let s=str.trim();
console.log(str.length);
console.log(s.length);


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let arr=str1.split(' ');
console.log(arr)


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let number=[10,8,-7,55,987,-1011,0,1050,0];
let maper= number.map(value => value+'')
console.log(maper)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(array,direction){
    if (direction==='ascending')return  array.sort((a, b) =>a-b )

    if (direction==='descending') return  array.sort((a,b)=>b-a)
}

console.log(sortNums(nums, 'descending'));


// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];




let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ]
// -- відсортувати його за спаданням за monthDuration
let sortCoursesAndDurationArray=coursesAndDurationArray.sort((a, b) =>b.monthDuration-a.monthDuration)
console.log(sortCoursesAndDurationArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCoursesAndDurationArray=coursesAndDurationArray.filter(value => value.monthDuration>5)
console.log(filterCoursesAndDurationArray)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCoursesAndDurationArray=coursesAndDurationArray.map((value, index) => {
    return {id:index+1,title:value.title,monthDuration:value.monthDuration}
})
console.log(mapCoursesAndDurationArray)
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

let cards=[]
let suits=['spade', 'diamond','heart', 'clubs'];
let values=['6','7','8','9','10','ace','jack','queen','king']
for (let suit of suits) {
    for (let value of values) {
        if (suit==='diamond'|| suit==='heart'){
            cards.push({cardSuit:suit, value:value,color:'red'})
        }else {
            cards.push({cardSuit:suit, value:value,color:'black'})
        }

    }
}
console.log(cards)



// - знайти піковий туз
console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'spade'));
// - всі трефи від 9 та більше
//
console.log(cards.filter(card => card.cardSuit==='clubs' && (card.value === '9' || card.value === '10' || card.value === 'ace'|| card.value === 'jack'|| card.value === 'queen' || card.value === 'king' )));
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce= cards.reduce((acum, card) => {
    switch (card.cardSuit){
        case 'spade':
            acum.spades.push(card)
            break
        case 'diamond':
            acum.diamonds.push(card)
            break
        case 'heart':
            acum.hearts.push(card)
            break
        case 'clubs':
            acum.clubs.push(card)
            break
    }
        return acum
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce)

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
let searchSass= coursesArray.filter(value => {
    return value.modules.includes('sass')
})
console.log(searchSass)
// --написати пошук всіх об'єктів, в яких в modules є docker
let searchDocker= coursesArray.filter(value => {
    return value.modules.includes('docker')
})
console.log(searchDocker)