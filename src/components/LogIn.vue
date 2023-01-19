<template>
    <div class="auth">
      <router-link to="/"><i class="fa-solid fa-xmark"></i></router-link>
      <div class="kirish">
        <h1>Kirish</h1>
        <form @submit.prevent>
          <label for="phone">Phone</label>
          <input id="phone" type="tel" v-model="phone" required />
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
          <input class="btn" type="submit" value="Kirish" @click="login" />
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
          Hisobingiz yo'qmi?
          <router-link to="/signup">Ro'yxatdan o'tish</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SignUp",
    data() {
      return {
        phone: "",
        password: "",
      };
    },
    methods: {
      async login(e) {
        e.preventDefault();
        if (this.phone && this.password) {
          let result = await axios.get(
            `https://imran-db.up.railway.app/user?phone=${this.phone}&password=${this.password}`
          );
          if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(result.data[0]));
            this.$router.push({ name: "Home" });
          } else("Phone or password enter the error!");
          console.warn(result);
        } else alert("Phone or password not enter!");
      },
    },
    mounted() {
      {
        let user = localStorage.getItem("user-info");
        if (user) {
          this.$router.push({ name: "Home" });
        }
      }
    },
  };
  </script>