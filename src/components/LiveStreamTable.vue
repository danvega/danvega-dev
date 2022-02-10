<template>
  <table>
    <thead>
      <tr>
        <td>Title</td>
        <td>Start Date</td>
        <td>End Date</td>
        <td>Tags</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="stream in streams" :id="stream.id">
        <td>{{ stream.title }}</td>
        <td>{{ stream.startDate }}</td>
        <td>{{ stream.endDate }}</td>
        <td>{{ stream.tags }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'LiveStreamTable',
  props: {
    streams: Array
  }
}
</script>
