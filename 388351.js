function solution(schedules, timelogs, startday) {
    let answer = schedules.length;
    for(let i = 0; i< schedules.length; i++){
        let schedule = schedules[i]
        let hour = Math.floor(schedule / 100)
        let minute = schedule % 100 + 10
    
        if(minute >= 60){
                hour += 1 
                minute %= 60
        }
        schedule = hour * 100 + minute
        for(let j = 0; j< timelogs[i].length; j++){
            const day = (startday + j) % 7
            const isWeekEnd = day  === 0 || day  === 6
            if(isWeekEnd){
                continue
            }
          
            if(schedule <  timelogs[i][j]){
                 answer -= 1;
                break;
            }
        }
    }
    return answer;
}
