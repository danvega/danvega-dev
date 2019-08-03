<template>
  <Layout>
    <div class="content">
      <h1 class="title is-2">Newsletter Archive</h1>
      <div class="archive">
        <div v-for="newsletter in $page.archive.edges" :id="newsletter.node.id">
          <h2 class="title is-5">
            <g-link :to="newsletter.node.path">{{newsletter.node.title}}</g-link>
            <small>{{ newsletter.node.date }}</small>
          </h2>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Newsletter {
  archive:allNewsletter {
    edges {
      node{
        id
        path
        title
        slug
        date(format:"MM/DD/YYYY")
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
small {
  padding-left: 10px;
}
</style>
