import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del form
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto de paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setEmail("");
    setPropietario("");
    setFecha("");
    setSintomas("");
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setPropietario(paciente.propietario);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  return (
    <div className="md:selection:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Patient Form
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and{" "}
        <span className="text-indigo-600 font-bold">Manage them.</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>All fields are required.</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's name
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name=""
            id="nombre"
            placeholder="Pet's name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's name
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name=""
            id="Propietario"
            placeholder="Owner's name"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            name=""
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge date
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name=""
            id="Alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounderd-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? "Edit Patient" : "Add patient"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
