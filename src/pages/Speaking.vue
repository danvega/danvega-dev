<template>
  <Layout>
    <h1 class="title is-1">Speaking</h1>
    <div class="content">
      <p>This is just a few of the events I have spoken at in the past. I have an <a href="https://github.com/cfaddict/danvega-me/issues/3">open issue</a> to update this page with a lot more detail.</p>
      <ul>
          <li>
              <a href="https://www.meetup.com/vuecle/events/257002211/" target="_blank">
              02/07/2019: VueCLE - Getting Started with Vue CLI 3
              </a>
          </li>
        <li>
          <a href="https://services.akronlibrary.org/event/1402482" target="_blank">
            02/05/2019: Akron Library - Intro to Coding with Tech Elevator
          </a>
        </li>
        <li>
          <a href="https://therealdanvega.com/blog/2018/11/06/cleveland-women-in-tech-conference-recap" target="_blank">
            11/05/2018: Cleveland Women in Tech Conference
        </a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'

export default {
  components: {
    Layout: DefaultLayout
  }
}
</script>
<style lang="scss">
</style>
