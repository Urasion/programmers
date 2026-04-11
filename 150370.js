function solution(today, terms, privacies) {
    
    today = today.split('.').reduce((acc,value, index)=>{ 
        return acc + (100**(2-index)) * Number(value) }, 0)
    
    const termMap = new Map();
    for(const term of terms){
        const [key, value] = term.split(' ')
        termMap.set(key, Number(value))
    }
    let answer = []
    for(let i = 1; i<= privacies.length; i++){
        let [date, term] = privacies[i-1].split(' ')
        
        term = termMap.get(term);
        
        let [year, month, day] = date.split('.').map(Number)
        day += term*28
        
        month += Math.floor((day - 1)/28)
        day = (day % 28) || 28 
    
        year += Math.floor((month - 1)/12)
        month = (month % 12) || 12
        
        date = year * 10000 + month *100 + day
        
        if(today >= date){
            answer.push(i)
        }
        
    }
    return answer;
}
