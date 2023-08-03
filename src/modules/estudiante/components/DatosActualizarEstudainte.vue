<template>
  
  <label for="">id</label>
      <input type="text" v-model="id">

    <label for="">Cedula</label>
      <input type="text" v-model="cedula">
  
      <label for="">Nombre</label>
      <input type="text" v-model="nombre">
  
      <label for="">Apellido</label>
      <input type="text" v-model="Apellido">
  
      <button @click="actualizatEstudiante">actualizar</button>
  </template>
  
  <script>

  import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"
  export default {
  
    data() {
      return {
        id:null,
        cedula: null,
        nombre: null,
        apellido:null
      };
    },
  
    methods:{
            async actualizatEstudiante(){
                const data = {
                    cedula: this.cedula,
                    nombre:this.nombre,
                    apellido:this.apellido,
                    provincia: "Guayas"
                };
                await actualizarEstudianteFachada(data, this.id)
            }
      }
    
  
  
  };
  
  </script>
  
  <style>
  
  </style>