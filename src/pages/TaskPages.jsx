import { useNavigate, useSearchParams } from "react-router-dom"
import { ChevronLeftIcon  } from "lucide-react"

export default function TaskPages(){
    const navigate = useNavigate();
    const [searchParams]=useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return(
        <div className="w-screen h-screen bg-cyan-700 flex justify-center p-6">
            
            <div className="w-[500px] flex flex-col gap-2">
                <div className="flex justify-center relative">
                    <button onClick={()=> navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-200"><ChevronLeftIcon/></button> 
                    <h1 className="text-3xl text-slate-200 font-bold text-center">Detalhes da tarefas</h1>
                    </div>
                      
                      <div className="bg-slate-200 p-4 rounded-md">
                        <h2 className="text-xl text-slate-500 font-bold">{title}</h2>
                        <p className="text-slate-500">{description}</p>
                      </div>
                  </div>
        </div>
    )
}