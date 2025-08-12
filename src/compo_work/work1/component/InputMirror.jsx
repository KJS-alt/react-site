import { useState } from "react"

export default function InputMirror() {

    const [text, setText] = useState("")

    return (
        <>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="입력하세요" />
            <p>입력된 값: {text}</p>
        </>

    )
}