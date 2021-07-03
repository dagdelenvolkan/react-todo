import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { UilPlus, UilMultiply  } from '@iconscout/react-unicons'
import ToDoList from '../TodoList/ToDoList';
import 'react-tabs/style/react-tabs.css';
import './style.css'



export default function TabTodo() {
    const [tabs, setTabs] = useState([{title:'ToDo', id:1}])

    const addNewTab = () => {
        setTabs([...tabs, {title:'New Tab', id: Date.now()}])
    }

    const closeTab = (index) => {
        tabs.splice(index, 1)
        setTabs([...tabs]) 
    }

    const changeTabName = (e, tab) => {
        tab.title= e.target.value
        setTabs([...tabs]) 
    }

    return (
        <div className='tabToDoContainer'>
            <button className='addTab' onClick={() => addNewTab()}>
                <UilPlus/>
            </button>
            <Tabs forceRenderTabPanel={true}>
                <TabList>
                {tabs.map((tab, index) => (
                <Tab key={tab.id}>
                {tab.title}
                <UilMultiply className='tabCloseIcon'
                onClick={() => closeTab(index)}
                />
                </Tab>
                ))}
                </TabList>

                {tabs.map(tab => (
                <TabPanel key={tab.id}>
                    <div className='toDoTitle'>
                    <input type="text" className='tabTitle' value={tab.title} onChange={(e) =>  changeTabName(e, tab)}/>
                    </div>
                    <ToDoList />
                </TabPanel>
                ))}
            
        
            </Tabs>
        </div>
    )
}
