<template>
  <Layout>
    <h1>Thank you for subscribing</h1>
    <p>
      I started this newsletter as a way to keep myself writing each and every week. I have a blog that I like to write for but a blog post
      can be a lot of a pressure. This is a no pressure way for me to write and in the meantime connect with you on a weekly basis. You should
      receieve your first issue of Coffee and Code this Sunday at 7:00 AM EST. In the meantime here are a few recent issues.
    </p>
    <h2>Recent Newsletters</h2>
    <ul>
      <li v-for="issue in $page.issues.edges" :key="issue.node.id">
        <small>{{ issue.node.date }}</small> -
        <g-link :to="issue.node.path">{{issue.node.title}}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Newsletter {
  issues: allNewsletter(limit:3) {
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
import DefaultLayout from "@/layouts/Default";

export default {
  components: {
    Layout: DefaultLayout
  }
};
</script>

<style scoped>
</style>
