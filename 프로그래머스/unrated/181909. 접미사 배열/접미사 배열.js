function solution(my_string) {
    const strLength = my_string.length
    return [...my_string].reduce((acc, cur, idx) => {
        const curStr = my_string.slice(idx, strLength)
        return [...acc, curStr]
    }, []).sort()
}