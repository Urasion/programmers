function solution(id_list, reports, k) {
    let report_list = {}
    let count = {}
    let answer = {}
    for(const id of id_list){
        count[id] = 0
        answer[id] = 0
        report_list[id] = new Set()
    }
    for(const report of reports){
        const [start, target] = report.split(' ')
        if(!report_list[target].has(start)){
            count[target] += 1
            report_list[target].add(start)
        }
    }
    
    for(const id of id_list){
        if(count[id] >= k){
            for(const report of report_list[id]){
                answer[report] += 1 
            }
        }
    }
    
    return id_list.map((id)=>answer[id])
    
    
    return 0;
}
