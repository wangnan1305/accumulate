function fibonacci(n){
    let cache = {
        0: 0,
        1: 1
    };
    function loop(n) {
        if (isNaN(n)) return;
        if (typeof n !== "number" || n < 0) return;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return typeof cache[n] === 'number' ? cache[n] : cache[n] = loop(n - 1) + loop(n -2);
    }
    function isNaN(value){
        return value !== value;
    }
    return loop(n);
}
module.exports.fibonacci = fibonacci;