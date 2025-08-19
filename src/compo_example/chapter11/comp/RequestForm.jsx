import React, { useState } from 'react'

const RequestForm = () => {
    const [value,setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleSubmit = (event) => {
        alert(`입력한 요청사항 : ${value}`)
        event.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <label >
            <textarea value={value} onChange={handleChange} placeholder='요청사항을 입력하세요' />
        </label>
        <button type='submit'>제출</button>
    </form>
  )
}

export default RequestForm