import React, { useState, useMemo } from 'react'

const users = [
  { id: 1, name: "Kim", active: true },
  { id: 2, name: "Lee", active: false },
  { id: 3, name: "Park", active: true },
]

const Ex_memo3 = () => {
  const [showActive, setShowActive] = useState(true)

  const filteredUsers = useMemo(() => {
    console.log("사용자 필터링 실행")
    return users.filter((user) => user.active === showActive)
   }, [showActive])

  return (
    <div>
      <h1>useMemo 예제3</h1>
      <button onClick={() => setShowActive((a) => !a)}>
        {showActive ? "활성" : "비활성"} 사용자를 보려면 클릭하세요
      </button>
      <ul>
        {filteredUsers.map(
          (u) => (
            <li key = {u.id}>{u.name} 고객님</li>
          )
        )}
      </ul>
    </div>
  )
}

export default Ex_memo3