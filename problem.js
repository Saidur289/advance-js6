// task - 1 make it even Array
const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(num => num + 1);
// console.log(evenArray);
// task - 2
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisle10 = numbers.filter(num => num % 10 == 0);
// console.log(divisle10);
// task - 3 
const instructor = [
    {name: 'nodi', age: 25, position: 'senior'},
    {name: 'modi', age: 26, position: 'junior'},
    {name: 'jodi', age: 27, position: 'senior'}
]
// const position = instructor.filter(array => array.position === 'senior');
const position = instructor.find(array => array.position === 'senior');
console.log(position);
// task - 4
const instructors = [
    {name: 'nodi', age: 20},
    {name: 'modi', age: 15},
    {name: 'jodi', age: 22}
]
// let sum = 0;
// for(const item of instructors){
 
//  let num = item['age'];
//  sum = sum + num;
 
// }
// console.log(sum);
const totalAge = instructors.reduce((pre, curr) => pre + curr.age, 0);
console.log(totalAge);