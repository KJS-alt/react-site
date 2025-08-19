import React from 'react'

const Counter = (props) => {

    let count = 0;
  return (
    <div>
        <p>총 {count}번 클릭했습니다.</p>
        <button onClick={() => count++ }>클릭릭</button>
    </div>
  )
}

export default Counter