import React, { useState, useMemo } from 'react'

// 자식 컴포넌트: 내부에서 사용할 때 export, import 필요없다.
function Child({config}) {
  console.log("child 렌더링")
  return <div>오늘의 테마는: {config.theme}</div>
}

const Ex_memo4 = () => {
  const [theme, setTheme] = useState("light")

  const config = useMemo(
    () => ({ theme }), [theme]
  )

  return (
    <div>
      <h1>useMemo 예제4</h1>
      {/* 컴포넌트 */}
      <Child config = {config}></Child>
      <button
        onClick={() => setTheme(
          (t) => (t === "light" ? "dark" : "light")
        )}>
        테마변경
      </button>
    </div>
  )
}

export default Ex_memo4