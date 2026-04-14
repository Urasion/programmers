function solution(s) {
    let stack = '';
    let result = ''
    const num_set = new Set(['0','1','2','3','4','5','6','7','8','9'])
    const num_map = new Map([['zero',0],['one',1],['two',2],['three',3],['four',4],['five',5],['six',6],['seven',7],['eight',8],['nine',9]])
    const string = s.split('')
    for(let s of string){
        if(num_set.has(s)){
            result += s
            continue
        }
        stack += s
        const num = num_map.get(stack) ?? -1
        if(num !== -1){
            result += num
            stack = ''
        }
    }
    
    return Number(result);
}
