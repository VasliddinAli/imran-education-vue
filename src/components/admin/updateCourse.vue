<template>
  <div class="addteachers">
    <form class="add">
      <h1>Update Course</h1>
      <label>Course image</label>
      <input type="text" v-model="course.imgUrl" required />
      <label>Course name</label>
      <input type="text" v-model="course.name" required />
      <label for="price">Price</label>
      <input type="text" id="price" v-model="course.price" required />
      <label>Description</label>
      <textarea type="text" v-model="course.description" required></textarea>
      <button @click="updateCourse">Update Course</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      course: {
        imgUrl: "",
        name: "",
        description: "",
        price: "",
      },
    };
  },
  methods: {
    async updateCourse(e) {
      e.preventDefault();
      const result = await axios.put(
        "https://imran-db.up.railway.app/courses/" + this.$route.params.id,
        {
          imgUrl: this.course.imgUrl,
          name: this.course.name,
          description: this.course.description,
          price: this.course.price,
        }
      );
      if (result.status == 200) {
        this.$router.push("/adminPanel/adminCourses");
      }
    },
  },
  async mounted() {
    {
      const result = await axios.get(
        "https://imran-db.up.railway.app/courses/" + this.$route.params.id
      );
      this.course = result.data;
    }
  },
};
</script>
<style>
table,
th,
td {
  padding: 10px;
}
table {
  margin: 30px;
}
tr td:nth-child(5) {
  width: 200px;
  text-align: center;
}
tr td:nth-child(3) {
  width: 200px;
  text-align: center;
}
</style>