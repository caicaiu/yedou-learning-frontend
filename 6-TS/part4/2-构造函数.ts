class Person {
    name: string;
    age: number;

    // 只能包含一个
    constructor(name: string, age: number) {
        console.log("构造函数执行了")
        this.name = name;
        this.age = age;
    }

}


const p = new Person("张三", 20)
console.log(p.age)
