import React from 'react'
import Counter from './comp/Counter'
import Effect from './comp/Effect'
import UserStatus from './comp/UserStatus'
import Ref from './comp/Ref'
import Accommodate from './comp/Accommodate'

function Chapter7() {
  return (
    <div>
      {/* <Counter />
      <hr />
      <Effect />
      <hr />
      <UserStatus />
      <hr />
      <Ref />
      <hr /> */}
      <h2 style={{ fontWeight: 'bold', border: '1px solid black' }}>
        Hook 사용법 (useState, useEffect, useRef)
      </h2>
      <Accommodate />
    </div>
  )
}

export default Chapter7