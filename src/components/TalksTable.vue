<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Tags</th>
        <th>Recording URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="talk in talks" :id="talk.id">
        <td><a :href="talk.url">{{ talk.title }}</a></td>
        <td>{{ talk.startDate }}</td>
        <td>{{ talk.endDate }}</td>
        <td>{{ talk.tags.join(", ") }}</td>
        <td><a :href="talk.recording">{{ talk.recording }}</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TalksTable',
  props: {
    talks: Array
  }
}
</script>

<style scoped>
table {

}
th {
  font-size: .9rem;
  font-weight: bold;
  text-align: left;
}
td {
  font-size: .9rem;
  padding: 8px;
}
</style>
