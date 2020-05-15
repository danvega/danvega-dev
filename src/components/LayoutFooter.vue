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

footer a:hover {
  color: #e6e6e6;
}

footer a > svg {
  fill: white;
  width: 1.2rem;
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
