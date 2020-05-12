<template>
  <footer>
    <div class="container">
      <p>Made with ❤️ in Cleveland, OH.</p>
      <div>
        <!-- https://developers.google.com/web/tools/lighthouse/audits/noopener -->
        <a
          href="http://twitter.com/therealdanvega"
          aria-label="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/danvega/"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="http://www.youtube.com/danvega"
          aria-label="youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.reddit.com/u/therealdanvega"
          aria-label="reddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-reddit"></i>
        </a>
        <a
          href="https://www.instagram.com/thedanvega/"
          aria-label="instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/danvega/"
          aria-label="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
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

footer > .container {
  display: flex;
  align-items: center;
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

footer a > svg {
  fill: white;
  width: 1.2rem;
}
</style>
