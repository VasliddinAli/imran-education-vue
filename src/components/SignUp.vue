<template>
  <div class="auth">
    <router-link to="/"><i class="fa-solid fa-xmark"></i></router-link>
    <div class="kirish">
      <h1>Ro'yxatdan o'tish</h1>
      <form @submit.prevent>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name" required />
        <label for="phone">Phone</label>
        <input id="phone" type="phone" v-model="phone" required />
        <label for="password">Parol</label>
        <input id="password" type="password" v-model="password" required />
        <input
          class="btn"
          type="submit"
          value="Ro'yxatdan o'tish"
          @click="signup"
        />
      </form>
      <div class="or">
        <p class="or-line"></p>
        <p class="or-text">yoki</p>
        <p class="or-line"></p>
      </div>
      <div class="icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
      <p class="yesNo">
        Men ro'yxatdan o'tganman. <router-link to="/login">Kirish</router-link>
      </p>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      phone: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let result = await axios.post("https://imran-db.up.railway.app/user", {
        name: this.name,
        phone: this.phone,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push("/");
      }
    },
  },
  mounted() {
    {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push("/");
      }
    }
  },
};
</script>