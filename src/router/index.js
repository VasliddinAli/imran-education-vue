import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import adminPanel from '../components/adminPanel.vue'
import adminCourses from "../components/admin/adminCourses.vue";
import updateCourse from "../components/admin/updateCourse.vue";
import adminMessages from "../components/admin/adminMessages.vue";
import adminTeachers from "../components/admin/adminTeachers.vue";
import adminUsers from "../components/admin/adminUsers.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/adminPanel',
    name: 'adminPanel',
    component: adminPanel
  },
  {
    path: "/adminPanel/adminCourses",
    name: "adminCourses",
    component: adminCourses,
  },
  {
    path: "/adminPanel/updateCourse/:id",
    name: "updateCourse",
    component: updateCourse,
  },
  {
    path: "/adminPanel/adminMessages",
    name: "adminMessages",
    component: adminMessages,
  },
  {
    path: "/adminPanel/adminTeachers",
    name: "adminTeachers",
    component: adminTeachers,
  },
  {
    path: "/adminPanel/adminUsers",
    name: "adminUsers",
    component: adminUsers,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
