const getGCD = (n,m) => {
    let r = n % m;
    
    while(m > 0){
        if(n % m === 0) return m;
        n = m;
        m = r;
        r = n % m;
    }
    return m;
}

function solution(n, m) {
    if(n <= m){
        [n,m] = [m, n];
    }
    const gcd = getGCD(n,m);
    const gcf = (n*m) / gcd;
    
    return [gcd,gcf]
}