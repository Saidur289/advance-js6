// example - 1
class Product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new Product('le le lenovo');
// console.log(lenovo);
// lenovo.speak('oba kotha ko');
// example - 2
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching well');
    }
}
// const tapan = new Teacher('tapan sir', 'chemistry');
// console.log(tapan);
// tapan.lecture()
// const saidur = new Teacher('saidur sir', 'math');
// console.log(saidur);
// saidur.lecture();
class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na gari chole na re');
    }
}
class Bus extends Vehicle{
    constructor(name,price, seat, ticketprice){
        super(name, price);
        this.seat = seat;
        this.ticketprice = ticketprice;
    }
}
const semoli = new Bus('semoli', 5000000, 50, 500);
console.log(semoli);
const hanif = new Bus('hanif', 600000, 40, 700);
console.log(hanif);