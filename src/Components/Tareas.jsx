export const Tareas = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

 /* const handleEliminar = () => {
    const respuesta = confirm("¿Desea Eliminar esta tarea? 🤔");
    if (respuesta) {
      eliminarTarea(id);
    }
  };*/
  return (
    <div className=" bg-white shadow-md px-5 py-10 rounded-lg mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo: <span className="font-normal normal-case">{titulo}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripcion:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 hover:bg-700 mt-4 rounded-md text-white font-bold p-1.5 py-2"
          type="button"
          onClick={() => setTarea(tarea)}
        >
          ♻️ Actualizar
        </button>

        <button
          className="bg-violet-600 hover:bg-700 mt-4 rounded-md text-white p-1.5 font-bold"
          type="button"
          onClick={()=>eliminarTarea(id)}
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};
