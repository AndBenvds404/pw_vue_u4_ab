<template>

  
<div class="contain">

    <div class="caja-datos">
            <div  class="shadow-lg p-3 mb-5 bg-body rounded">

            
              <div class="form-floating mb-3">
                <input v-model="cedula" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Cedula</label>
                <button class="btn btn-primary" @click="consultarEstudiante"> Consultar </button>
              </div>

          
              <div class="form-floating mb-3">
                <input v-model="nombre" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Nombre</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="apellido" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Apellido</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="provincia" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Provincia</label>
              </div>

        
          </div>
    </div>



</div>


</template>

<script>

import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido:null,
      provincia:null
    };
  },

  methods:{
    //cuando creamos desde el MOUNTED no se pone async
    async consultarEstudiante(){//llamamos al metodo fachda
        const{nombre,apellido,provincia}= await obtenerEstudianteFachada(this.cedula) //enviamos la propiedad reactiva
        console.log(this.cedula)
        console.log(nombre)
        this.nombre=nombre;
        this.apellido=apellido;
        this.provincia=provincia

       
    }
  }


};
</script>

<style scoped>

.button-buscar{
  margin: 17px;
}

.caja-datos{

align-items: center;
}

.shadow-lg{
margin-top: 100px;
display: inline-block;
width: 500px;

}

.btn {
 margin: 17px;
}

</style>