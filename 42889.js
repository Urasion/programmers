function solution(N, stages) {
    let arr = Array(N).fill(0);
    let total = stages.length
    stages.forEach((stage)=>{
        if(stage > N){
            return;
        }
        arr[stage-1] += 1
    })
    arr.forEach((count,index)=>{
        arr[index] = {stage : index + 1, rate : count / total}
        total -= count
    })
    arr = arr.sort((a,b)=> b.rate - a.rate).map((item)=>item.stage)
    return arr;
}
