<template>

  <div class="contain">

    <div class="caja-datos">
            <div  class="shadow-lg p-3 mb-5 bg-body rounded">

            
              <div class="form-floating mb-3">
                <input v-model="cedula" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">cedula</label>
              </div>

          
              <div class="form-floating mb-3">
                <input v-model="nombre" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">nombre</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="apellido" type="ext" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">apellido</label>
              </div>

              <button class="btn btn-primary" @click="guardarEstudiante">Guardar</button>
        
          </div>
    </div>
    

    
  </div>
  
  </template>
  
  <script>

  import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
  export default {
  
    data() {
      return {
        cedula: null,
        nombre: null,
        apellido:null
      };
    },
  
    methods:{
            async guardarEstudiante(){
                const data = {
                    cedula: this.cedula,
                    nombre:this.nombre,
                    apellido:this.apellido,
                    provincia: "Guayas"
                };
                ingresarEstudianteFachada(data)
            }
      }
    
  
  
  };
  
  </script>
  
  <style scoped> 

  
  .caja-datos{

    align-items: center;
  }

  .shadow-lg{
    margin-top: 100px;
    display: inline-block;
    width: 500px;

    
  }
  
  </style>