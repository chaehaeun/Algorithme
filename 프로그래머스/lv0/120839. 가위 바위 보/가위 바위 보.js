function solution(rsp) {
    return Array.from(rsp).map(v => {
        switch(+v) {
            case 2:
                return 0
            case 0:
                return 5
            default:
                return 2
        }
    }).join('');
}