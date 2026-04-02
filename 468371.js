function solution(signals) {
    let term = []
    for (const signal of signals){
        const [green, yellow, red] = signal
        term.push(green+ yellow + red)
        
    }
    let min = term[0]
  // 각 signal의 최소공배수를 구함
    for(let i=1; i<term.length; i++){
        min = getMin(min, term[i])
    }
  // yellow의 배열을 채우는 로직
    let yellowArr = Array.from({length:signals.length}, ()=>Array.from({length: min + 1}, ()=>0))
    for(let i=0; i<term.length; i++){
        const [green, yellow, red] = signals[i]
        const curTerm = term[i]
        let k = 0;
        while(true){
            const start = green + 1 + k*curTerm
            const end = green + yellow + k*curTerm
         
            if(end > min){
                break;
            }
            for(let j=start; j<= end; j++){
                yellowArr[i][j] += 1;
            }
            k += 1
        }
        
    }
  // yellow가 겹치는 구간을 체크하는 로직
    for(let i=0; i<=min; i++){
        let flag = true;
        for(let j=0; j<signals.length; j++){
            if(yellowArr[j][i] !== 1){
                flag = false;
            }
        }
        if(flag){
            return i
        }
    }
    return -1
}

function getGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getMin(a, b) {
  return (a * b) / getGCD(a, b);
}
