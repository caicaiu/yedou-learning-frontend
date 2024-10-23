class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("I am eating")
    }
}

class Woman extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    myEat() {
        super.eat()
    }
}

const woman = new Woman("Alice", 25);
woman.myEat()
