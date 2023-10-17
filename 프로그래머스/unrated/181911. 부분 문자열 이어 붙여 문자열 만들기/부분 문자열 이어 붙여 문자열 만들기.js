function solution(my_strings, parts) {
    return my_strings.reduce((acc, cur, idx) => {
        const [from, to] = parts[idx]
        const curSlice = cur.slice(from, to+1)
        return acc+curSlice
    }, "")
}