function solution(lottos, win_nums) {
    let filter_lottos = lottos.filter((lotto)=>lotto !== 0)
    const zero_count = lottos.length - filter_lottos.length
    const win_set = new Set(win_nums)
    filter_lottos = filter_lottos.filter((lotto)=>win_set.has(lotto))
    const equal_count = filter_lottos.length
    return [7 - zero_count - equal_count, 7 - equal_count].map(v => v > 6 ? 6 : v);
}
