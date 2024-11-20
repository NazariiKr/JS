// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function copy(obj) {
    let functionObj = []
    for (const objKey in obj) {
        if (typeof obj[objKey] === 'function') {
            let functionCopy = obj[objKey].bind({});
            functionObj.push({functionCopy, objKey})
        }}
        if (obj) {
            let objCopy = JSON.parse(JSON.stringify(obj));
            for (const item of functionObj) {
                objCopy[item.objKey]=item.functionCopy
            }
            return objCopy
        }}



    console.log(copy({name: 'vaisa', age: 23, foo(){}}));

//
//
// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5, wife:{name:'ana',foo(){}}},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let coursesMap = coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}))

    console.log(coursesMap)




