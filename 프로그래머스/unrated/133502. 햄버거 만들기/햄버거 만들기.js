function solution(ingredient) {
    let sandwichCount = 0; // 포장한 햄버거의 개수를 저장할 변수
    const stack = []; // 재료를 순서대로 쌓아둘 스택

    for (const ing of ingredient) {
        stack.push(ing); // 재료를 스택에 추가

        // 스택에 쌓인 재료가 [빵, 야채, 고기, 빵] 순서로 쌓였는지 확인
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            sandwichCount++; // 햄버거 포장 가능한 경우
            stack.splice(-4); // 스택에서 해당 재료 제거
        }
    }

    return sandwichCount;
}
