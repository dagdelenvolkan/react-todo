import React, {useState, useEffect} from 'react'
import { UilPlus, UilTrash  } from '@iconscout/react-unicons'
import Todo from '../Todo/TodoItem'
import './style.css'


export default function ToDoList(props) {
    const [todos, setTodos] = useState([])
    const [inputTodo, setinputTodo] = useState('')

    const saveTodoData = (latestTodos) => {
        localStorage.setItem(`todoData${props.tabData}`, JSON.stringify(latestTodos))
    }

    useEffect(() => {
        if (localStorage.getItem(`todoData${props.tabData}`)) {
            setTodos(JSON.parse(localStorage.getItem(`todoData${props.tabData}`)));
        }}, []);

    const addItem = () => {
        let addTodos = [...todos, {id: Date.now(), baslik: inputTodo, completed:false}]
        setTodos(addTodos);
        setinputTodo('')
        saveTodoData(addTodos)
    }

    const removeCompleted = () => {
        let uncompTodos = todos.filter((todo) => todo.completed === false)
        setTodos([...uncompTodos])    
        saveTodoData([...uncompTodos])
    }

    const makeComplete = (todos, todo) => {
        let complete = todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item)
        setTodos(complete)
        saveTodoData(complete)
    }

    return (
        <div className='TodoApp'>
            <div className="todoTop">
                <input placeholder='Enter a task' type="todos" onChange={(e) => setinputTodo(e.target.value)} onKeyPress={(e)=> e.key === 'Enter' ? addItem() : null}  value={inputTodo}/>
                <button className='addTodoItem'
                onClick={removeCompleted}
                disabled={!todos.filter((todo) => todo.completed === true)[0]}
                >
                    <UilTrash/>
                </button>
                <button className='addTodoItem' disabled={!inputTodo} onClick={addItem}>
                    <UilPlus/>
                </button>
            </div>
            

            
            {todos.map((todo) => (

                <Todo 
                    text={todo.baslik}
                    makeComplete={() => makeComplete(todos, todo)}
                    removeItem = {()=> {
                        setTodos(todos.filter(item => item.id !== todo.id))
                    }}
                    key={todo.id}
                    checked = {todo.completed ? 'completed'  : ''}
                />
                ))}

            
        </div>
    )
}


