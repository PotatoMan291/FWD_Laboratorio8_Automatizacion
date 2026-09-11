import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cargarTareas = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/tasks");

      if (!response.ok) {
        throw new Error("No se pudieron cargar las tareas");
      }

      const data = await response.json();

      setTasks(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  if (loading) {
    return <p>Cargando tareas...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section>
      <div className="page-header">
        <h1>Lista de tareas</h1>

        <button onClick={cargarTareas}>
          Actualizar
        </button>
      </div>

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
}

export default Tasks;