
{
    // 字面量定义
    let a:'male'|'female'
    a= 'male'
    a = 'female'
    a = 'dang' //error

    let b:boolean|string
    b = false
    b = '2'
    b = 2 //error


    // any  可以设置任意类型  相当于关闭TS类型检测
    let c:any //显示指定any类型
    // let d;    //隐式any
    c = 10
    c = false
    c = '10'

    // unknown  表示未知类型
   let e :unknown
   e = 10
   e = false
   e = '10'
   
   let s:string
//   c   是any 它可以赋值给任意变量
//any类型可以赋值给任何类型 并且同化被赋值的类型 既 关闭TS类型检测（霍霍自己 霍霍别人）
    s = c
 
    e = 'Hello'

// unknown 类型可以任意赋值  但是要赋值给其他类型变量时 不行（霍霍自己 不霍霍别人）
 s =e  //error

 if(typeof e == 'string'){
     s = e
 }

//  类型断言  告诉解析器变量的实际类型
// 两种类型
s = e as string
s = <string>e

// void 返回值类型 没有返回值的函数
function fn1():void{}

// never 表示永远不会返回结果 
function fn2():never{
    throw new Error('报错了')
}


// object 表示一个js对象
// {} 用来指定对象中可以包含哪些属性
// 语法 {属性名：属性值}
// ？ 在属性名后面加？ 表示属性是可选的
// 
let f:object 
f =function(){}
// ？ 在属性名后面加？ 表示属性是可选的 
let g:{name:string,age?:number}
g={name:'dang',}

// [propName:string]:any  表示h必须有string类型的name  其他属性的属性名是string  属性值为任意值
let h:{name:string,[propName:string]:any}
h={name:'dang',age:16,tel:false}

// 函数的结构类型
// 语法类似于箭头函数式
let i:(a:number,b:number)=>number
 i = (n1,n2) =>{
     return n1 + n2
 }


//  array
let j:string[] //字符串数组
// let j:Array<string>  第二种写法
j=['1','2']
j= [1,2] //error

// let k:number[] //数字数组
let k:Array<number>
k = [1,2]

// 元组 元组就是固定长度的数组  [类型，类型，类型]
let l:[string,string] //定义长度为二的元组
l =['1','2']



// 枚举 enum

enum Gender {
    male,
    female
}

let m: {name:string,sex:Gender}
m = {name:'dang',sex:Gender.male}
console.log(m.sex == Gender.male);


// & 表示同时 
let n:{name:string}&{age:number} //既要有name又要有age
n={name:'dang',age:8}


// type 类型的别名
type myType = 1|2|3|4|5

let o:myType
let p:myType
o = 1
o = 5
// o = 6 //error

// type用来定义类型的别名  主要用于对象  且不能重复声明 
// type myType =1|2|3|4|5  //error

// 接口是用来定义类的规范 限制类的结构
// 接口中所有属性不能有实际值
// 接口之定义对象的结构，而不考虑实际值
// 在接口中的所有方法都是抽象方法
interface myInter {
    name:string
    asyHello():void
}
// 可以重复声明 相当于对象的合并
interface myInter{
    age:number
}

//定义类时 可以使用类去实现一个接口 实现接口就是使类满足接口的要求
// 使用类去实现一个接口 使用implements 
class MyClass implements myInter{
    name: string
    age: number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    } 
    asyHello(): void {
        throw new Error("Method not implemented.")
    }
   
}


// 泛型 
function fn(a: number):number{
    return a
}
//定义函数或者类时  如果遇到类型不明确 可以使用泛型
function fnT<T>(a:T):T{
    return a
}
// 可以直接调用具有泛型的函数
fnT(10)  //传参时 没有指定泛型  TS可以自动对泛型进行推断
fnT<string>('Hello') //当我们的函数比较复杂是  TS不能准确推断时 调用时 可以手动执行泛型类型9

// 也可以传递多个泛型
function fn4<T,O>(a:T,b:O):T{
    console.log(b);
    return a
}
fn4<number,string>(12,'12')

// 限制泛型的结构
interface FnInter {
    length:number
}
function fn5<T extends FnInter>(a:T):T{
    return a
}

// 调用fn5函数 泛型要符合具有length属性
fn5('123')
// fn5(123) //error


// 类中使用泛型
class MyFnClass <T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}

let myFnClass = new MyFnClass("dang")
}


