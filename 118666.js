function solution(survey, choices) {
    const type = ['RT','CF','JM','AN']
    const map = new Map()
    for(let i = 0; i<survey.length; i++){
        const [type1, type2] = survey[i].split('')
        const num = choices[i]
        if(num === 4){
            continue;
        }
        if(num < 4){
            const sum = (map.get(type1) ?? 0) + 4 - num
        
            map.set(type1, sum)
        } else {
            const sum = (map.get(type2) ?? 0) + num - 4
                     

            map.set(type2, sum)
        }
    }
    let answer = ''
    console.log(map)
    for(const t of type){
        const [type1, type2] = t
       answer += (map.get(type1) ?? 0) >= (map.get(type2) ?? 0) ? type1 : type2
        
    }

    return answer;
}
