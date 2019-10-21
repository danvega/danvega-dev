<template>
  <newsletter-layout>
    <section id="archives">
      <div class="container">
        <h1>Newsletter Archives</h1>
        <ul v-for="issue in $page.issues.edges" :key="issue.node.id">
          <li>
            <small>{{ issue.node.date }}</small> -
            <g-link :to="issue.node.path">{{issue.node.title}}</g-link>
          </li>
        </ul>
      </div>
    </section>
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

</style>
