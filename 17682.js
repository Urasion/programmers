function solution(dartResult) {
    const stacks = []
    let currentNum = ""
    let count = 0
    for(let i = 0; i<dartResult.length; i++){
       const char = dartResult[i]
       if(/[0-9]/.test(char)){
           currentNum += char
       }else if(char === 'S' || char === 'D' || char === 'T'){
           let score = parseInt(currentNum);
           if (char === 'S') {
                stacks.push(Math.pow(score, 1));
            } else if (char === 'D') {
                stacks.push(Math.pow(score, 2));
            } else if (char === 'T') {
                stacks.push(Math.pow(score, 3));
            }
            currentNum = "";
           
       }
       else if(char === '*'){
           if(stacks.length > 1){
               stacks[stacks.length - 2] *= 2;
           }
            stacks[stacks.length - 1] *= 2;
       }
        else if (char === '#'){
              stacks[stacks.length - 1] *= -1;
        }
    }
    return stacks.reduce((acc, cur)=> acc+ cur, 0);
}
