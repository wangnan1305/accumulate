// 先进后出
function stack(element) {
    if (type(element) !== "String" && type(element) !== "Array") return 'sss';

    return {
        push(item) {
            return element.push(item);  //添加元素到栈顶  栈的栈顶就是数组或者字符串的最后一个
        },
        pop() {
            return element.pop();  // 移除并返回栈顶元素
        },
        peek() {
            return element[element.length - 1]; //返回栈顶元素
        },
        isAmpty() {
            return element.length === 0;
        },
        clear() {
            if (type(element) === "String") {
                element = '';
            } else {
                element.length = 0;  // ? element = [];
            }
        },
        size() {
            return element.length;
        },
        print() {
            console.log(element.toString());
        }
    }
}

function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function divideBy2(decNumber) {
    let lifo = []
    let l = stack(lifo);
    let str = '';
    while(decNumber > 0){
        l.push(Math.floor(decNumber % 2));
        decNumber = Math.floor(decNumber / 2);
    }
    while(!l.isAmpty()){
        str += l.pop().toString();
    }
    return str;
};
console.log(divideBy2(100))