<template>
  <Layout>
    <div class="container">
      <h3>Thank you for subscribing</h3>
      <p>
        I started this newsletter as a way to keep myself writing each and every week. I have a blog that I like to write for but a blog post
        can be a lot of a pressure. This is a no pressure way for me to write and in the meantime connect with you on a weekly basis. You should
        receieve your first issue of Coffee and Code this Sunday at 7:00 AM EST. In the meantime here are a few recent issues.
      </p>
      <h4>Recent Newsletters</h4>
      <ul>
        <li v-for="issue in $page.issues.edges" :key="issue.node.id">
          <small>{{ issue.node.date }}</small> -
          <g-link :to="issue.node.path">{{issue.node.title}}</g-link>
        </li>
      </ul>
    </div>
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
/* h3 {
  font-family: "Anton", sans-serif;
  font-size: 28px;
} */
.container {
  padding: 20px 0;
  margin: auto;
}
p {
  line-height: 1.8;
}
/* h4 {
  font-family: "Caveat", cursive;
  font-size: 24px;
  margin: 20px 0 10px 0;
} */
</style>
