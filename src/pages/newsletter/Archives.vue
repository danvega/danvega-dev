<template>
  <newsletter-layout>
    <div class="container">
      <h4>Newsletter Archives</h4>
      <p>This is a list of archives for my newsletter, Coffee and Code. If you're interested in signing up and getting this delivered to your inbox every
        single Sunday morning <g-link to="/newsletter/">click here</g-link>.
      </p>
      <ul>
        <li v-for="issue in $page.issues.edges" :key="issue.node.id">
          <small>{{ issue.node.date }}</small> -
          <g-link :to="issue.node.path">{{issue.node.title}}</g-link>
        </li>
      </ul>
    </div>
  </newsletter-layout>
</template>

<page-query>
query Newsletter {
  issues: allNewsletter {
    edges {
      node {
        id
        title
        issue
        date(format:"MM/DD/YYYY")
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import NewsletterLayout from '@/layouts/NewsletterLayout'

export default {
  components: {
    NewsletterLayout,
  }
}
</script>

<style scoped>
p {
  line-height: 1.8;
}
h4 {
  font-family: 'Caveat', cursive;
  font-size: 24px;
  margin: 20px 0 10px 0;
}
ul { margin: 20px 0; }
</style>
