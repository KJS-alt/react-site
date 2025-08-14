import React, {useCallback, useState} from 'react'

const Ex_callback1 = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])
    console.log("컴포넌트 렌더링")
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+1 증가</button>
    </div>
  )
}

export default Ex_callback1