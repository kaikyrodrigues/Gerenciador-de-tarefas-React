import Task from "./components/Task"
import AddTask from "./components/AddTask"
import { useEffect, useState } from "react"


export default function App(){

    const [tasks, setTasks]=useState(
      JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
     async function fetchTasks() {
       const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      const data = await response.json();
      setTasks(data);
     }
     
     //fetchTasks();
    }, [])

    function onTaskClick(taskID){
      const newTask = tasks.map( task => {
        if(task.id === taskID){
          return{...task, isCompleted: !task.isCompleted}
        }

        return task
      })
      setTasks(newTask)
    }

    function deleteTask(taskID){
     const newTask = tasks.filter((task)=> task.id !== taskID)
     setTasks(newTask)
    }
    function addTask(title, description){
      const newTask={
        id: tasks.length + 1,
        title: title,
        description: description,
        isCompleted: false
      }
      setTasks([...tasks, newTask])
    }
  return(

    <div className="w-screen h-screen bg-cyan-700 flex justify-center p-6">
      <div className="w-[500px] flex flex-col gap-2">
          <h1 className="text-3xl text-slate-200 font-bold text-center">Gerenciador de tarefas</h1>
          <AddTask propAddTask={addTask}/>
          <Task task={tasks} onTaskClick={onTaskClick} propdelete={deleteTask}/>
      </div>
    </div>
  )
}
  
