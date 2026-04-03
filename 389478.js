function solution(n, w, num) {
    const currentHeight = Math.ceil(num/w);
    const currnetHeightIsEven = currentHeight % 2 === 0
    const basic = currnetHeightIsEven ? currentHeight * w -1 * num + 1 : w - (currentHeight * w - num)  
    let topHeight = Math.ceil(n/w)
    const topHeightIsEven = topHeight % 2 === 0
    const lastValue = (topHeightIsEven ? w * topHeight - basic + 1 : w * topHeight - (w - basic)) <= n ? 1 : 0
    return  topHeight - currentHeight + lastValue
}

