//  count 상태를 관리하고 값이 바뀔 때마다 콘솔에 출력
import React, { useCallback, useState, useEffect } from 'react'

const Ex_callback4 = () => {
    //  count 상태(초기값 0)와 변경 함수
    const [ count, setCount] = useState(0)

    //  현재 count를 출력하는 함수를 메모이즈
    // count가 바뀔 때만 새 함수가 만들어짐
    const logCount = useCallback(() => {
        console.log(`현재 카운트: ${count}`)
    }, [count]);

    //  컴포넌트 마운트 및 logCount가 바뀔 때마다 실행 → 최신 count 출력
    useEffect(() => {
      logCount()
    }, [logCount])

    //  화면 표시 + 버튼 클릭 시 count를 1 증가
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+1 증가버튼</button>
      </div>
    )
}

export default Ex_callback4