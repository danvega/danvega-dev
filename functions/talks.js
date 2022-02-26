const { Client } = require("@notionhq/client")

exports.handler = async function (event, context) {

  const notion = new Client({auth: process.env.NOTION_API_KEY});
  const database = await notion.databases.query(
    {
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
        {
          property: 'StartDate',
          direction: 'descending',
        },
      ],
    });
  const talks = [];

  console.log(database.results);

  database.results.map(row => {
    talks.push({
      id: row.id,
      title: row.properties.Title.title[0].text.content,
      startDate: new Date(row.properties.StartDate.date.start).toLocaleDateString("en-US"),
      endDate: new Date(row.properties.EndDate.date.start).toLocaleDateString("en-US"),
      location: row.properties.Location.select.name,
      type: row.properties.Type.select.name,
      url: row.properties.URL.url,
      recording: row.properties.Recording.url,
      tags: row.properties.Tags.multi_select.map(tag => {
        return tag.name
      }),
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify(talks),
  };
}


