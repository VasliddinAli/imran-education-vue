<template>
  <div class="loader">
    <span class="load"></span>
  </div>
  <styleCss />
  <ToastMenu />
  <router-view />
</template>


<script>
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 100);
});

import styleCss from "./components/css/style.css";

export default {
  components: {
    styleCss,
  },
};
</script>