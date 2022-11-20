function solution(n, lost, reserve) {
     // 체육복을 잃어버렸으면서 여벌이 없는 경우(0개인 친구)
    let clothesLost = lost.sort((a,b)=> a-b).filter((lost) => !reserve.includes(lost));

    // 여벌이 있으면서 체육복을 잃어버리지 않은 경우(2개인 친구)
    let clothesReserve = reserve.sort((a,b)=> a-b).filter((reserve) => !lost.includes(reserve));
    
    
     return (
        // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
        n -
        clothesLost.filter((lost) => {
            // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
            const lend = clothesReserve.find(
                // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
                (reverse) => Math.abs(reverse - lost) == 1,
            );

            // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
            if (!lend) return lost;
            // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
            clothesReserve = clothesReserve.filter((reverse) => reverse !== lend);
        }).length
    );
}