// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

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
    }]
let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper)
for (const item of coursesArray) {
    let card = document.createElement('div')
    card.classList.add('card')

    let h2 = document.createElement('h2')
    h2.classList.add('title')
    h2.innerText = item.title

    let divWrap = document.createElement('div')
    divWrap.classList.add('divWrap')

    let monthDuration = document.createElement('div')
    monthDuration.classList.add('monthDuration')
    monthDuration.innerText = `monthDuration - ${item.monthDuration}`

    let hourDuration = document.createElement('div')
    hourDuration.classList.add('hourDuration')
    hourDuration.innerText =`hourDuration - ${item.hourDuration}`


    let ul = document.createElement('ul')
    ul.classList.add('ul')

    wrapper.appendChild(card)
    divWrap.append(monthDuration, hourDuration)
    card.append(h2, divWrap, ul)
    for (const element of item.modules) {
        let li = document.createElement('li')
        li.innerText = element
        ul.appendChild(li)
    }

}