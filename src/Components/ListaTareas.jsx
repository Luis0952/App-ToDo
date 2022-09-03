import { Tareas } from "./Tareas";

export const ListaTareas = ({tareas}) => {


  return (

    <div className="md:w-1/2 lg:2/5 mx-5 mb-10 mt-5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">Listado de Tareas</h2>

        {tareas.map((tarea)=>{
          return (
            <Tareas 
            tarea={tarea}
            />
          )
        })}
        
       
      </div>
  
  );
};
