import React, { useEffect, useState } from 'react'

const ExUseEffect02 = () => {
    const [count, setCount] = useState(0)

    useEffect(
        () => {
            console.log('count 값이 바뀔때마다 실행 ${count}')
        }, [count]
    )
    return (
        <div>
            <p>카운트 {count}</p>
            <button onClick={() => setCount(count +1)}>++1 증가</button>
        </div>

    )
}
export default ExUseEffect02