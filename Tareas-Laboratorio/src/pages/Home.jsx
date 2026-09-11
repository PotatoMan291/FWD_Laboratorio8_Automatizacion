function Home() {
  return (
    <section>
      <h1>Automatización de tareas</h1>

      <p>
        Aplicación desarrollada con React y n8n para detectar
        automáticamente tareas pendientes cuya fecha límite ya venció.
      </p>

      <div className="info-card">
        <h2>¿Qué automatiza?</h2>

        <p>
          El sistema revisará periódicamente las tareas almacenadas en la
          base de datos.
        </p>

        <p>
          Cuando una tarea se encuentre pendiente y su fecha límite ya haya
          pasado, será marcada automáticamente como vencida.
        </p>
      </div>
    </section>
  );
}

export default Home;