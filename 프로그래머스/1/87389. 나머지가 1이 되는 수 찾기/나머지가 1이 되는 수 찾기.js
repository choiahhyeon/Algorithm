function solution(n) {
    let i = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 1) {
            break;
        }
    }
    return i;
}