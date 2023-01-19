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
        <tr v-for="message of messages" :key="message.id">
          <td>{{ message.id }}</td>
          <td>{{ message.name }}</td>
          <td>{{ message.phone }}</td>
          <td>{{ message.message }}</td>
          <td><button @click="deleteMsg(message.id)">DELETE</button></td>
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
      messages: []
    }
  },
  methods: {
    async deleteMsg(id) {
      let result = await axios.delete("https://imran-db.up.railway.app/messages/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData(){
      let result = await axios.get("https://imran-db.up.railway.app/messages")
      this.messages = result.data
    }
  },
  async mounted() {
    this.loadData();
  }
})
</script>
