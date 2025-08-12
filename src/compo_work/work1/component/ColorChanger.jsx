import { useState } from "react"

export default function ColorChanger() {

    const [color, setColor] = useState("blue")
    return(
        <>
        <h2 style={{color}}>색상 변경</h2>
        <button onClick={() => setColor("red")}>빨강</button>
        <button onClick={() => setColor("yellow")}>노랑</button>
        <button onClick={() => setColor("lightgreen")}>초록</button>
        </>
    )

}