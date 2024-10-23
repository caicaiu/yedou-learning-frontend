// 数字类型
let num: number = 123;
console.log(num)

// 字符串类型
let str: string = "hello world";
console.log(str)

// 布尔类型
let bool: boolean = true;
console.log(bool);


// 数组类型
let arr: number[] = [1, 2, 3]
let arr2: string[] = ["hello", "world"]
let arr3:  Array<number>;
arr3 = [1, 2, 3];
console.log(arr)
console.log(arr2)

// 联合类型
// 变量可以是数字或字符串类型
let type: string | number;

// 只能是1、2、3
let sort: 1 | 2 | 3 = 2;
// sort = 4; // 类型“4”不能赋值给类型“1 | 2 | 3”。
let gender: "male" | "female";

function greet(person: "male" | "female", name: string) {
    console.log(`Hello ${name}, you are a ${person}!`);
}


// any类型
let anyVar: any;
anyVar = 123;
anyVar = "hello world";
anyVar = true;
console.log(anyVar);

// 如果无法推断出类型，TypeScript 就会认为该变量的类型是any。
function add(x, y) {
    return x + y;
}

add(1, [1, 2, 3]); // 不报错


// 变量x和y声明时没有赋值，也没有指定类型，TypeScript 会推断它们的类型为any
let x;
let y;


// any污染问题
// 会“污染”其他变量。它可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错。
let a: any = 123;
a = "hello world";
let b: number = a;
console.log(b)  // hello world


// unknown类型
let u: unknown = "hello world"
u = 123
u = true
u = "hello world";
let s: number = 4;
// s = u // 类型“unknown”不能赋值给类型“number”。


// never类型
let bb: never;
// bb = 123; // 类型“123”不能赋值给类型“never”。
// bb = "hello world";
// bb = true;

// never类型的一个重要特点是，可以赋值给任意其他类型。
function error(message: string): never {
    throw new Error(message);
}

let a1: number = error("error");
let a2: string = error("error");


// void类型
function log(message: string): void {
    console.log(message);
}


// object类型
let obj: object = {name: "John", age: 30}
let obj2: object = [1, 2, 3];
let obj3: object = function () {
    console.log("hello world");
}
let obj4: {} = [1, 3, 3]

let myObj: { name: string, age: number }; // 必须包含
myObj = {name: "John", age: 30};
// myObj = {name: "John"}; // 类型“{ name: string; }”缺少属性“age”。

let myObj2: { name: string, age?: number } // age可以选填
myObj2 = {name: "John", age: 30};
myObj2 = {name: "John"};

// 属性不固定
let myObj3: { name: string, [propName: string]: any }
myObj3 = {name: "John", age: 30, gender: "male"}


// 指定方法类型
let myFunc: (name: string, age: number) => number;
myFunc = function (name: string, age: number): number {
    return age;
}
myFunc("John", 30) // 30
// myFunc("John") // 错误

let myFunc2: (name: string, age?: number) => void;
myFunc2 = function (name: string, age?: number) {
    return age;
}
myFunc2("John") // 30

// 元祖类型
let tuple: [string, number]
tuple = ["hello", 123]
// tuple = ["2o4d","134214"] // TS2322: Type string is not assignable to type number
// tuple = ["hello",123,1223] // Source has 3 element(s) but target allows only 2


// 枚举类型
enum COLOR {
    RED = "red",
    BLUE = "blue",
    GREEN = "green"
}

let color: COLOR = COLOR.RED;
console.log(color)
// let color2: COLOR = "blue" // TS2322: Type "blue" is not assignable to type COLOR


// 交叉类型
let person: { name: string } & { age: number }
person = {name: "John", age: 30}
// person = {name: "John"} // ge is declared here.


// 类型别名
type myType = string
let myVar:myType = "hello world"
type myType2 = "张三" | "李四" | "hello"
let myVar2: myType2 = "张三" // 类型“123”不能赋值给类型“myType”。
