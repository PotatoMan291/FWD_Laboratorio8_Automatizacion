function TaskCard({ task }) {
  return (
    <article className="task-card">
      <h3>{task.titulo}</h3>

      <p>{task.descripcion}</p>

      <p>
        <strong>Fecha límite:</strong> {task.fechaLimite}
      </p>

      <p>
        <strong>Estado:</strong>{" "}
        <span className={`status ${task.estado}`}>
          {task.estado}
        </span>
      </p>
    </article>
  );
}

export default TaskCard;