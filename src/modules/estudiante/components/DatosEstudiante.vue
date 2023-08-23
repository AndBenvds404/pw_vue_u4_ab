<template>

    <input v-model="cedula" type="text" class="form-floating mb-3">
    <button @click="consultarEstudiante"> Consultar </button>

    <label for="">Nombre</label>
    <input type="text" v-model="nombre">

    <label for="">Apellido</label>
    <input type="text" v-model="Apellido">
    

</template>

<script>

import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido:null
    };
  },

  methods:{
    //cuando creamos desde el MOUNTED no se pone async
    async consultarEstudiante(){//llamamos al metodo fachda
        await obtenerEstudianteFachada(this.cedula) //enviamos la propiedad reactiva
       
    }
  }


};
</script>

<style>

.form-floating{

}

</style>