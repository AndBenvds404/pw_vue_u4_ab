<template>
  <input v-model="id" type="text"/>
  <button @click="eliminarEstudiante">eliminar</button>
</template>

<script>

import {eliminarEstudianteFachada} from "../helpers/EstudianteCliente.js"
export default {
    data(){
        return{
            id:null
        }

    },
    methods:{
        async eliminarEstudiante(){//llamamos al metodo fachda
             eliminarEstudianteFachada(this.id) //enviamos la propiedad reactiva
       
        }

    }

}
</script>

<style>

</style>