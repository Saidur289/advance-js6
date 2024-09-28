// example - 1
const numbers = [35, 50, 40, 35, 32];
// const selected = numbers.filter(p => p % 2 !== 1);
const selected = numbers.filter(p => p % 2 == 1);
// console.log(selected);
// example - 2
const friends = ['tom', 'jerry', 'saidur'];
const list = friends.filter(frnd => frnd.length > 4);
// console.log(list);
// example - 3
const number = [35, 50, 40, 35, 32, 90, 80];
const oneSelected = number.find(player => player > 70);
console.log(oneSelected);