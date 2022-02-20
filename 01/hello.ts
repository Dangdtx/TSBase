console.log("Hello TS");

// TS的声明类型
// a的类型设置为number类型
let a:number

 a = 10
 a = false //error
 a = '10'  //error

//  同理
let b:string , c:boolean = false;

// 如果变量声明和赋值是同时进行，TS可以自动进行变量类型检测
let e = false;
    e = 1 //error

// JS中的函数需要考虑参数类型和个数及返回值类型
function sum(a:number,b:number):number{
    return a+b
}
sum(1,3)
sum(1,'2')  //error




