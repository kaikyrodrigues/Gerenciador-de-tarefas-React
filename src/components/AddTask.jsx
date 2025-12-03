import { useState } from "react"

export default function AddTask({propAddTask}){
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");

    return(
        <div className="flex flex-col p-6 bg-slate-200 rounded-md shadow gap-2">
            <input className="border border-slate-300 focus:outline-slate-400 px-4 py-2 rounded-md outline-none"
             type="text" placeholder="Digite uma tarefa" value={title} onChange={(evt)=>setTitle(evt.target.value)}/>

            <input className="border border-slate-300 focus:outline-slate-400 px-4 py-2 rounded-md outline-none" 
             type="text" placeholder="Digite uma descrição" value={description} onChange={(evt)=>setDescription(evt.target.value)}/>
            <button onClick={()=>{
                if(!title.trim() || !description.trim()){
                   return alert("Titulo ou descrição está em branco!")
                }
                propAddTask(title, description);
                setTitle("");
                setDescription("");}} className="bg-cyan-700 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}