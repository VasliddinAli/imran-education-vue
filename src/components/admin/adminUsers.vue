<template>
  <div class="adminUsers">
    <router-link to="/adminPanel">Back to Admin Panel</router-link>
    <div class="table">
      <table border="1" style="border-collapse: collapse;">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Password</th>
        </tr>
        <tr v-for="user of users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default ({
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    let result = await axios.get("https://imran-db.up.railway.app/user")
    this.users = result.data
  }
})
</script>
