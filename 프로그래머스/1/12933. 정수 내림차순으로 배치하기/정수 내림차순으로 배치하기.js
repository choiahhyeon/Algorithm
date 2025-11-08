function solution(n) {
    const arr = Array.from(String(n));
    arr.sort(function (a, b) { return b - a; });
    const a = arr.join('');
    return Number(a);
}