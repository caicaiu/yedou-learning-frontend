interface Person {
    name: string;
    age: number;

    sayHello(): void;
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}


interface Animal {
    name: string;
    age?: number;
}

let animal: Animal = {
    age: 0,
    name: ""
}

