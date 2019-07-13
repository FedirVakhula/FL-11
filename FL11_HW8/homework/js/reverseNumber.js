function reverseNumber (a){
    let strA = Math.abs(a).toString();
    let result = '';
    for (let i = strA.length - 1; i >= 0; i--){
        result += strA[i];
    }
    return result * Math.sign(a);
}

reverseNumber ();