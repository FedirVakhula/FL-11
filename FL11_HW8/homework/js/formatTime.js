function formatTime (a){
    let day = 0;
    let hour = 0;
    let minutes = 0;
    const dayConst = 1440;
    const hourConst = 60;
    if (a >= dayConst){
        day = parseInt(a / dayConst);
        a = a % dayConst;
    }
    if (a >= hourConst){
        hour = parseInt(a / hourConst);
        a = a % hourConst;
    }
    minutes = a;
    return `${day} day(s) ${hour} hour(s) ${minutes} minute(s).`
}
formatTime();