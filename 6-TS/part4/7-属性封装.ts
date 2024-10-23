class Person {
    private name: string = "John";
    protected age: number = 25;
    public address: string = "New York";
}

class Student extends Person {

    eat() {

        console.log(this.age, 'years old')
        // Only public and protected methods of the base class are accessible via the super keywo
        // console.log(this.name)
    }
}

let person = new Person();
// console.log(person.name)// 报错
console.log(person.address)
// console.log(person.age);// 报错

console.log("I am eating")
let student = new Student();
student.eat()
