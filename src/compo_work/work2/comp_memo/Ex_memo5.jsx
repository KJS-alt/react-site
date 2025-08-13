import React, { useState, useMemo } from 'react'

const Ex_memo5 = () => {
  const [price, setPrice] = useState(1000)
  const [quantity, setQuantity] = useState(1)
  const [discount, setDiscount] = useState(0.1)

  const total = useMemo(() => {
    console.log("총액 계산")
    return (
      price * quantity * (1-discount)
    )
  }, [price * quantity, discount])
  
  return (
    <div>
      <h1>useMemo 예제5</h1>
      <label> 가격:{""}
        <input type="number"
        value = {price}
        onChange={(e) => setPrice(+e.target.value)} />
      </label>
      <br />
      <lable> 수량:{""}
        <input type="number"
        value = {quantity} 
        onChange = {(e) => setQuantity(+e.target.value)} />
      </lable>
      <br />
      <label> 할인율:{""}
        <input type="number" step = "0.1"
        value = {discount}
        onChange = {(e) => setDiscount(+e.target.value)} />
      </label>
      <h2>총액 : {total.toLocaleString()}원 입니다.</h2>
    </div>
  )
}

export default Ex_memo5