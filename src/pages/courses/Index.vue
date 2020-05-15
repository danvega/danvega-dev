<template>
  <Layout>
    <h1>
      Learn to Code
      <span>with Dan Vega</span>
    </h1>
    <p>
      I have 20+ years of software development experience and have helped over
      110,000+ students online learn how to code. If you want to level up your
      skills you have come to the right place. Please enter your email address
      below to be notified when new content is released.
    </p>
    <convert-kit
      uid="52adfca2a6"
      script="https://danvega.ck.page/52adfca2a6/index.js"
    />
    <section id="courses">
      <h2>Courses</h2>
      <p>
        Below you will find a list of courses that I currently have available. I
        put a lot of effort and passion into each one of my courses and I hope
        that shows. If you're interested in a topic that I don't have listed
        here please
        <g-link to="/contact">contact me.</g-link>
      </p>
      <div class="cards">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/vue_udemy_cover.png"
                alt="Up and Running with Vue.JS Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Vue.js for Beginners: Up and Running with Vue</h4>
              <p>
                A beginner's guide to learn the basics of the JavaScript
                Framework Vue.js.
              </p>
              <a
                href="https://www.udemy.com/course/vue-intro/?referralCode=E9DECFF78CA706D7A68A"
                class="button is-info"
                target="_blank"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/groovy-udemy.jpg"
                alt="The complete Apache Groovy Developer Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>The Complete Apache Groovy Developer Course</h4>
              <p>
                Everything you need to know to get started with the Groovy
                Programming Language
              </p>
              <!-- <span class="button is-info">Learn More</span> -->
              <a
                href="https://courses.danvega.dev/p/the-complete-apache-groovy-developer-course"
                class="button is-info"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/spring-boot-2-udemy.jpg"
                alt="Getting Started with Spring Boot 2 Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Getting Started with Spring Boot 2</h4>
              <p>
                Learn how to build a real application using Spring Framework 5 &
                Spring Boot 2
              </p>
              <a
                href="https://courses.danvega.dev/p/spring-boot-2"
                class="button is-info"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/spring-boot-udemy.jpg"
                alt="Learn Spring Boot Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Learn Spring Boot</h4>
              <p>
                Spring Boot gives you all the power of the Spring Framework
                without all of the complexity.
              </p>
              <a
                href="https://courses.danvega.dev/p/spring-boot-intro"
                class="button is-info"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/angular-4-java-developers.jpg"
                alt="Angular 4 Java Developers Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Angular 4 Java Developers</h4>
              <p>
                Learn how to build Spring Boot & Angular apps by building a real
                world application with JHipster.
              </p>
              <a
                href="https://courses.danvega.dev/p/jhipster"
                class="button is-info"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="@/assets/img/courses/java-free-udemy.jpg"
                alt="Getting Started with Java Course Cover Image"
                class="modal-button"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Getting Started with Java</h4>
              <p>
                Everything you need to know about setting up your local
                development environment.
              </p>
              <a
                href="https://courses.danvega.dev/p/getting-started-with-java"
                class="button is-info"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import ConvertKit from "@/components/ConvertKit.vue";

export default {
  components: {
    ConvertKit
  }
};
</script>

<style scoped>
#courses {
  margin-bottom: 40px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.card-image {
  margin: 0;
  padding: 0;
}
figure {
  margin: 0;
  padding: 0;
}
.card-image img {
  width: 100%;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
