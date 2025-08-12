import { useState } from "react"

export default function TodoList() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    // function addTodo
    const addTodo = () => {
        if (todo.trim()) {
            // 할 일을 추가하면, todos에 값을 추가
            setTodos([...todos, todo])
            // todo상태를 초기화
            setTodo("")
        }
    }
    return (

        <>
            <h2>할 일 목록</h2>
            <input type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요" />
            <button onClick={addTodo}>추가</button>
            <ul>
                {
                    todos.map((item, index) => (
                        <li key = {index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}