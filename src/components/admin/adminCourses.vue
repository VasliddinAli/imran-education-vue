<template>
  <div class="adminUsers">
    <router-link to="/adminPanel">Back to Admin Panel</router-link>
    <div class="addteachers">
      <form submit.prevent>
        <h1>Add courses</h1>
        <label>Course image</label>
        <input type="text" v-model="imgUrl" required />
        <label>Course name</label>
        <input type="text" v-model="name" required />
        <label for="price">Price</label>
        <input type="text" id="price" v-model="price" required />
        <label>Description</label>
        <textarea type="text" v-model="description" required></textarea>
        <button @click="addTeacher">Add Course</button>
      </form>
    </div>
    <div class="table">
      <table border="1" style="border-collapse: collapse">
        <tr>
          <th>ID</th>
          <th>Course image</th>
          <th>Course name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        <tr v-for="course of courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td><img :src="course.imgUrl" alt="" /></td>
          <td>{{ course.name }}</td>
          <td>{{ course.description }}</td>
          <td>
            {{ course.price }}
          </td>
          <td>
            <button>
              <router-link :to="'/adminPanel/updateCourse/' + course.id"
                >Update</router-link
              >
            </button>
            <button @click="deleteCourse(course.id)">DELETE</button>
          </td>
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
      courses: [],
      imgUrl: "",
      name: "",
      description: "",
      price: "",
    };
  },
  methods: {
    async addTeacher(e) {
      e.preventDefault();
      if (this.imgUrl && this.name && this.description && this.price) {
        let result = await axios.post("https://imran-db.up.railway.app/courses", {
          imgUrl: this.imgUrl,
          name: this.name,
          description: this.description,
          price: this.price,
        });
        if (result.status == 201) {
          console.log("Teacher success added!");
          this.loadData();
          this.imgUrl = null;
          this.name = null;
          this.description = null;
          this.price = null;
        }
      }
    },
    async deleteCourse(id) {
      let result = await axios.delete("https://imran-db.up.railway.app/courses/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let result = await axios.get("https://imran-db.up.railway.app/courses");
      this.courses = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>