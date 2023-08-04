<template>
  <h1>Buscar Estudiante</h1>
    <DatosEstudiante/>
</template>

<script>
import DatosEstudiante from '../components/DatosEstudiante.vue'
import { obtenerEstudianteFachada } from '../helpers/EstudianteCliente'

export default {

  
  components: {
    DatosEstudiante
  },
  mounted(){
      const{cedula} = this.$route.params
      console.log('cedula: '+cedula)
      const obj =  obtenerEstudianteFachada(cedula)
      console.log(obj)
    }
}
</script>

<style>

</style>