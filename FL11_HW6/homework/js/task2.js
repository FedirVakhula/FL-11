let zero = 0;
const sidesArr = [];
let unrealSide = false;
let count = 4;
for (let index = 1; index < count; index++) {
    const side = +prompt(`enter length triangle's side number ${index}`);
    unrealSide = side <= zero;
    if (unrealSide) {
        break;
    }
    sidesArr.push(side);
}
if (unrealSide) {
    console.log('Triangle does not exist');
}else {
    let maxSide = Math.max(...sidesArr);
    let indexMaxSide = sidesArr.indexOf(maxSide);
    const copyArr = sidesArr.slice();
    sidesArr.splice(indexMaxSide, 1);
    if (maxSide >= sidesArr[0] + sidesArr[1]) {
        console.log('Triangle does not exist');
    } else if (copyArr[0] === copyArr[1] && copyArr[1] === copyArr[2]) {
        console.log('Eequivalent triangle');
    } else if (copyArr[0] === copyArr[1] || copyArr[1] === copyArr[2] || copyArr[0] === copyArr[2]) {
        console.log('Isosceles triangle');
    } else{
        console.log('Normal triangle');
    }
}