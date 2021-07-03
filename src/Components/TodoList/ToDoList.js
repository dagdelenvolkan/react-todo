import React, {useState} from 'react'
import { UilPlus, UilTrash  } from '@iconscout/react-unicons'
import Todo from '../Todo/TodoItem'
import './style.css'


export default function ToDoList() {
    const [todos, setTodos] = useState([])
    const [inputTodo, setinputTodo] = useState('')

    const addItem = () => {
        setTodos([...todos, {id: Date.now(), baslik: inputTodo, completed:false}]);
        setinputTodo('')
    }

    return (
        <div className='TodoApp'>
            <div className="todoTop">
                <input placeholder='Enter a task' type="todos" onChange={(e) => setinputTodo(e.target.value)} onKeyPress={(e)=> e.key === 'Enter' ? addItem() : null}  value={inputTodo}/>
                <button className='addTodoItem'
                onClick={(e) => {
                    let uncompTodos = todos.filter((todo) => todo.completed === false)
                    setTodos([...uncompTodos])
                }}
                >
                    <UilTrash/>
                </button>
                <button className='addTodoItem' disabled={!inputTodo} onClick={() => addItem()}>
                    <UilPlus/>
                </button>
            </div>
            

            {todos.map((todo) => (

                <Todo 
                    text={todo.baslik}
                    makeComplete={() =>  {
                        setTodos(todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item))
                    }}
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


