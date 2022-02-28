// 元组
let tuple: [string, number] = ["", 2];
tuple.push("true");

// 函数
// void  没有任何类型返回 与any类型相反
// ?: 表示可选参数
function add(a: number, b: number, z?: boolean): number {
	return +a + b;
}

function add2(a: number, b: number, z?: boolean): number {
	return a + b;
}

//
// add3 =add2  直接赋值 ts自动进行类型推断
const add3: (x: number, y: number) => number = add2;
add3(1, 2);

// 接口  interface 用来定义对象的类型  对对象的形状进行描述
interface Person {
	readonly name: string;
	age: number;
}
const p1: Person = { name: "dang", age: 1 };
// p1.name = "bo" //无法分配到 "name" ，因为它是只读属性

// interface用来描述函数类型
interface ISum {
	(x: number, y: number): number;
}
const add4: ISum = (num1, num2) => {
	return num1 + num2;
};

// 自定义属性 propName
interface RandomKey {
	[propName: string]: string | number;
}

const obj: RandomKey = { name: "dang", age: 14 };

// 如果把属性名定义为 number 类型，就是一个类数组了，看上去和数组一模一样。
interface LikeArray {
	[propName: number]: string;
}
const arr: LikeArray = ["1", "2"];
console.log(arr, "arr");

// interface 非常灵活 只要符合接口的定义 那就能够运行
interface FunctionWithProp {
	(x: number): number;
	name: string;
}

const obj1: FunctionWithProp = (x) => {
	return x;
};
obj.name = "function";

// class public private protected
{
	class Person {
		static pi: 3.14;
		name: string;
		constructor(name: string) {
			this.name = name;
		}
		speak() {
			console.log(`${this.name}  is speak ${Person.pi}`);
		}
	}

	let p1 = new Person("dang");
	p1.speak();

	// extends 继承
	class Student extends Person {
		age: number;
		constructor(name: string, age: number) {
			super(name);
			this.age = age;
		}
		student() {
			console.log(
				`${this.name} is student age is ${this.age} ${Person.pi}`
			);
		}
	}
	let s1 = new Student("bo", 18);
	s1.student();

	// 多态  子类对父类方法进行重写  子类和父类调用同一个方法会不一样

	// public 一个类中默认所有的属性和方法都是public
	// private  私有的  只属于类自己 实例和继承的子类无法访问
	// protected  实例不能访问  子类可访问

	// static 只有  只有类可访问的属性

	// interface 同样可以用来约束 class，要实现约束，需要用到 implements 关键字。

	// implements 实现
	// 播放音乐接口
	interface MusicPlay {
		playMusic(): void;
	}
	// 打电话接口
	interface CallPlay {
		playCall(): void;
	}
	class Car implements MusicPlay, CallPlay {
		playMusic() {}
		playCall() {}
	}
}
{
	interface CircleStatic {
		new (radius: number): void;
		// cirecleRadius(): void;

		pi: number;
	}

	const Circle: CircleStatic = class Circle {
		static pi: 3.14;
		public radius: number;
		public constructor(radius: number) {
			this.radius = radius;
		}
		// cirecleRadius() {
		// 	console.log(` radius is ${this.radius}`);
		// }
	};
	let c1 = new Circle(1);
	console.log(c1, "c1");

	// c1.radius
}
