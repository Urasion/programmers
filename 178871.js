function solution(players, callings) {
    const playerMap = new Map()
    const rankMap = new Map()
    players.forEach((player,index)=>{playerMap.set(player, index); rankMap.set(index, player)})
    
    for(const calling of callings){
        const callRank = playerMap.get(calling)
        const prevPlayer = rankMap.get(callRank - 1);
        
        playerMap.set(calling, callRank - 1)
        rankMap.set(callRank - 1, calling)
        playerMap.set(prevPlayer, callRank)
        rankMap.set(callRank, prevPlayer)
    }
  
    return Array.from(rankMap).map(([rank, player])=>player);
}
