import { useState } from "react"

function TodoList(){
    const [tasks, setTasks] = useState(["Do homework", "Create an app"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => index !== i)
        setTasks(updatedTask)
        
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Write your task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
                <ol className="list">
                    {tasks.map((task, index) => <li key={index}>
                    <span className="task-text">{task}</span>
                    <button className="delete-button" onClick={() => {deleteTask(index)}}>Delete Task</button>
                    <button className="move-button" onClick={() => {moveTaskUp(index)}}>⬆️</button>
                    <button className="move-button" onClick={() => {moveTaskDown(index)}}>⬇️</button></li>)}
                </ol>
            </div>
        </div>
    )

}
export default TodoList