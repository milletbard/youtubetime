<template>
  <nav class="navbar is-fixed-top header">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-size-4 has-text-primary">
          <logo style="margin-right: -10px;" />YoutubeTime</a
        >
        <!-- 
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggleBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>-->
      </div>
      <!-- 
      <div id="nav-menu" :class="`navbar-menu ${active ? 'is-active' : ''}`">
        <div class="navbar-start"></div>

        <div class="navbar-end">
     
          <div class="navbar-item">
            <router-link to="/">
              <a
                @click="openModal"
                class="has-text-weight-bold has-text-grey is-4 is-size-6-mobile"
                :underline="false"
              >載入</a>
            </router-link>
          </div>

      
        </div>
      </div>-->
    </div>
  </nav>
</template>
<script>
import Logo from './Logo'
export default {
  name: 'Navbar',
  components: {
    Logo
  },
  data: () => ({
    active: false
  }),
  methods: {
    toggleBurger() {
      const { active } = this
      this.active = !active
    }
  }
}
</script>
<style>
.navbar {
  border-bottom: 1px solid #526488;
}
/* @keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>
