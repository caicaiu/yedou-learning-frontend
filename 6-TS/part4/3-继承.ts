class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Man extends Person{
    manSayHello(){
        console.log("Hello, I'm a man")
    }
}
class Woman extends Person{
    womanSayHello(){
        console.log("Hello, I'm a woman")
    }
}

let man = new Man("John", 25);
let woman = new Woman("Jane", 23);

man.manSayHello();
