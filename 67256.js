function solution(numbers, hand) {
    const leftset = new Set([1,4,7])
    const rightset= new Set([3,6,9])
    const position = [[0,1],[3,0],[3,1],[3,2],[2,0],[2,1],[2,2],[1,0],[1,1],[1,2]]
    let lefthand = [0,0];
    let righthand = [0,2];
    answer = ""
    for(const number of numbers){
        if(leftset.has(number)){
            answer += 'L'
            lefthand = position[number]
        }else if(rightset.has(number)){
            answer += 'R'
            righthand = position[number]
        }else{
            const numberPosition = position[number]
            const leftgap = Math.abs(numberPosition[0] - lefthand[0]) + Math.abs(numberPosition[1] - lefthand[1])
            const rightgap = Math.abs(numberPosition[0] - righthand[0]) + Math.abs(numberPosition[1] - righthand[1])
             if(leftgap === rightgap){
                    hand === 'left' ? answer += 'L' : answer += 'R'
                    hand === 'left' ? lefthand = numberPosition : righthand = numberPosition
             }else{
                if(leftgap > rightgap){
                answer += 'R'
                righthand = numberPosition
                }else{
                answer += 'L'
                 lefthand = numberPosition
                }
             }
            
        }
    
    }
    return answer;
}
