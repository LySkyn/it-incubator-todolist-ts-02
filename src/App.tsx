import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

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


    const removeTask = (taskID: number) => {
        setTask1(tasks1.filter((el) => el.id !== taskID))
    }
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                removeTask={removeTask}/>
        </div>
    );
}

export default App;
