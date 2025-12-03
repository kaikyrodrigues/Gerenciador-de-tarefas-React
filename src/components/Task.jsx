import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Task(props){

    const navigate = useNavigate();

    function seeDetails(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);


        navigate(`/task?${query.toString()}`);
    }


    return(
  
            <ul className="gap-1 flex flex-col p-6 bg-slate-200 rounded-md shadow">
                {props.task.map(tarefa => 
                <li key={tarefa.id} className={`text-white gap-2 p-2 rounded-md cursor-pointer flex`}>
                    <button onClick={()=> props.onTaskClick(tarefa.id)} className={`bg-slate-400 text-white  p-2 rounded-md cursor-pointer flex w-full text-left ${tarefa.isCompleted && 'line-through'}`}
                        
                        >{tarefa.title}</button>
                    <button onClick={()=> seeDetails(tarefa)} className="bg-slate-400 text-white  p-2 rounded-md cursor-pointer flex"><ChevronRightIcon /></button>
                    <button onClick={()=> props.propdelete(tarefa.id)} className="bg-slate-400 text-white  p-2 rounded-md cursor-pointer flex"><TrashIcon /></button>
                    
                    </li>)}
            </ul>
       
    )
}
