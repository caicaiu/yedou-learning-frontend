let a: any = 123;

function getNumber(value: number) {
    return value;
}

getNumber(a as number)
let b = "123"
// getNumber(b as number) // 报错，类型“string”不能赋值给类型“number”


let c: string | number;
c = 123 as number
