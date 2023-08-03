<template>
  
    <label for="">Cedula</label>
      <input type="text" v-model="cedula">
  
      <label for="">Nombre</label>
      <input type="text" v-model="nombre">
  
      <label for="">Apellido</label>
      <input type="text" v-model="Apellido">
  
      <button @click="guardarEstudiante">Guardar</button>
  </template>
  
  <script>

  import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
  export default {
  
    data() {
      return {
        cedula: null,
        nombre: null,
        apellido:null
      };
    },
  
    methods:{
            async guardarEstudiante(){
                const data = {
                    cedula: this.cedula,
                    nombre:this.nombre,
                    apellido:this.apellido,
                    provincia: "Guayas"
                };
                ingresarEstudianteFachada(data)
            }
      }
    
  
  
  };
  
  </script>
  
  <style>
  
  </style>