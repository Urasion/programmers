function solution(video_len, pos, op_start, op_end, commands) {  
    var answer = '';
    let [videoHour, videoMinute] = video_len.split(':').map(Number)
    const videoTime = videoHour * 100 + videoMinute

    let [posHour, posMinute] = pos.split(':').map(Number)

    const [opStartHour, opStartMinute] = op_start.split(':').map(Number)
    const opStartTime = opStartHour*100 + opStartMinute
    const [opEndHour, opEndMinute] = op_end.split(':').map(Number)
    const opEndTime = opEndHour* 100 + opEndMinute
    let posTime = posHour * 100 + posMinute
        if(posTime >= opStartTime && posTime <= opEndTime){
            posHour = opEndHour 
            posMinute = opEndMinute
        }
    for(let command of commands){
              
        switch(command){
            case "next":
                posMinute += 10
                if(posMinute >= 60){
                    posHour += 1
                    posMinute -= 60
                }
                break;
            case "prev":
                posMinute -= 10;
                if(posMinute < 0){
                    posMinute += 60
                    posHour -= 1               
                } 
        }
        posTime = posHour * 100 + posMinute
      if(posTime <= 0){
            posHour = 0
            posMinute = 0
        }
        else if(posTime >= videoTime){
            
            posHour = videoHour
            posMinute = videoMinute
        }  
                posTime = posHour * 100 + posMinute
        if(posTime >= opStartTime && posTime <= opEndTime){
            posHour = opEndHour 
            posMinute = opEndMinute
        }
    }
    return String(posHour).padStart(2, '0') + ":"+ String(posMinute).padStart(2,'0');
}
