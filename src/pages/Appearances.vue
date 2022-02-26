<template>
  <Layout>
    <h1>Talks</h1>
    <p>This is a list of recent talks. If you're interested in having me speak at your event please contact me.</p>
    <talks-table :talks="talks">
    </talks-table>
  </Layout>
</template>

<script>
import TalksTable from '~/components/TalksTable.vue';

export default {
  name: 'Appearances',
  components: {
    TalksTable
  },
  data() {
    return {
      talks: []
    }
  },
  mounted() {
    fetch('/.netlify/functions/talks')
      .then(res => res.json())
      .then(data => {
        this.talks = data;
        console.log(this.talks);
      });
  }
};
</script>

<style>
</style>
