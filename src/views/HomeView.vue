<template>
  <div>
    <!-- Main -->
    <section class="main">
      <header>
        <div class="header">
          <div class="header-logo">
            <img src="../assets/images/logo.jpg" alt="" />
          </div>
          <div class="header-links">
            <a href="tel:+998 33 171 71 78">
              <div>
                <i class="fa-solid fa-phone"></i>
              </div>
              <dir>
                <p>Contact Available</p>
                <p>+998 33 171 71 78</p>
              </dir>
            </a>
            <a href="#">
              <div>
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <dir>
                <p>Our Location</p>
                <p>Farg'ona, Quva tumani</p>
              </dir>
            </a>
            <a href="#contact">
              <button>Contact us</button>
            </a>
          </div>
        </div>
        <div class="line"></div>
        <div class="navbar">
          <a href="#">Home</a>
          <a href="#courses">Courses</a>
          <a href="#world">Choose</a>
          <a href="#teachers">Teachers</a>
          <a href="#price">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </header>
      <header id="mediaHeader">
        <div class="header">
          <div class="header-logo">
            <img src="../assets/images/logo.jpg" alt="" />
          </div>
          <div @click="navbarOpen" class="header-bars">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div v-if="headerLink" class="header-links">
            <div @click="navbarExt" class="navbar">
              <i class="fa-solid fa-xmark"></i>
              <a href="#">Home</a>
              <a href="#courses">Courses</a>
              <a href="#world">Choose</a>
              <a href="#teachers">Teachers</a>
              <a href="#price">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
            <div @click="navbarExt">
              <a href="tel:+998 33 171 71 78">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <dir>
                  <p>Contact Available</p>
                  <p>+998 33 171 71 78</p>
                </dir>
              </a>
              <a href="#">
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <dir>
                  <p>Our Location</p>
                  <p>New York city, US</p>
                </dir>
              </a>
              <a @click="navbarExt" href="#contact">
                <button>Contact us</button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="menu">
          <h3>Best educational landing page</h3>
          <h1>Education and Training Organization.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <router-link to="/signup"><button>More About Us</button></router-link>
        </div>
      </main>
    </section>

    <!-- MARKET -->
    <section>
      <div class="market">
        <div class="market-top">
          <h1>THE MOGUL MARKET</h1>
          <img src="../assets/images/design.png" alt="" />
        </div>
        <div class="market-basic">
          <div class="scroll">
            <div class="scroll-in">
              <img src="../assets/images/business.png" alt="" />
              <h1>BUSINESS SETUP</h1>
              <p>
                Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod
                tempor incididunt uty labore et dolore magna aliqua. Ut enimd
                minim, quis nostrud
              </p>
            </div>
          </div>
          <div class="scroll">
            <div class="scroll-in">
              <img src="../assets/images/creative.png" alt="" />
              <h1>CREATIVE</h1>
              <p>
                Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod
                tempor incididunt uty labore et dolore magna aliqua. Ut enimd
                minim, quis nostrud
              </p>
            </div>
          </div>
          <div class="scroll">
            <div class="scroll-in">
              <img src="../assets/images/marketing.png" alt="" />
              <h1>MARKETING</h1>
              <p>
                Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod
                tempor incididunt uty labore et dolore magna aliqua. Ut enimd
                minim, quis nostrud
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses -->
    <section id="courses">
      <div class="courses">
        <div class="courses-basic">
          <div class="courses-basic-top">
            <h1>Our Popular <span>Courses</span></h1>
            <p>A modern and unique style</p>
          </div>
          <div class="courses-basic-bottom">
            <div v-for="course of courses" :key="course.id" class="card">
              <div class="img"><img :src="course.imgUrl" alt="" /></div>
              <h2>{{ course.name }}</h2>
              <p>
                {{ course.description }}
              </p>
              <div class="course-price">
                <h3>{{ course.price }}</h3>
                <button>Subscribe course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORLD -->
    <section id="world">
      <div class="world">
        <div class="world-basic">
          <div class="world-basic-left">
            <h1>
              World best Virtual Learning network education Imran English
              Academy
            </h1>
            <p>
              <img src="../assets/images/success.png" alt="" /> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit,
            </p>
            <p>
              <img src="../assets/images/success.png" alt="" /> Lorem ipsum
              dolor sit amet, consectetur.
            </p>
            <p>
              <img src="../assets/images/success.png" alt="" /> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, eius
            </p>
            <p>
              <img src="../assets/images/success.png" alt="" /> Lorem ipsum
              dolor sit amet, consectetur.
            </p>
            <p>
              <img src="../assets/images/success.png" alt="" /> Lorem ipsum
              dolor sit amet.
            </p>
            <router-link to="/signup"><button>Get started</button></router-link>
          </div>
          <div class="world-basic-right">
            <img src="../assets/images/world.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- Teachers -->
    <section id="teachers">
      <div class="teachers">
        <div class="teachers-basic">
          <div class="teachers-basic-head">
            <h1>Our Experts Teacher</h1>
            <img src="../assets/images/design.png" alt="" />
          </div>
          <div class="teachers-basic-cards">
            <div class="card" v-for="teacher of teachers" :key="teacher.id">
              <div class="img">
                <img :src="teacher.teacherImg" alt="">
              </div>
              <div class="card-title">
                <h1>{{ teacher.name }}</h1>
                <h1>{{ teacher.direction }}</h1>
                <div class="icons">
                  <a :href="'tel:'+teacher.phone"><i class="fa-solid fa-phone"></i></a>
                  <a :href="teacher.telegram"><i class="fa-brands fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICE -->
    <section id="price">
      <div class="price">
        <div class="price-top">
          <h1>Approdable Price</h1>
          <img src="../assets/images/design.png" alt="" />
        </div>
        <div class="price-cards">
          <div class="card">
            <div>
              <h3>ESSENTIAL</h3>
              <img src="../assets/images/price1.svg" alt="" />
              <h1>$79/mo</h1>
              <p>Unlimited projects</p>
              <p>Limited core reports</p>
              <p>60 day data history</p>
              <p>3 members / projects</p>
              <p>A/B Testing</p>
            </div>
            <router-link to="/signup"><button>Choose plan</button></router-link>
          </div>
          <div class="card" id="active">
            <div>
              <h3>PREMIUM</h3>
              <img src="../assets/images/price2.svg" alt="" />
              <h1>$159/mo</h1>
              <p>Everything in Essential +</p>
              <p>Limited core reports</p>
              <p>12 month data history</p>
              <p>10 members / projects</p>
              <p>Unlimited saved reports</p>
              <p>Predictive analytics</p>
            </div>
            <router-link to="/signup"><button>Choose plan</button></router-link>
          </div>
          <div class="card">
            <div>
              <h3>ENTERPRISE</h3>
              <img src="../assets/images/price3.svg" alt="" />
              <h1>$359/mo</h1>
              <p>Everything in Essential +</p>
              <p>Limited core reports</p>
              <p>12 month data history</p>
              <p>10 members / projects</p>
              <p>Unlimited saved reports</p>
              <p>Predictive analytics</p>
            </div>
            <router-link to="/signup"><button>Choose plan</button></router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="contact">
        <div class="contact-basic">
          <h1>Have a question?</h1>
          <p>CONTACT US!</p>
          <form id="form">
            <input
              v-model="name"
              type="text"
              id="name"
              placeholder="Full Name"
              required
            />
            <input
              v-model="phone"
              type="tel"
              id="phone"
              placeholder="Phone Number"
              required
            />
            <textarea
              v-model="message"
              type="text"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <input
              @click="sendMsg"
              class="btn"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <p>Copyright © 2022 all rights reserved by Alijonov</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      courses: [],
      teachers: [],
      headerLink: false,
      name: "",
      phone: "",
      message: "",
      sendBtn: true,
      bot: {
        TOKEN: "5723632127:AAGpvcUQfdzroFk1vxmP5Gd8rorAVxKWkRI",
        chatID: "-1001861464107",
      },
    };
  },
  methods: {
    navbarOpen() {
      this.headerLink = true;
    },
    navbarExt() {
      this.headerLink = false;
    },
    async sendMsg(e) {
      e.preventDefault();
      if (this.name && this.phone && this.message) {
        let result = await axios.post("https://imran-db.up.railway.app/messages", {
          name: this.name,
          phone: this.phone,
          message: this.message,
        });
        if (result.status == 201) {
          this.name = null;
          this.phone = null;
          this.message = null;
        }
      }
    },
  },
  async mounted() {
    let result = await axios.get("https://imran-db.up.railway.app/courses");
    this.courses = result.data;
    let teachers = await axios.get("https://imran-db.up.railway.app/teachers");
    this.teachers = teachers.data;
  },
};
</script>

<style>
</style>