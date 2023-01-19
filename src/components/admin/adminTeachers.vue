<template>
  <div class="adminUsers">
    <router-link to="/adminPanel">Back to Admin Panel</router-link>
    <div class="addteachers">
      <form submit.prevent>
        <h1>Add teachers</h1>
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="name" required />
        <label for="teacherImg">Your Image</label>
        <input type="file" id="teacherImg" @change="previewFiles" multiple required>
        <label for="Phone">Phone</label>
        <input type="tel" id="Phone" v-model="phone" required />
        <label for="direction">Direcion</label>
        <input type="text" id="direction" v-model="direction" required />
        <label for="telegram">Telegram</label>
        <input type="text" id="telegram" v-model="telegram" required />
        <button @click="addTeacher">Add teacher</button>
      </form>
    </div>
    <div class="table">
      <table border="1" style="border-collapse: collapse">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Phone</th>
          <th>Direction</th>
          <th>Telegram</th>
        </tr>
        <tr v-for="teacher of teachers" :key="teacher.id">
          <td>{{ teacher.id }}</td>
          <td>{{ teacher.name }}</td>
          <td><img width="200px" :src="teacher.teacherImg"></td>
          <td>{{ teacher.phone }}</td>
          <td>{{ teacher.direction }}</td>
          <td><a :href="teacher.telegram">Telegram</a></td>
          <td><button @click="deleteTeacher(teacher.id)">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      teachers: [],
      name: "",
      teacherImg: [],
      phone: 998,
      direction: "",
      telegram: "https://t.me/",
    };
  },
  methods: {
    previewFiles(e) {
      const files = e.target.files
      if (!files.length) return
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.teacherImg = reader.result)
    },
    async addTeacher(e) {
    e.preventDefault();
      if(this.name && this.teacherImg && this.phone && this.direction && this.telegram){
        let result = await axios.post("https://imran-db.up.railway.app/teachers", {
          name: this.name,
          teacherImg: this.teacherImg,
          phone: this.phone,
          direction: this.direction,
          telegram: this.telegram,
        });
        if (result.status == 201) {
          console.log("Teacher success added!");
          this.loadData();
        }
      }
    },
    async deleteTeacher(id) {
      let result = await axios.delete("https://imran-db.up.railway.app/teachers/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let result = await axios.get("https://imran-db.up.railway.app/teachers");
      this.teachers = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
