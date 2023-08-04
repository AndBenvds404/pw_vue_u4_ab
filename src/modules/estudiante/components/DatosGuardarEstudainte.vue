<template>

  <div class="contain">
      <label for="">Cedula</label>
      <input type="text" v-model="cedula">
  
      <label for="">Nombre</label>
      <input type="text" v-model="nombre">
  
      <label for="">Apellido</label>
      <input type="text" v-model="Apellido">

      <button @click="guardarEstudiante">Guardar</button>


      <label for="" v-if="check"> Se Insertó correctamente</label>
  </div>
  

  </template>
  
  <script>

  import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
  export default {
  
    data() {
      return {
        cedula: null,
        nombre: null,
        apellido:null,
        check:false,
      };
    },
  
    methods:{
             guardarEstudiante(){
              this.check = false
                const data = {
                    cedula: this.cedula,
                    nombre:this.nombre,
                    apellido:this.apellido,
                    provincia: "Guayas"
                };
                ingresarEstudianteFachada(data)
                this.check=true
            }
      }
    
  
  
  };
  
  </script>
  
  <style scoped>
  
  .contain{
    display: grid; 
    justify-content: center;
    align-items: center;
    width: 1400px;
    border: solid black 1px;
    
  }
  label{
    padding: 40xp;
    margin-top: 15px;
    width: 300px;
  }

  input{
    padding: 40xp;
    margin: 10px;
  }

  

  </style>
