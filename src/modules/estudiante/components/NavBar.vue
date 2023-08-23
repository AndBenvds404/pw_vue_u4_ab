<template>
  

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/guardar" class="nav-link" href="#"
                >guardar</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/buscar" class="nav-link" href="#"
                >buscar</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/actualizar" class="nav-link" href="#"
                >actualizar</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/eliminar" class="nav-link" href="#"
                >eliminar</router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
div a {
  font-weight: bold;
  color: cornflowerblue;
  margin: 0 10px;
  font-size: 20px;
}

a:hover {
  color: aliceblue;
}

.container-fluid{
background: #212529;
}


div img {
  width: 50px;
  height: 50px;
}
</style>
  