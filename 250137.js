function solution(bandage, health, attacks) {
    var answer = 0;
    const maxHealth = health
    const [healTime, healRate, addHeal] = bandage
    let time = 0;
    let healIndex = 1;
    let attackIndex = 0;
    while(attackIndex < attacks.length){
        const [attackTime, attackRate] = attacks[attackIndex]
    
        if(attackTime === time){
            health -= attackRate
            if(health <= 0) {
                return -1
            }

            healIndex = 1;
            time += 1
            attackIndex += 1;

            continue;
        }
       
        const healStack = Math.floor(healIndex / healTime)
        
        health += healRate + (addHeal * healStack)
        health = Math.min(health, maxHealth)
        healIndex += 1
        if(healStack > 0){
            healIndex = 1
        }
        time += 1
        
 }
    return health;
}
