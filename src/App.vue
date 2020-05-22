<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
</style>

