import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Task Automation</h2>

      <div className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/tareas">Tareas</NavLink>
        <NavLink to="/workflow">Workflow</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;