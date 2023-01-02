import {createContext, useState, useEffect} from "react";
import {tasks as data} from "../data/task.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])
    const createTask = (taskTitle, taskDescription) => {
        setTasks([...tasks, {
            title: taskTitle,
            id: tasks.length,
            description: taskDescription
        }])
    }
    const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id != taskId))

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
