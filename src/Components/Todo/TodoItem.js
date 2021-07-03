import React from 'react'
import { UilTimes   } from '@iconscout/react-unicons'
import './style.css'


export default function Todo(props) {
    return (
        <div className='todoItemContainer'>
            <span className={'todoItem' + ' ' + props.checked} onClick={props.makeComplete}>
                {props.text}
            </span>
            <UilTimes   className='todoIcon' onClick={props.removeItem}/>
        </div>
    )
}

