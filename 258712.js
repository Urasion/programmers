function solution(friends, gifts) {
    const giftIndex = {};
    const history = {};   
    const nextGifts = {}; 
    
    friends.forEach(friend => {
        giftIndex[friend] = 0;
        nextGifts[friend] = 0;
        history[friend] = {};
        friends.forEach(target => {
            history[friend][target] = 0;
        });
    });
    

    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        
    
        history[giver][receiver] += 1;
        
        giftIndex[giver] += 1;
        giftIndex[receiver] -= 1;
    }

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friendA = friends[i];
            const friendB = friends[j];
            
            const aGaveB = history[friendA][friendB]; 
            const bGaveA = history[friendB][friendA];
            
            if (aGaveB > bGaveA) {
                nextGifts[friendA] += 1;
            } else if (aGaveB < bGaveA) {
                nextGifts[friendB] += 1;
            } else {
            
                if (giftIndex[friendA] > giftIndex[friendB]) {
                    nextGifts[friendA] += 1;
                } else if (giftIndex[friendA] < giftIndex[friendB]) {
                    nextGifts[friendB] += 1;
                }
            }
        }
    }
    
    let maxGifts = 0;
    for (const friend of friends) {
        maxGifts = Math.max(maxGifts, nextGifts[friend]);
    }
    
    return maxGifts;
}
