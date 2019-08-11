---
slug: sql-server-exception-statement-not-return-result-set
title: "SQL Server Exception - The Statement Did Not Return A Result Set"
published: true
date: 2015-02-05T11:48:18-05:00
tags: ["groovy", "sql"]
excerpt: "Using Stored Procedures in a Grails Application with Groovy"
cover: ./data-cover.jpg
---

We are working on moving a fairly large Dynamic Java Web Project over to a Grails application. In this application we have a ton of stored procedures that we need to continue to use in our Grails app. Luckily it couldn't be easier to call a stored proc in Groovy. If you look at the [groovy.sql.Sql](http://groovy.codehaus.org/api/groovy/sql/Sql.html) class there are a ton of methods for this.

There are numerous calls methods but one of the easiest ways to get back a list is to use the rows method and pass in a `gstring`. In this example we are calling a stored procedure called `getFooStoredProc` that takes 1 parameter and because this is a `gstring` we can include our variable in our call.

```groovy
def getFoo( String id ) {
	List results = sql.rows( "{call getFooStoredProc($id)}" )
	results
}
```

So I had this working for a ton of stored procedure calls already when I came across a very strange error yesterday.

```groovy
def getBar( String id ) {
	List results = sql.rows( "{call getBarStoredProc($id)}" )
	results
}
```

This looks almost identical to the call I made before but this time the code was throwing an exception.

> SqlServerException: The Statement Did Not Return A Result Set

I was really confused by this so I went to the database and the stored procedure with the same parameter was running just fine. After some digging around and talking it through with some coworkers we finally found the solution. As I said before this wasn't happening for stored procedures that I was converting before but that is because none of them were doing any inserts or updates. If you are doing any inserts/updates before the final select for whatever reason this error will be thrown. For the life of me I still don't understand why I just know that it happens. So you have 2 solutions to fix this. First you can update the stored procedure to `SET NOTCOUNT ON`

```sql
create procedure getBarStoredProc (
  @id int
)
AS
BEGIN
SET NOCOUNT ON
...
END
```

If you only have a few stored procedures this would be an ideal solution. In my case though I have way to many to do that. The good news is you can do this via code before that stored procedure is called by executing a sql statement before your stored procedure call.

```groovy
def getBar( String id ) {
	sql.execute( "SET NOCOUNT ON" )
	List results = sql.rows( "{call getBarStoredProc($id)}" )
	results
}
```

Hopefully this helps someone else who comes across this crazy issue.
