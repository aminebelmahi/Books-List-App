<template>
  <div class="navbar">
    <nav class="nav-extended grey darken-3">
      <div class="nav-content">
        <router-link :to="{name: 'Index'}">
          <span class="nav-title">Books List</span>
        </router-link>

        <a href="#" class="btn-floating btn-large halfway-fab green">
          <router-link :to="{name: 'AddBook'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar nav {
  padding: 0 30px;
}
</style>
