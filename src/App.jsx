import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { ListaTareas } from "./Components/ListaTareas";


function App() {
  const [tareas, setTareas] = useState([])
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
        tareas={tareas}
        setTareas={setTareas}
        />
        <ListaTareas 
        tareas={tareas}
        />

        
      </div>
    </div>
  );
}
export default App;
