import React from 'react'
import NameForm from './comp/NameForm'
import RequestForm from './comp/RequestForm'
import FruitSelect from './comp/FruitSelect'
import Reservation from './comp/Reservation'
import SignUp from './comp/SignUp'

function Chapter11() {
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', border: '1px solid black' }}>
        폼 처리 (NameForm, RequestForm, FruitSelect)
      </h2>
      <NameForm />
      <br />
      <hr />
      <RequestForm />
      <br />
      <hr />
      <FruitSelect />
      <br />
      <hr />
      <Reservation />
      <br />
      <hr />
      <SignUp />
    </div>
  )
}

export default Chapter11