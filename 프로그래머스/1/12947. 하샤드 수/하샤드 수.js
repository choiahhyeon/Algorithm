function solution(x) {
    var sum = 0;
    let N = x.toString();
    let arr = N.split('');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    if (x % sum === 0) {
        return true;
    } else {
        return false;
    }
}