import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Workflow from "../pages/Workflow";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tareas" element={<Tasks />} />
      <Route path="/workflow" element={<Workflow />} />
    </Routes>
  );
}

export default AppRoutes;