<template>

    <div class="barraNavegacion">
  
          
        <div>
          <router-link to="/guardar"> guardar</router-link>
          <router-link to="/buscar">buscar</router-link>
          <router-link to="/actualizar">actualizar</router-link>
          <router-link to="/eliminar">eliminar</router-link>
  
        </div>
    </div>
  
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  
  
  
  div a{
      font-weight: bold;
      color: cornflowerblue;
      margin: 0 10px;
      font-size: 20px;
  }
  
  a:hover{
    color: aliceblue;
  }
  
  .barraNavegacion{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(148, 24, 24, 0.3);
     
  }
  
  div img{
    width: 50px;
    height: 50px;
  }
  
  
  </style>
  