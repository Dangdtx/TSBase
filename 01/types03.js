"use strict";
{
    // 字面量定义
    var a_1;
    a_1 = 'male';
    a_1 = 'female';
    a_1 = 'dang'; //error
    var b_1;
    b_1 = false;
    b_1 = '2';
    b_1 = 2; //error
    // any  可以设置任意类型  相当于关闭TS类型检测
    var c_1; //显示指定any类型
    // let d;    //隐式any
    c_1 = 10;
    c_1 = false;
    c_1 = '10';
    // unknown  表示未知类型
    var e_1;
    e_1 = 10;
    e_1 = false;
    e_1 = '10';
    var s = void 0;
    //   c   是any 它可以赋值给任意变量
    //any类型可以赋值给任何类型 并且同化被赋值的类型 既 关闭TS类型检测（霍霍自己 霍霍别人）
    s = c_1;
    e_1 = 'Hello';
    // unknown 类型可以任意赋值  但是要赋值给其他类型变量时 不行（霍霍自己 不霍霍别人）
    s = e_1; //error
    if (typeof e_1 == 'string') {
        s = e_1;
    }
    //  类型断言  告诉解析器变量的实际类型
    // 两种类型
    s = e_1;
    s = e_1;
    // void 返回值类型 没有返回值的函数
    function fn1() { }
    // never 表示永远不会返回结果 
    function fn2() {
        throw new Error('报错了');
    }
    // object 表示一个js对象
    // {} 用来指定对象中可以包含哪些属性
    // 语法 {属性名：属性值}
    // ？ 在属性名后面加？ 表示属性是可选的
    // 
    var f = void 0;
    f = function () { };
    // ？ 在属性名后面加？ 表示属性是可选的 
    var g = void 0;
    g = { name: 'dang', };
    // [propName:string]:any  表示h必须有string类型的name  其他属性的属性名是string  属性值为任意值
    var h = void 0;
    h = { name: 'dang', age: 16, tel: false };
    // 函数的结构类型
    // 语法类似于箭头函数式
    var i = void 0;
    i = function (n1, n2) {
        return n1 + n2;
    };
    //  array
    var j = void 0; //字符串数组
    // let j:Array<string>  第二种写法
    j = ['1', '2'];
    j = [1, 2]; //error
    // let k:number[] //数字数组
    var k = void 0;
    k = [1, 2];
    // 元组 元组就是固定长度的数组  [类型，类型，类型]
    var l = void 0; //定义长度为二的元组
    l = ['1', '2'];
    // 枚举 enum
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["male"] = 0] = "male";
        Gender[Gender["female"] = 1] = "female";
    })(Gender || (Gender = {}));
    var m = void 0;
    m = { name: 'dang', sex: Gender.male };
    console.log(m.sex == Gender.male);
    // & 表示同时 
    var n = void 0; //既要有name又要有age
    n = { name: 'dang', age: 8 };
    var o = void 0;
    var p_1;
    o = 1;
    o = 5;
    o = 6; //error
}
