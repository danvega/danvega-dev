<template>
  <footer>
    <div class="container">
      <div class="social-links">
        <p>Made with ❤️ in Cleveland, OH.</p>
        <!-- https://developers.google.com/web/tools/lighthouse/audits/noopener -->
        <a
          href="http://twitter.com/therealdanvega"
          aria-label="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://github.com/danvega/"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="http://www.youtube.com/danvega"
          aria-label="youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a
          href="https://www.reddit.com/u/therealdanvega"
          aria-label="reddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'reddit']" />
        </a>
        <a
          href="https://www.instagram.com/thedanvega/"
          aria-label="instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a
          href="https://www.linkedin.com/in/danvega/"
          aria-label="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>

      <div class="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/courses">Courses</a></li>
        </ul>
        <ul>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/speaking">Speaking</a></li>
          <li><a href="/uses">Uses</a></li>
        </ul>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: var(--bright-blue);
  padding: 10px 0;
}

footer p {
  font-size: 1.1rem;
  color: #fff;
  flex: 1;
}

footer a {
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
}

footer a:hover {
  color: #e6e6e6;
}

footer a > svg {
  fill: white;
  width: 1.2rem;
}

footer .social-links {
  display: flex;
}
.social-links p {
  margin:8px;
}
footer .footer-links {
  display: flex;
}

.footer-links ul {
  list-style-type: none;
  margin:0 40px 0 0;
  padding:0px;
}
.footer-links li {
  padding:8px;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 600px) {
  footer > .container {
    flex-direction: column;
  }
}
</style>
