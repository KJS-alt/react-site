import React, { useState, useMemo } from 'react'

function heavyCalculation(num) {
  console.log("무거운 계산 실행 중")
  let total = 0
  for (let i = 0; i < 1e7; i++) {
    total = total + num
  }
  return total
}

const Ex_memo2 = () => {
  const [num, setNum] = useState(1)
  const [theme, setTheme] = useState(false)

  const total = useMemo(() => {
   return heavyCalculation(num)


  }, [num])

  return (
    <div style={{
      background: theme ? "#222" : "yellow",
      color: theme ? "#fff" : "red"
    }}>
      <h1 style={{color: "black"}}>useMemo 예제2</h1>
      <input type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))} />
      <p>결과 {total}</p>
      <button onClick={() => setTheme((t) => !t)} >테마 변경</button>

    </div>
  )
}

export default Ex_memo2