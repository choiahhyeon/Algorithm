function solution(n)
{
    var answer = 0;
    let N = n.toString();
    let arr = N.split('');
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i]);
    }
    return answer;
}