import React, {useState} from 'react'
import { UilPlus } from '@iconscout/react-unicons'
import Todo from '../Todo/TodoItem'
import './style.css'


export default function ToDoList() {
    const [text, setText] = useState([])
    const [baslik, setbaslik] = useState('')

    const addItem = () => {
        setText([...text, {id: Date.now(), baslik: baslik, completed:false}]);
        setbaslik('')
    }

    return (
        <div className='TodoApp'>
            <div className="todoTop">
                <input placeholder='Enter a task' type="text" onChange={(e) => setbaslik(e.target.value)} onKeyPress={(e)=> e.key === 'Enter' ? addItem() : null}  value={baslik}/>
                <button className='addTodoItem' disabled={!baslik} onClick={() => addItem()}>
                    <UilPlus/>
                </button>
            </div>
            

            {text.map((todo) => (

                <Todo 
                    text={todo.baslik}
                    makeComplete={() =>  {
                        setText(text.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item))
                    }}
                    removeItem = {()=> {
                        setText(text.filter(item => item.id !== todo.id))
                    }}
                    key={todo.id}
                    checked = {todo.completed ? 'completed'  : ''}
                />
            ))}
            
        </div>
    )
}


