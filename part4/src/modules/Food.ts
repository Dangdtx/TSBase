
// 定义食物类
class Food {
    element: HTMLElement;
    constructor( ){
        this.element = document.getElementById("food")!; 
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        // 随机修改食物的位置 正方形  0-290    需要减掉自身的10px 所以290
        let left = (Math.round(Math.random()*29))*10
        this.element.style.left = left+'px'
        this.element.style.top =left+'px'
    }
}



export default Food