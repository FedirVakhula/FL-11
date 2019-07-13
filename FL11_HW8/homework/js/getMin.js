function getMin() {
    let min = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        if (isBigger(min, arguments[i])){
            min = arguments[i];
        }
    }
    return min;
}
getMin();

function isBigger(a, b) {
    return a > b;
}
