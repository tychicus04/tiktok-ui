import { useStore, actions } from './store'
import { useRef, useState } from 'react'

function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    const inputElement = useRef()
    const [isEdit, setIsEdit] = useState(false)

    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
        inputElement.current.focus();
    }
    const handleEdit = () => {
        dispatch(actions.editTodoInput(todoInput));
        inputElement.current.focus();
    }
    const handleDelete = () => {
        dispatch(actions.deleteTodoInput(index))
    }
    const handleDeleteAll = () => {
        dispatch(actions.deleteALlTodoInput())
    }


    const handleButton = () => {
        if (isEdit) {
            handleEdit()
        } else handleAdd() 
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
                    <button onClick={handleDelete}>&times;</button>
                </li>
            ))}
        </div>
    )
}

export default App