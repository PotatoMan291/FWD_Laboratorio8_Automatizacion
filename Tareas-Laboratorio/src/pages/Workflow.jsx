import AutomationStatus from "../components/AutomationStatus";

function Workflow() {
  return (
    <section>
      <h1>Workflow de automatización</h1>

      <AutomationStatus estado="inactivo" />

      <div className="info-card">
        <h2>Disparador</h2>
        <p>Temporizador automático cada 10 segundos.</p>
      </div>

      <div className="info-card">
        <h2>Proceso</h2>

        <p>
          React enviará una solicitud al webhook de n8n.
        </p>

        <p>
          n8n comprobará las tareas pendientes y determinará si alguna se
          encuentra vencida.
        </p>
      </div>
    </section>
  );
}

export default Workflow;