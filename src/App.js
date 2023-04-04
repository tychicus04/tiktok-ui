import { useStore, actions } from './store'
import { useRef, useState } from 'react'

function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    const inputElement = useRef()
    const [isEdit, setIsEdit] = useState(false)
    const [currIndex, setCurrIndex] = useState()

    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
        inputElement.current.focus();
    }
    const handleEdit = () => {
        dispatch(actions.editTodoInput(todoInput));
        inputElement.current.focus();
    }
    const handleDeleteAll = () => {
        dispatch(actions.deleteALlTodoInput())
    }


    const handleButton = () => {
        if (isEdit) {
            handleEdit()
        } else handleAdd() 
    }

    const triggerEdit = (index) => {
        setIsEdit((prev) => true );
        setCurrIndex((prev) => index)
        inputElement.current.focus()
        dispatch(actions.setTodoInput(todos[index]))
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input
                value = {todoInput}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }
                }
                ref={inputElement}
            />

            <button onClick={handleButton}>{isEdit ? "Update" : "Add"}</button>
            <button onClick={handleDeleteAll}
            >DeleteAll</button>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button onClick={() => {
                        dispatch(actions.deleteTodoInput(index))
                    }}>&times;</button>
                    <button onClick={() => triggerEdit(index)}>Edit</button>
                </li>
            ))}
        </div>
    )
}

export default App