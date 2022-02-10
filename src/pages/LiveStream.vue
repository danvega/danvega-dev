<template>
  <Layout>
    <main>
      <h1>Live Stream Schedule</h1>
      <p>This is a list of upcoming and past live coding sessions. If you would like to see me talk about a particular subject please reach out to me on Twitter.</p>

      <h2>Upcoming Streams</h2>
      <LiveStreamTable :streams="upcomingStreams"/>

      <h2>Archived Streams</h2>
      <LiveStreamTable :streams="archivedStreams"/>

    </main>
  </Layout>
</template>


<script>
import LiveStreamTable from "@/components/LiveStreamTable.vue";

export default {
  name: 'LiveStream',
  components: {
    LiveStreamTable
  },
  data() {
    return {
      streams: []
    }
  },
  mounted() {
    fetch('/.netlify/functions/notion')
      .then(res => res.json())
      .then(data => {
        this.streams = data;
      });
  },
  computed: {
    upcomingStreams() {
      return this.streams.filter(stream => new Date(stream.startDate) >= new Date())
    },
    archivedStreams() {
      return this.streams.filter(stream => new Date(stream.startDate) < new Date())
    }
  }
}
</script>
