import React from 'react'
import NameForm from './comp/NameForm'
import RequestForm from './comp/RequestForm'
import FruitSelect from './comp/FruitSelect'
import Reservation from './comp/Reservation'
import SignUp from './comp/SignUp'

function Chapter11() {
  return (
    <div>
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