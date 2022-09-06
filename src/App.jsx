import { useState, useEffect } from "react";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { ListaTareas } from "./Components/ListaTareas";


function App() {
  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})

  useEffect(()=>{
    const obtenerTareasLocalStorage=()=>{
      const tareasLocalStorage=localStorage.getItem('tareas')
      console.log(tareasLocalStorage)
    };
    obtenerTareasLocalStorage();
  },[])

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify( tareas ))
  },[tareas])


  const eliminarTarea=(id)=>{
    const actualizarTarea=tareas.filter( tarea=>tarea.id !== id );
    setTareas(actualizarTarea)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
        tarea={tarea}
        tareas={tareas}//bien
        setTareas={setTareas}//bien
        setTarea={setTarea}

        />
        <ListaTareas 
        tareas={tareas}
        setTarea={setTarea}
        eliminarTarea={eliminarTarea}
        />

        
      </div>
    </div>
  );
}
export default App;
