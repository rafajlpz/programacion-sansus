<template>
  <HeaderSection />

  <nav class="header-nav-app-laptop">
    <ul class="header-logo">
      <li><a href="#">lOGO</a></li>
    </ul>
    <ul class="menu-buttons-laptop">
      <li class="element-button-laptop">
        <router-link class="inicio-web" :to="{ name: 'Home' }">
          <i class="fas fa-home"></i> Inicio </router-link>
      </li>

      <li class="element-button-laptop">
        <a href="#"><i class="fas fa-image"></i> Catalogo</a>
      </li>
      <li class="element-button-laptop">
        <a href="#"><i class="fas fa-map-marked-alt"></i>Mapa</a>
      </li>
      <li class="element-button-laptop">
        <a href="#"><i class="fa-solid fa-upload"></i>Cargar Arbol</a>
      </li>
      <li class="header-search-laptop">
        <a class="btn-search-laptop" href="#"><i class="fas fa-search"></i></a
        ><input type="search" placeholder="Buscar" />
      </li>
    </ul>
  </nav>

  <FooterSection />
</template>

<script>
import FooterSection from "../page_structure/FooterSection.vue";
import HeaderSection from "../page_structure/HeaderSection.vue";
export default {
  components: { FooterSection, HeaderSection },
};
</script>

<style>
.header-nav-app-laptop {
  background-color: var(--colorprincipal);
  text-transform: uppercase;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
}
.header-logo {
  display: flex;
  height: 100%;
  flex-grow: 1;
}
.header-logo li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 40px;
  color: var(--colortitulo);
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;
  padding: 0 10px;
}

.menu-buttons-laptop {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  height: 60px;
}
.menu-buttons-laptop li {
  width: 130px;
  height: 100%;
  border-left: 3px solid white;
}

.menu-buttons-laptop .element-button-laptop a {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--colortitulo);
  font-size: 14px;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.2s linear;
}
.menu-buttons-laptop .element-button-laptop a i {
  font-size: 0px;
  transition: all 0.2s linear;
}

/* Hover elementos buttons */

.menu-buttons-laptop .element-button-laptop a:hover {
  height: calc(100% + 10px);
  background-color: var(--colorprincipal);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 0px 10px 4px white;
  transform: scale(1.02);
  animation: bounceAnimation 1.3s ease;
}
.menu-buttons-laptop .element-button-laptop:hover i {
  display: block;
  font-size: 22px;
  padding-bottom: 5px;
}

/* buscador menu laptop    */
.menu-buttons-laptop .header-search-laptop {
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  width: 50px;
}
.menu-buttons-laptop .header-search-laptop a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.menu-buttons-laptop .header-search-laptop a i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: var(--colortitulo);
  text-align: center;
  width: 100%;
  height: 100%;
}
.menu-buttons-laptop .header-search-laptop input {
  font-size: 16px;
  width: 0px;
  height: 22px;
  border: none;
  transition: all 0.2s linear;
}

/* hover busqueda */
.menu-buttons-laptop .header-search-laptop:hover i {
  animation: bounceAnimation 2s infinite;
}
@keyframes bounceAnimation {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-5px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}

.search-li-animation {
  width: 250px !important;
}
.search-li-animation input {
  width: 200px !important;
  margin-right: 10px;
  padding: 2px;
}
.search-li-animation input:focus {
  outline: none;
}

@media screen and (max-width: 1080px) {
  .header-nav-app-laptop {
    display: none;
  }
  .header-nav-app {
    display: flex;
  }
  .menu-principal {
    display: flex;
  }
  body {
    padding-top: 40px;
    padding-bottom: 50px;
  }
  .carrusel {
    height: 100px;
  }
}
</style>