---
slug: 'testing-standard-in-out-java'
title: 'How to test standard in and out in Java'
date: '2020-12-16T15:17:39.619Z'
published: false
excerpt: 'In this tutorial I will show you how you can test standard in and out in Java.'
author: 'Dan Vega'
tags:
  - 'java'
cover: './testing-standard-in-out-java-cover.png'
---

When you have been writing software for as long as I have you see a lot of the same problems over and over and it can be a bit repetitive at times. That is why when I run across a problem I haven't had to solve for before I get pretty excited.

Recently I was working on a project where I had to write unit tests for an exercise where students were learning the basics of File I/O in Java. The basis of the exercise was that they would read some information in from the command line and then write the responses to the console in a particular format. Pretty standard I/O but writing tests for this is not something that I have had to do before.

## Java Standard In and Standard Out

Before we dive into the tests let's take a look at the application. Ask the user for their first name, last name and email address and save each response. All of the work for this application will be done in the `main()` method.

The `Scanner` class is used to parse input from a number of different sources, one of which can be an `Input Stream`. The `System` class has a static instance variable `in` that represents the standard input stream (input from the keyboard).

```java
public class Application {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

    }

}
```

You can ask the user a question to standard out (console) using `System.out`. Now that you have an instance of a `Scanner` there are methods for obtaining user input of different types. The `nextLine()` method of the `Scanner` class will return a `String`. We can use this same approach for all three required inputs because we expect to get back Strings for all of them.

```java
System.out.println("What is your first name?");
String firstName = scanner.nextLine();

System.out.println("What is your last name?");
String lastName = scanner.nextLine();

System.out.println("What is your email address?");
String email = scanner.nextLine();
```

Finally, print the information that was obtained from the user in the format of _First Name, Last Name, Email Address_.

```java
System.out.println(firstName + "," + lastName + "," + email);
```


```java
public class Application {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Ask for user input
        System.out.println("What is your first name?");
        String firstName = scanner.nextLine();

        System.out.println("What is your last name?");
        String lastName = scanner.nextLine();

        System.out.println("What is your email address?");
        String email = scanner.nextLine();

        // print to the console in the format of firstname,lastname,email
        System.out.println(firstName + "," + lastName + "," + email);
    }

}
```

As I said earlier, from an application point pretty standard stuff.

## Writing tests for standard in and out

While the application is fairly basic the first thing I had to ask myself was how I am I going to emulate input from the keyboard. How was I going to read from standard out? What happens in the next exercise when I ask them to print the contents of that string to a file?

If you weren't aware you can reassign standard in and standard out and this is something that is fairly common in most programming languages. If you look in the `System` class you will find a method [`public static void setIn(InputStream in)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#setIn(java.io.InputStream)) which will allow you to set the new standard input stream.

I start off by creating a test where when I provide valid user input and if everything goes well I should see the input in the correct format sent to standard out. I'll start by creating a string with responses to the three questions. Make sure to use `System.lineSeparator()` and not to hard cord a new line feed.

```java
@Test
public void validUserInput_ShouldResultInExpectedOutput() {
    String userInput = String.format("Dan%sVega%sdanvega@gmail.com",
            System.lineSeparator(),
            System.lineSeparator());
}
```

Next you need to create something that is of type `InputStream` so you can reassign standard in. There is a class `ByteArrayInputStream` that will work and one of the available constructors will take a byte array. You can use the `String` class's `getBytes()` method to turn the `String` into a `byte[]`.

```java
@Test
public void validUserInput_ShouldResultInExpectedOutput() {
    String userInput = String.format("Dan%sVega%sdanvega@gmail.com",
            System.lineSeparator(),
            System.lineSeparator());
    ByteArrayInputStream bais = new ByteArrayInputStream(userInput.getBytes());
    System.setIn(bais);
}
```

With standard in reassigned you will need to the same for standard out. Create a string that represents what the expected result is. The `System` class has a method [`public static void setOut(PrintStream out)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#setOut(java.io.PrintStream)) that will allow you to reassign the standard output stream. You can create an instance of `PrintStream` using a `ByteArrayOutputStream`.

```java
@Test
public void validUserInput_ShouldResultInExpectedOutput() {
    String userInput = String.format("Dan%sVega%sdanvega@gmail.com",
            System.lineSeparator(),
            System.lineSeparator());
    ByteArrayInputStream bais = new ByteArrayInputStream(userInput.getBytes());
    System.setIn(bais);

    String expected = "Dan,Vega,danvega@gmail.com";
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(baos);
    System.setOut(printStream);
}
```

Next you can call the applications main method. If the student completed the exercise they would have printed out a few things to standard out. The last one would have been the users first name, last name, email address. You can use the `ByteArrayOutputStream` to return an array of strings which will be each of the lines printed out to the console with the last one being the one you are interested in. Finally, your assertion can test if the expected output matches the actual output.

```java
@Test
public void validUserInput_ShouldResultInExpectedOutput() {
    String userInput = String.format("Dan%sVega%sdanvega@gmail.com",
            System.lineSeparator(),
            System.lineSeparator());
    ByteArrayInputStream bais = new ByteArrayInputStream(userInput.getBytes());
    System.setIn(bais);

    String expected = "Dan,Vega,danvega@gmail.com";
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(baos);
    System.setOut(printStream);

    Application.main(null); // call the main method

    String[] lines = baos.toString().split(System.lineSeparator());
    String actual = lines[lines.length-1];

    // checkout output
    Assert.assertEquals(expected,actual);
}
```

## Conclusion

If you already knew this existed this article was pointless and chances are you aren't reading this. For the rest of you I hope you found this as cool as I did. If you want the code for this article you can find it over on [Github](https://github.com/danvega/sys-in-out-tests)
