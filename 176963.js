function solution(name, yearning, photo) {
    const map = new Map();
    for(let i = 0; i<name.length; i++){
        map.set(name[i],yearning[i] )
    }
    let answer = []
    for(let set of photo){
        let result = 0 
        for(let name of set){
            result += map.get(name) ?? 0
        }
        answer = [...answer, result]
    }
    return answer;
}
