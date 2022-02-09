<template>
  <Layout>
    <main>
      <h1>Live Streams</h1>
      <p>This is a list of all my upcoming and past live streams. If you would like to invite me on your stream or have a suggestions of something you want to see me build live please reach out to me on Twitter.</p>

     <h2>Upcoming Streams</h2>
     <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stream in upcomingStreams" :id="stream.id">
            <td>{{ stream.title }}</td>
            <td>{{ stream.startDate }}</td>
            <td>{{ stream.endDate }}</td>
            <td>{{ stream.url }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Archived Streams</h2>
     <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stream in archivedStreams" :id="stream.id">
            <td>{{ stream.title }}</td>
            <td>{{ stream.startDate }}</td>
            <td>{{ stream.endDate }}</td>
            <td>{{ stream.url }}</td>
          </tr>
        </tbody>
      </table>

    </main>
  </Layout>
</template>

<script>
export default {
  name: 'LiveStreams',
  components: {},
  data() {
    return {
      streams: []
    }
  },
  mounted() {
    console.log('lets fetch those streams');
    fetch('/.netlify/functions/streams')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.streams = data;
      })
  },
  computed: {
    upcomingStreams() {
      const d = new Date(this.streams.startDate);
      return this.streams.filter(stream => {
        return new Date(stream.startDate) >= new Date();
      })
    },
    archivedStreams() {
      const d = new Date(this.streams.startDate);
      return this.streams.filter(stream => {
        return new Date(stream.startDate) < new Date();
      })
    }
  }
}
</script>
