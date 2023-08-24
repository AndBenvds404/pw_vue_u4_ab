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
  
  const data = await fetch(`http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
   console.log(data);
  return data
 
};


const obtenerEstudianteAPIAxios = async (cedula)=>{
    //En el config vamos a enviar todos los datos de cabecera dentro de un cliente JS
    const headers={ //objeto JSON
      "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY5MjgzNTY5NywiZXhwIjoxNjkyODM2ODk3fQ.tW14X1iBeGOS9pYUgOyqDGfKccV2yFXVux82OsZyoC58Mc_VzTz6WrHx7QPu1HhbvxLx9cxBcUHvgho9IWG0aw",
      "mensaje": "valor1"
    }

    const data = axios.get(`http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then((r) => r.data);
      console.log(data)
      return data;
}

const ingresarEstudiante = (bodyEstudiante)=>{
  const headers={ //objeto JSON
    "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY5MjgzNTY5NywiZXhwIjoxNjkyODM2ODk3fQ.tW14X1iBeGOS9pYUgOyqDGfKccV2yFXVux82OsZyoC58Mc_VzTz6WrHx7QPu1HhbvxLx9cxBcUHvgho9IWG0aw",
    "mensaje": "valor1"
  }
    axios.post(`http://localhost:8081/API/1.0/Matricula/estudiantes`, bodyEstudiante,{headers:headers}).then(r => r.data);

}

const actualizarEstudiante = (bodyEstudiante, id)=>{
  const headers={ //objeto JSON
    "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY5MjgzNTY5NywiZXhwIjoxNjkyODM2ODk3fQ.tW14X1iBeGOS9pYUgOyqDGfKccV2yFXVux82OsZyoC58Mc_VzTz6WrHx7QPu1HhbvxLx9cxBcUHvgho9IWG0aw",
    "mensaje": "valor1"
  }
  axios.put(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers:headers})
  .then(r=>r.data);
}

const eliminarEstudiante=(id)=>{
  const headers={ //objeto JSON
    "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY5MjgzNTY5NywiZXhwIjoxNjkyODM2ODk3fQ.tW14X1iBeGOS9pYUgOyqDGfKccV2yFXVux82OsZyoC58Mc_VzTz6WrHx7QPu1HhbvxLx9cxBcUHvgho9IWG0aw",
    "mensaje": "valor1"
  }
  axios.delete(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`,{headers:headers}).then(r=>r.data);
}


export {
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};