/**
 * 类的定义
 */
class Person {
    name: string = "John";
    age: number = 30;
    // 静态属性
    static greeting: string = "Hello, I am a person.";
    sayHello = () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    // 静态方法
    static sayGreeting = () => {
        console.log(Person.greeting);
    }
}

// 实例化对象
const person = new Person();
person.sayHello(); // Output: Hello, my name is John and I am 30 years old.
console.log(Person.greeting)
