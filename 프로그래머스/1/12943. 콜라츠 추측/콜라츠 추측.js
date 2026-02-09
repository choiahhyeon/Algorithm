function solution(num) {
    var result = 0;
    
    while (result <= 500) {
        if (num % 2 === 0) {
            if (num === 1) {
                return result;
            } else {
                num = num / 2;
                result = result + 1;
            }
        } else if (num % 2 !== 0) {
            if (num === 1) {
                return result
            } else {
                num = num * 3 + 1;
                result = result + 1;
            }
        } else if (num === 1) {
            return 0;
        }
    }
    return -1;
}
