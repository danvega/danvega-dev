<template>
  <div class="courses-container">
    <div class="container">
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="@/assets/img/danvega_dev_logo_white.png" alt="Dan Vega's Logo" />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <g-link class="navbar-item is-uppercase" to="/">Home</g-link>
            <g-link class="navbar-item is-uppercase" to="/blog">Blog</g-link>
            <g-link class="navbar-item is-uppercase" :to="{ name: 'courses' }">Courses</g-link>
            <g-link class="navbar-item is-uppercase" to="/speaking">Speaking</g-link>
            <g-link class="navbar-item is-uppercase" to="/about">About</g-link>
            <g-link class="navbar-item is-uppercase" to="/contact">Contact</g-link>
          </div>
        </div>
      </nav>

      <header>
        <div class="columns">
          <div class="column">
            <h1>
              Learn to Code
              <br />with Dan Vega
            </h1>
            <h2>If you want to learn how to code you have come to the right place. I do my best to provide top notch training that everyone can follow along with.</h2>
          </div>
          <div class="column">
            <g-image src="@/assets/img/course-landing-graphic.png" />
          </div>
        </div>
      </header>
    </div>

    <section class="features">
      <div class="container">
        <div class="columns">
          <div class="coluumn">
            <i class="fas fa-money-check-alt fa-5x"></i>
            <h4>30 Day Guarantee</h4>
            <p>All courses come with a 30 day money back guarantee. If you're not finding value in the course just ask for a refund and you will get one no questions asked.</p>
          </div>
          <div class="coluumn">
            <i class="fab fa-discord fa-5x"></i>
            <h4>Private Discord Channel</h4>
            <p>All courses come with an invitation to a private discord channel where you will get support from me and other students.</p>
          </div>
          <div class="coluumn">
            <i class="fas fa-download fa-5x"></i>
            <h4>Offline Viewing</h4>
            <p>All courses purchased on my platform can be downloaded for offline viewing. This is something I can't offer if you purchase my courses on another platform.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="courses">
      <div class="container">
        <h3>Courses</h3>
        <p>
          Below you will find a list of courses that I currently have available. I put a lot of effort and passion into each one of my courses and I hope that shows. If you're interested in a topic that I don't have listed here please
          <g-link to="/contact">contact me.</g-link>
        </p>
        <p>&nbsp;</p>
        <div class="columns">
          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/groovy-udemy.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>The Complete Apache Groovy Developer Course</h4>
                  <p>Everything you need to know to get started with the Groovy Programming Language</p>
                  <!-- <span class="button is-info">Learn More</span> -->
                  <a
                    href="https://courses.danvega.dev/p/the-complete-apache-groovy-developer-course"
                    class="button is-info"
                  >Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/spring-boot-2-udemy.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Getting Started with Spring Boot 2</h4>
                  <p>Learn how to build a real application using Spring Framework 5 & Spring Boot 2</p>
                  <a
                    href="https://courses.danvega.dev/p/spring-boot-2"
                    class="button is-info"
                  >Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/spring-boot-udemy.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Learn Spring Boot - Rapid Application Development</h4>
                  <p>Spring Boot gives you all the power of the Spring Framework without all of the complexity.</p>
                  <a
                    href="https://courses.danvega.dev/p/spring-boot-intro"
                    class="button is-info"
                  >Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/angular-4-java-developers.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Angular 4 Java Developers</h4>
                  <p>Learn how to build Spring Boot & Angular apps by building a real world application with JHipster.</p>
                  <a href="https://courses.danvega.dev/p/jhipster" class="button is-info">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/intro-to-vue.png"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Getting Started with VueJS</h4>
                  <p>Learn how to get started using the Vue Framework in existing and brand new applications.</p>
                  <a href="/courses/intro-to-vue" class="button is-info">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="@/assets/img/courses/java-free-udemy.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Getting Started with Java</h4>
                  <p>Everything you need to know about setting up your local development environment.</p>
                  <a
                    href="https://courses.danvega.dev/p/getting-started-with-java"
                    class="button is-info"
                  >Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="columns">
          <div class="column is-two-third">
            <article class="tile is-child notification">
              <p class="title">Meet your Instructor</p>
              <p class="subtitle">Dan Vega</p>
              <ul class="bio">
                <li>
                  <i class="fas fa-check-circle"></i> Husband & Father
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> Proud to call Cleveland home
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> 20+ Years Software Development Experience
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> Curriculum Developer at Tech Elevator (Coding Bootcamp)
                </li>

                <li>
                  <i class="fas fa-check-circle"></i> Passionate about Software Development
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> Loves to teach others
                </li>
              </ul>
            </article>
          </div>
          <div class="column is-one-third">
            <g-image src="@/assets/img/about_me_circle-300x295.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h3>Testimonials</h3>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img src="@/assets/img/testimonials/chris.png" class="is-rounded" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Chris, Reading, UK</strong>
                <br />“Hi Dan, I just really wanted to say thank you for what you are doing. After I moved to the UK from Hungary, to find new opportunities as a Java Developer, I bought your courses, and I can thank my new job to your Spring Boot course (I am at this position for 8 months now, and working with Spring Boot since, just the way you taught me back then when I watched the course). You probably don’t know, but you really are a game changer. Literally changed my life by pointing me to the right direction. You are a good person, and a wonderful teacher indeed. Many many thanks Dan, and keep doing what you do!“
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img src="@/assets/img/testimonials/aj.jpg" class="is-rounded" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>AJ Moore</strong>
                <br />“Among the best courses that I have taken. If you are curious about Groovy, even remotely, take this course–your questions will be answered.”
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img src="@/assets/img/testimonials/garymann.jpg" class="is-rounded" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Gary Mann</strong>
                <br />“Brilliant course! Very thorough coverage of Groovy, all the interesting parts are included and many illustrations of how Groovy improves on Java. The course is long, but that is because there is so much to include and nothing significant is omitted. Even if you are an experienced Java developer (like me) the course will teach you all ways Groovy improves on Java. If you are serious about learning Groovy, take this course!”
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img src="@/assets/img/testimonials/peterlorent.jpg" class="is-rounded" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Peter Lorent</strong>
                <br />“I really cannot say enough good things about this course. Dan stands out as a really good instructor and covers all of the basics to get up and running quickly with SpringBoot. Everything is explained in a solid educational style and at a good pace. Dan, please follow up with courses on the various Spring Projects! Kudos!”
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <h3>Course Totals</h3>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Students</p>
              <p class="title">87,373</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Reviews</p>
              <p class="title">10,737</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Countries</p>
              <p class="title">176</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Languages</p>
              <p class="title">60</p>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="subscribe">
      <div class="signup-form"></div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Anton|Caveat&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      }
    ]
  },
  mounted() {
    let ck = document.createElement("script");
    ck.setAttribute("data-uid", "2245659c84");
    ck.setAttribute("async", true);
    ck.setAttribute("src", "https://danvega.ck.page/2245659c84/index.js");
    document.querySelector(".signup-form").appendChild(ck);

    const navbarBurgers = document.querySelectorAll(".navbar-burger");
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style scoped>
.courses-container {
  border-top: none !important;
  width: 100vw;
  background: url("../../assets/img/courses-background.png");
  background-size: cover;
}
nav {
  margin: 0 0 30px 0;
  padding-top: 10px;
}
header {
  padding-bottom: 50px;
}
h1 {
  font-family: "Anton", sans-serif;
  font-size: 48px;
  color: #fff;
  line-height: 1.2;
}
h2 {
  font-family: "Caveat", cursive;
  font-size: 22px;
  color: #fff;
  line-height: 1.5;
  margin: 20px 0;
}
h3 {
  font-family: "Anton", sans-serif;
  font-size: 28px;
  margin-bottom: 10px;
}
.stats {
  background: rgb(211, 211, 211);
  padding: 40px 0;
}
.stats h3 {
  text-align: center;
}
.courses {
  background: #fff;
  padding: 10px 0 40px 0;
}
.testimonials {
  background: #fff;
  padding: 30px 0;
}
.testimonials .content p {
  line-height: 1.9;
}
.subscribe {
  background-color: #fff;
  padding: 40px 0;
}
.signup-form {
  max-width: 700px;
  margin: 0 auto;
}

.about {
  background-color: #f5f5f5;
}
.navbar.is-transparent {
  background-color: transparent;
  background-image: none;
}
.navbar-item {
  color: #fff;
}
.navbar-item:hover {
  color: rgb(235, 235, 235);
}

.bio {
  line-height: 2.2;
}
.fa-check-circle {
  color: rgb(59, 172, 59);
}

.features {
  background-color: #fff;
  padding: 30px 0;
  text-align: center;
}
.features h4 {
  font-size: 20px;
}
.features .fas,
.features .fab {
  color: #38d39f;
}
.features p {
  font-size: 13px;
  padding: 12px;
  line-height: 1.5;
}

@media only screen and (max-width: 575px) {
  section,
  .column {
    padding: 20px;
  }
  .navbar {
    background-color: #4ebfeb !important;
  }
  .navbar.is-transparent {
    background-color: #4ebfeb !important;
    background-image: none !important;
  }
  .navbar-item {
    color: #000 !important;
  }
}
</style>
