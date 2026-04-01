function solution(a, b) {
  // 두 정수가 같은 경우는 return
    if(a === b){
        return a
    }
    var sum = a+b
    var diff = Math.abs(a-b)
    var gap = Math.floor(diff/2)
  // 짝이 맞는 경우 남는 경우를 check
    var isTemp = (diff) % 2 + 1

  // 짝에 맞게 계산하고 짝이 맞지 않는 경우는 값을 더해줌
    return (a+b) * gap + (isTemp * (a+b)/2)
}
