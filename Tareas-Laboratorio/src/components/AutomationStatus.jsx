function AutomationStatus({ estado }) {
  const mensajes = {
    inactivo: "Automatización inactiva",
    ejecutando: "Ejecutando automatización...",
    exito: "Automatización ejecutada correctamente",
    error: "Ocurrió un error en la automatización"
  };

  return (
    <div className={`automation-status ${estado}`}>
      <strong>Estado:</strong>{" "}
      {mensajes[estado] || estado}
    </div>
  );
}

export default AutomationStatus;