import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesFiltrados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesFiltrados);
  };

  return (
    <main className="bg-gray-100 ">
      <div className="container mx-auto pt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
