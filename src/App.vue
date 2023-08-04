<template>


  <NavBar/>
  <br>
  <br>
  <router-view/>

  
  
  
</template>

<script>
import DatosEstudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'

import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';
import NavBar from './modules/estudiante/components/NavBar.vue';
export default {
  name: 'App',
  components: {

      NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
