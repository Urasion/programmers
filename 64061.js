function solution(board, moves) {
    const length = board.length
    let stack = []
    let count = 0
    for(const move of moves){
        for(let i=0; i<length; i++){
            const num = board[i][move-1]
            if(num === 0) continue;
            board[i][move-1] = 0
            if(num === stack.at(-1)){
                stack.pop()
                count += 2
                break;
            }else{
                stack.push(num)
                break;
            }
        }
    }
    
    return count;
}
