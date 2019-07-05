let aX = + prompt('enter the coordinate X of the point A');
let aY = + prompt('enter the coordinate Y of the point A');
let bX = + prompt('enter the coordinate X of the point B');
let bY = + prompt('enter the coordinate Y of the point B');
let cX = + prompt('enter the coordinate X of the point C');
let cY = + prompt('enter the coordinate Y of the point C');
let divider = 2;
let centerLine_X = (aX + bX) / divider;
let centerLine_Y = (aY + bY) / divider;

console.log(centerLine_X === cX && centerLine_Y === cY);
