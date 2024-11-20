// function userBuilder(name,age){
//   let user={name,age}
//     return{
//       getName(){
//           return user.name
//       },
//         getAge(){
//           return user.age
//         },
//         setAge(age){
//           if (age>0){
//               user.age=age
//           }
//         }
//     }
// }
// let user=userBuilder('vasia',35)
// console.log(user)
// console.log(user.getAge())
// user.setAge(25)
// console.log(user.getAge())
//
//
//
// function iterator(arr,i){
//     console.log(arr[i])
//     i++
//     if (i<arr.length){
//         iterator(arr,i)
//     }
// }
// iterator([11,22,33,44,55,66,77],0);
//
// let arr1=[]
// let arr=[11,22,33,[44,55,[77,88,99]],66];
// function iter(arr){
//
//     for (let arrElement of arr) {
//         if (Array.isArray(arrElement)){
//             iter(arrElement)
//         }else {
//             arr1.push(arrElement)
//         }
//
//     }
// }
// iter(arr)
// console.log(arr1)
//
//
// let str='hello okten'
// console.log(str)
// let s=str.concat('!!!');
// console.log(s)
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('he'));
// console.log(str.endsWith('en'));
// console.log(str.substring(0, 7));
// console.log(str.indexOf('h'));
// console.log(str.lastIndexOf('h'));
// console.log(str.indexOf('o', 5));
// console.log(str.charAt(7));
// console.log(str.replace('e', 'o'));
// console.log(str.replaceAll('e', 'o'));
//


// let arr= []
// console.log(Array.isArray(arr));
// arr.push('new element1');
// arr.push('new element2');
// arr.push('new element3');
// arr.push('new element4');
// arr.push('new element5');
// console.log(arr)
//
// arr.pop();
// console.log(arr)
//
// arr.unshift('!!!')
// console.log(arr)
//
// arr.shift()
// console.log(arr)
//
// let join=arr.join("-")
// console.log(join)
//
// let nums=[11,22,33,44,55]
// let concat=arr.concat(nums);
// console.log(concat)
//
// console.log(nums.reverse());
//
// console.log(concat.slice(0, 4));
//




let user={name:'vasia',age:23}
let user1={fo(){},id:23}
console.log(user1)
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user["name"])
user['surname']='pupkin'
user.id=user1['id']

user['fo']=user1['fo']
console.log(user)
let {name,surname,id}=user
console.log(name)
console.log(id)