---
slug: writing-sql-in-a-grails-application
title: "Writing SQL in a Grails Application"
published: true
date: 2013-08-21T12:08:00-04:00
tags: ["grails"]
excerpt: "Writing SQL in a Grails Application"
cover:
---

I have been using Hibernate for a couple years now and I love it. Every now and then though there are certain times when you are going to have to write some raw SQL. Maybe there is some performance issue you are trying to solve or maybe there are some custom functions that you just can't access. Whatever the case may be there are times when you will need to write some plain old SQL. The question came up on the Grails mailing list so I thought I would share it here.

First import the Sql class. Next define a property called dataSource. Spring will auto wire this dependency for us by name and with that we are ready to go. After we create a new instance of the sql class we can call a method on it called rows that can take a SQL statement. In this simple example we are just doing a select of a name property and this query brings back 3 rows. If you were to dump the class name of the rows variable you will see that its nothing more than an ArrayList. We can use the each method to loop over our collection and make sure it worked correctly. Now in the real world you world probably stick this in a service and return the rows to a view but you get the idea.

```groovy
import groovy.sql.Sql

class UserController {

    def dataSource

    def runQuery(){
    	def sql = new Sql(dataSource)
    	def rows = sql.rows("SELECT name from brand")

		rows.each { row ->
			log.debug row.name
		}

		sql.close()

    	render "Query Executed"
    }

}
```

Pretty simple right? One last thing is we want to make sure we close the connection via the docs recommendations.

> Constructs an SQL instance using the given Connection. It is the caller's responsibility to close the Connection after the Sql instance has been used. Depending on which features you are using, you may be able to do this on the connection object directly but the preferred approach is to call the close() method which will close the connection but also free any caches resources.
