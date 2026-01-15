function solution(s){
    s = s.toLowerCase();
    const countA = s.split('p').length - 1;
    const countB = s.split('y').length - 1;
    
    if (countA === countB) {
        return true;
    } else {
        return false;
    }
}