class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }

}
const kodom = new Person('kacha badam', 24);
console.log(kodom);
kodom.sleep();
const badam = new Person('badam', 50);
console.log(badam);