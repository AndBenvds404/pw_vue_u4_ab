import axios from "axios";

/* Fachadas */

const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
};

const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudiante(bodyEstudiante);
};

const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante,id);
};

const eliminarEstudianteFachada = (id) => {
  eliminarEstudiante(id)
};

/* Lambdas */

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8082/API/1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
};


const obtenerEstudianteAPIAxios = async ()=>{
    const data = axios.get(`http://localhost:8082/API/1.0/Matricula/estudiantes/${cedula}`
      ).then((r) => r.data);
      console.log(data)
}

const ingresarEstudiante = (bodyEstudiante)=>{

    axios.post(`http://localhost:8081/API/1.0/Matricula/estudiantes/`, bodyEstudiante).then(r => r.data);

}

const actualizarEstudiante = (bodyEstudiante, id)=>{
  axios.put(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante)
  .then(r=>r.data);
}

const eliminarEstudiante=(id)=>{
  axios.delete(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`).then(r=>r.data);
}


export {
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};