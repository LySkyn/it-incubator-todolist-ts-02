import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {TaskType} from "./Todolist";

export type FilterValuesType =  'all' | 'active' | 'completed'

function App() {

    // let tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "ReactJS2", isDone: false}
    // ]
    let [tasks1, setTask1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true}, //0
        {id: 2, title: "JS", isDone: true}, //1
        {id: 3, title: "ReactJS", isDone: false}, //2
        {id: 4, title: "ReactJS2", isDone: false} //3
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: number) => {
        setTask1(tasks1.filter((el) => el.id !== taskID))
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const getTasksForTodolist = () => {

        switch (filter) {
            case "active":
                return tasks1.filter(t => !t.isDone)
            case "completed":
                return tasks1.filter(t => t.isDone)
            default:
                return tasks1
        }
        //     let tasksForTodolist = tasks1
        //
        //     if (filter === 'active') {
        //         tasksForTodolist = tasks1.filter(t => !t.isDone)
        //     } // ===false
        //     if (filter === 'completed') {
        //         tasksForTodolist = tasks1.filter(t => t.isDone)
        //     } // ===true
        // return tasksForTodolist
    }

    return (

        <div className="App">
            <Todolist
                title="What to learn"
                tasks={getTasksForTodolist()}
                removeTask={removeTask}
                changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
