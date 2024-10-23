// 指定类型 后期只能赋值给相同类型的值
let a: number;
// a = "hello"; // 类型“string”不能赋值给类型“number”。
a = 10;
a = 3.14;
console.log(a);


let b: string;

// 赋值
let c: boolean = false;

// 自动类型推断,放赋值的时候会自动推断类型
let d = true;
// d = "ljkl"


// 在函数上使用
function sum(a: number, b: number) {
    console.log(a + b)
}

sum(1, 2);
// sum(1, "2"); // 类型“string”不能赋值给类型“number”。

// 有返回值
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));
