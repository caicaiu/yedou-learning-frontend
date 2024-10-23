function identity<T>(a: T): T {
    return a;
}

// 所有类型
function identity2<T, K>(k: K): T {
    let b: T;
    return b;
}

console.log(identity(10 as number))


// 必须是子类
interface MyType {
    length: number
}

class MyTypeChild implements MyType {
    length = 10;
}

function myFunc<T extends MyType>(a: T): number {
    return a.length
}

myFunc(new MyTypeChild())


class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}
let numberBox = new Box<number>(10);
let stringBox = new Box<string>("world");
