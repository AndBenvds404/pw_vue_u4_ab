import axios from "axios"


//export importa los metodos 
export const obtenerEstudiantFachada=async (cedula)=>{
    return await obtenerEstudianAPI(cedula)
}


export const ingresarEstudianteFachada=(bodyEstudiante)=>{//esta es el body que se va enviar

}

export const actualizarEstuianteFachada=(bodyEstudiante, id)=>{

}

export const eliminarEstudiante=()=>{

}

const obtenerEstudianAPI=async (cedula)=>{

    const data = await fetch(`http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`).then(r=r.json());
    console.log(data);
}



