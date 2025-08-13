import React, { useState, useEffect } from 'react'

const Example4 = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    
    }, [])

return (
    <div>
        <h2>예제 4: API 호출</h2>
        <ul>
            {posts.map(
                (p) => 
                <li key={p.id}>{p.title}</li>
                
            )}
        </ul>
    </div>
)
}
export default Example4
