function solution(message, spoiler_ranges) {
    const splitMessage = message.split(' ')
 
    const nonSpoilerSet = new Set([]);

    const spoilerWords = [];
    let index = 0
    let spoilerIndex = -1
    for(let i =0; i<message.length; i++){
        if(message.charAt(i) === ' '){    
            if(spoilerIndex !== index){      
                nonSpoilerSet.add(splitMessage[index])
            }
            index += 1     
            continue
        }   
            const isSpoilerRange = spoiler_ranges.some((spoiler)=> i >= spoiler[0] && i <= spoiler[1])
            if(isSpoilerRange){           
                if(spoilerIndex === index) continue;
                spoilerWords.push(splitMessage[index])
                spoilerIndex = index
            }
    }
    const spoilerSet = new Set([])
    let count = 0;

    for(let word of spoilerWords){
 
        if(  nonSpoilerSet.has(word)){
            continue
        }
        if(spoilerSet.has(word)){
            continue
        }
        spoilerSet.add(word)
        count += 1
       
        
    }

    
    return count;
}
