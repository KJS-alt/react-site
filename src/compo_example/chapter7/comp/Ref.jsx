import React, { useRef } from 'react'

const Ref = () => {
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    
  return (
    <div>
        <input ref={inputElem} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}

export default Ref