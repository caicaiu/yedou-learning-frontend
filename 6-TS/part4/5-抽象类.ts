abstract class Shape {
    abstract getArea(): number;

    abstract height: number;
    abstract width: number;

    printArea() {
        console.log(`The area is ${this.getArea()}`);
    }
}

// 注意：抽象类不能实例化，只能被继承
class Rectangle extends Shape {
    getArea(): number {
        throw new Error("Method not implemented.");
    }

    width: number = 30;
    height: number = 30;
}

const p1 = new Rectangle();
p1.printArea();
console.log(p1.height)
