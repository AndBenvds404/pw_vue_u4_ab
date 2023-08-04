<template>

    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante"> Consultar </button>

    <label for="">Nombre</label>
    <input type="text" v-model="nombre">

    <label for="">Apellido</label>
    <input type="text" v-model="apellido">
    

</template>

<script>

import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
      nombre: null,
      apellido:null
    };
  },

  methods:{
    //cuando creamos desde el MOUNTED no se pone async
    async consultarEstudiante(){//llamamos al metodo fachda
        await obtenerEstudianteFachada(this.cedula) //enviamos la propiedad reactiva
       
    }
  },
  mounted(){
      const{cedula} = this.$route.params
      console.log('cedula: '+cedula)
      const obj =  obtenerEstudianteFachada(cedula)

      this.cedula=cedula
      const {ciudad,hoby} = this.$route.query 
      console.log(ciudad)
      console.log(hoby)


      //http://localhost:8080/...../ estudiante/{cedula}
      //http://localhost:8080/...../ estudiante/cedula/172777?ciudad=Quito
        http://localhost:8080/...../ estudiante?provincia=pichincha&ciudad=quito

      console.log(this.$route)
    
      
    }


  

};
</script>

<style>
</style>