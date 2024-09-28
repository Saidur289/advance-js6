// example - 1
const data = [{id:1, name: 'abul', address:'kochu khet'}]
// console.log(data[0].address);
// example - 2
const product = {
    count: 5000,
    data: [{id: 1, name: 'lenovo', price: 65000},
            {id: 2, name: 'laptop', price: 3000}
          ]
}
// console.log(product.data[1].price);
// example-3
const user = {
    id: 5000,
    name: 'pori babar majar',
    address:{
        street:{
            first: '54 no road', 
            second: 'poribag road'
        },
        city: 'chittagong',
        country: 'bangladesh'
    }
}
// console.log(user.address.street.second);
// example - 4
const user2 = {
    id: 5000,
    name: 'pori babar majar',
    address:{
        city: 'chittagong',
        country: 'bangladesh'
    }
}
console.log(user2.address.street?.second);