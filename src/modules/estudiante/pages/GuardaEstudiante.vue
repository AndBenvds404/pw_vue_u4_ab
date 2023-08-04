<template>
  <h1>Guardar Estudiante</h1>
  <DatosGuardarEstudainte/>
  
</template>

<script>

import DatosGuardarEstudainte from '../components/DatosGuardarEstudainte.vue'
export default {

    components:{
        DatosGuardarEstudainte
    },
    mounted(){
      const{cedula} = this.$route.params
      console.log('cedula: '+cedula)
    }

}
</script>

<style>

</style>