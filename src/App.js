import { useStore, actions } from './store'
import { useRef, useState } from 'react'
import Item from './components/item'

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
    const handleDelete = (index) => {
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
            
            <Item  />
        </div>
    )
}

export default App
// óc chó 
// // {todos.map((todo, index) => (
//     <li key={index}>    
//     <button onClick={() => handleDelete(index)}>hehe</button>
//     <span>{todo}</span>
//     <button onClick={() => handleDelete(index)}>&times;</button>
// </li>
// ))}

// cai doan nay tao 1 file component khac ra
// con set cac state rieng cho no 
// ừ trông rài thiêtj