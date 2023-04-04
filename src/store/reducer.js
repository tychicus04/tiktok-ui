import { ADD_TODO_INPUT, 
    SET_TODO_INPUT,
    DELETE_TODO_INPUT,
    DELETE_ALL_TODO_INPUT,
    EDIT_TODO_INPUT
} from "./constant"

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: ''
            }
        case DELETE_TODO_INPUT: {
            const newTodos = [...state.todos]
            newTodos.splice(Number(action.payload), 1)
            return {
                ...state,
                todos: newTodos,
                todoInput: ''
            }
        }
        case DELETE_ALL_TODO_INPUT:
            return {
                ...state,
                todos: [],
                todoInput: ''
            }
        case EDIT_TODO_INPUT: {
            const newTodos = [...state.todos]
            newTodos[Number(action.payload)] = state.todoInput
            return {
                todos: newTodos,
                todoInput: ''
            }
        }
        default: 
        throw new Error("Invalid error")
    }
}

export { initState }
export default reducer