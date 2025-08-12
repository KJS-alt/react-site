import React, {useEffect} from 'react'

const ExUseEffect01 = () => {
    useEffect(
        () => {
            console.log("컴포넌트가 마운트되었습니다.")
        }, [])
    return (
        <div>
            <h1>안녕 useEffect</h1>
        </div>
    )
}
export default ExUseEffect01