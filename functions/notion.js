const { Client } = require("@notionhq/client")

exports.handler = async function (event, context) {

  const notion = new Client({auth: process.env.NOTION_API_KEY});
  const database = await notion.databases.query({database_id: process.env.NOTION_DATABASE_ID});
  const streams = [];

  database.results.map(row => {
    streams.push({
      id: row.id,
      title: row.properties.Title.title[0].text.content,
      startDate: row.properties["Start Date"].date.start,
      endDate: row.properties["End Date"].date.start,
      url: row.properties.URL.url,
      tags: row.properties.Tags.multi_select.map(tag => {
        return {name: tag.name}
      }),
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify(streams),
  };
}
