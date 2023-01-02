<template>
  <Layout>
    <h1>Upcoming Speaking Engagements</h1>
    <p>I am currently speaking on the following topics: Spring Framework, Spring Boot, REST, GraphQL, Full Stack Java,
      Vue 3, Nuxt 3, Architecture. You can view some of my <a href="https://github.com/danvega/abstracts">abstracts</a>
      here or my <a href="http://www.youtube.com/danvega">YouTube channel</a> if you want to get an idea
      of my speaking style. If you would like me to speak at your event please feel free to contact me.</p>

    <table>
      <tr>
        <th>Date</th>
        <th>Event</th>
        <th>Location</th>
      </tr>
      <tr>
        <td>January 10 - 13, 2023</td>
        <td><a href="https://www.codemash.org/">CodeMash</a></td>
        <td>Sandusky, OH</td>
      </tr>
      <tr>
        <td>January 17, 2023</td>
        <td>What's new in Spring Boot 3</td>
        <td>Virtual</td>
      </tr>
      <tr>
        <td>January 17, 2023</td>
        <td><a href="https://www.meetup.com/cleveland-java/">Cleveland Java User Group (CJUG)</a></td>
        <td>Cleveland, OH</td>
      </tr>
      <tr>
        <td>January 24-26, 2023</td>
        <td><a href="https://springone.io/">SpringOne Essentials Tour Stop</a></td>
        <td>San Francisco, CA</td>
      </tr>
      <tr>
        <td>April 4-6, 2023</td>
        <td><a href="https://springone.io/">DevNexus</a></td>
        <td>Atlanta, GA</td>
      </tr>
    </table>

    <h2>Past Speaking Engagements</h2>

    <table>
      <tr>
        <th>Date</th>
        <th>Event</th>
        <th>Location</th>
      </tr>
      <tr>
        <td>September 22, 2022</td>
        <td><a
            href="https://tanzu.vmware.com/content/webinars/sep-22-spring-recipes-a-collection-of-common-sense-solutions">BrightTalk
            Webinar: Spring Recipes</a></td>
        <td>Online</td>
      </tr>
      <tr>
        <td>August 08 - 10, 2022</td>
        <td><a href="https://www.kcdc.info/">Kansas City Developer Conference (KCDC)</a></td>
        <td>Kansas City, KS</td>
      </tr>
      <tr>
        <td>July 25 - 27, 2022</td>
        <td><a href="https://www.codeonthebeach.com/">Code On The Beach</a></td>
        <td>Atlantic Beach, FL</td>
      </tr>
      <tr>
        <td>June 21, 2022</td>
        <td><a href="https://tanzu.vmware.com/content/webinars/jun-introduction-to-spring-for-graphql">Introduction to
            GraphQL</a></td>
        <td>Online</td>
      </tr>
      <tr>
        <td>June 21, 2002</td>
        <td><a href="https://www.meetup.com/cleveland-java/events/286289533/">Java Frameworks Panel Discussion</a></td>
        <td>Cleveland, OH</td>
      </tr>
      <tr>
        <td>July 12 - 13, 2022</td>
        <td>
          <a href="https://tanzu.vmware.com/developer/springone-tour/2022/seattle/">
            SpringOne Tour
          </a>
        </td>
        <td>Seattle, WA</td>
      </tr>
      <tr>
        <td>June 8 - 10, 2022</td>
        <td><a href="https://us.vuejs.org/">VueConf US</a></td>
        <td>Ft. Lauderdate, FL</td>
      </tr>
      <tr>
        <td>June 7-8, 2022</td>
        <td>
          <a href="https://tanzu.vmware.com/developer/springone-tour/2022/toronto/">
            SpringOne Tour
          </a>
        </td>
        <td>Toronto, CA</td>
      </tr>
      <tr>
        <td>June 6th, 2022</td>
        <td><a href="https://www.meetup.com/toronto-spring-users-group/events/286270337">Level Up Your Integration
            Testing With Testcontainers</a></td>
        <td>Toronto, CA</td>
      </tr>
      <tr>
        <td>February 23, 2022</td>
        <td><a href="https://www.meetup.com/sfjava/events/284010058/">San Francisco Java User Group</a></td>
        <td>Online</td>
      </tr>
      <tr>
        <td>February 16, 2022</td>
        <td><a href="https://www.youtube.com/watch?v=q_RLfOB7axQ">IntelliJ IDEA Live Stream</a></td>
        <td>Online</td>
      </tr>
      <tr>
        <td>September 01, 2021</td>
        <td><a href="https://springone.io/2021/sessions/full-stack-development-with-spring-boot-vuejs">SpringOne</a>
        </td>
        <td>Online</td>
      </tr>
      <tr>
        <td>January 07, 2020</td>
        <td><a href="https://www.pluralsight.com/courses/codemash-session-52">CodeMash</a></td>
        <td>Sandusky, OH</td>
      </tr>
      <tr>
        <td>November 05, 2018</td>
        <td><a href="https://www.danvega.dev/blog/2018/11/05/cleveland-women-in-tech-presentation/">GetWitIt</a></td>
        <td>Cleveland, OH</td>
      </tr>

    </table>


  </Layout>
</template>

<script>

</script>

<style scoped>
table {
  border-collapse: collapse;
  min-width: 100%;
  margin-bottom: 60px;

}

th {
  font-weight: bold;
  text-align: left;
  background-color: #eee;

}

th,
td {
  padding: 10px;
}

td {
  padding: 14px;
  font-size: 1.1em;
}

tr:nth-child(odd) {
  background-color: rgba(137, 186, 225, 0.2);
}
</style>
