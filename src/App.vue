<template>

    <h1>Buscar</h1>
  <DatosEstudiante/>
  <h1>guardar</h1>
  <GuardarEstudiante/>
  <h1>Actualizar</h1>
  <ActualizarEstudiante/>
 <h1>Eliminar</h1>
  <EliminarEstudiante/>
  
  
  
</template>

<script>
import DatosEstudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import GuardarEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue';
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue';
export default {
  name: 'App',
  components: {
    DatosEstudiante,
    GuardarEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante
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
