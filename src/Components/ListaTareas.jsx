import { Tareas } from "./Tareas";

export const ListaTareas = ({ tareas, setTarea }) => {
  return (
    <div className="md:w-1/2 lg:2/5 mx-5 mb-10 mt-5 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          {" "}
          (
          <h2 className="text-red-600 font-black text-3xl text-center mb-10">
            Mis Tareas Pendientes 📚
          </h2>
          {tareas.map((tarea) => {
            return <Tareas key={tarea.id} tarea={tarea} setTarea={setTarea}/>;
          })}
          )
        </>
      ) : (
        <h2 className="text-violet-700 font-black text-3xl text-center mb-10">
            No tienes Tareas Pendientes 🤷‍♂️
          </h2>
      )}
    </div>
  );
};
