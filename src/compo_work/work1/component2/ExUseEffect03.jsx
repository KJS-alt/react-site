import React, { useEffect, useState } from 'react'

const ExUseEffect03 = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            // setSeconds((prev) => prev + 1);    
            setSeconds(seconds + 1);
        }, 1000);

        return() => {
            clearInterval(timer)
            console.log("타이머 종료")
        }
    }, [])
    return (
        <div>
            <h1>{seconds} 초 경과</h1>
        </div>
    )
}

export default ExUseEffect03