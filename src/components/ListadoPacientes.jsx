import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Patient list
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{" "}
            <span className="text-indigo-600 text-bold">Patients and appointments</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding new patients and they will{" "}
            <span className="text-indigo-600 text-bold">
              appear here.
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
