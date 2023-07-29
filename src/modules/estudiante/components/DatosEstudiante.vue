<template>

    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante()"> Consultar </button>

</template>

<script>

import obtenerestudianteFachada from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
    };
  },

  methods:{
    //cuando creamos desde el MOUNTED no se pone async
    async consultarEstudiante(){//llamamos al metodo fachda
        await obtenerestudianteFachada(this.cedula) //enviamos la propiedad reactiva
    }
  }


};
</script>

<style>
</style>