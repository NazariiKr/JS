// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let n='hello';
let o='owu';
let p='com';
let d='ua';
let e=1;
let f=10;
let g=-999;
let h=123;
let i=3.14;
let j=2.7;
let k=16;
let l=true;
let m=false;
console.log(n,o,p,d,e,f,g,h,i,j,k,l,m);


// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person ' +
// '(Не об'єкт, просто за допомоги конкатенації)
let firstName='Назарій';
let lastName='Кравець';
let middleName='Юрійович';
let person=lastName+' '+firstName+' '+middleName;
console.log(person)


// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let namePrompt=prompt('твоє імя?');
let agePrompt=prompt('твій вік?');
let middleNamePrompt =prompt('твоє імя по-батькові?');
console.log(namePrompt);
console.log(agePrompt);
console.log(middleNamePrompt);
