const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 55000},
    {id: 3, name: 'hp', price: 4000}
]
//map
const names = products.map(products => products.name);
// console.log(names);
//map 
const prices = products.map(products => products.price);
// console.log(prices);
// for each
// products.forEach((products => console.log(products.id)));
// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);
// find 
const affordable = products.find(p => p.price < 50000);
console.log(affordable);
// reduce 
const total = products.reduce((acum, curr) => acum + curr.price, 0);
console.log(total);
