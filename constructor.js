function P(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}
P.prototype = {
    constructor: P,
    showName: () => {
        console.log(this.b);
    }
}

var obj = new P(1,2,3);
obj.showName();

function T(a,b,c){
    P.call(this,a,b,c)
};

T.prototype = new P();
T.prototype.showName = () => {
    console.log('TTTTTTTTTTTTTTT')
}
var t = new T(4,5,6);
