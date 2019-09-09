---
slug: creating-and-testing-your-first-grails-tag-library
title: "Creating and testing your first Grails Tag Library"
published: true
date: 2014-02-23T07:02:00-05
tags: ["grails","groovy"]
excerpt: "Creating and testing your first Grails Tag Library"
cover: ./testing-cover.jpg
video: https://www.youtube.com/embed/vZ_7FfML9Xg
---

I created a quick screencast to walk you through creating and testing your first tag lib

**BootstrapTagLib.groovy**

```groovy
package com.tagdemo

class BootstrapTagLib {

    static namespace = "bs"

    def container = { attrs, body ->
        def containerClass = attrs.fluid ? 'container-fluid' : 'container'
        out << '

' + body() + '

'
    }

    def row  = { attrs,body ->
        out << '

' + body() + '

'
    }

    def grid = { attrs, body ->
        attrs.cols ?: 12
        out << '

' + body() + '

'
    }

}
```

**BootstrapTagLibSpec.groovy**

```groovy
package com.tagdemo

import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(BootstrapTagLib)
class BootstrapTagLibSpec extends Specification {

    void "No arguments passed to container results in class of container"() {
        given:
            def output = applyTemplate('body')

        expect:
            output == '

body

'
    }

    void "When container argument fluid is true class should equal container-fluid"(){
        when:
            def output = applyTemplate('body\_goes\_here',\[fluid\_var:true\])

        then:
            output == '

body\_goes\_here

'
    }

    void "Check that our row tag creates the correct output"(){
        expect:
            applyTemplate('') == '

'
    }

    @Unroll
    void "Test all possible values in our grid"(){
        expect:
            applyTemplate("") == cssClass

        where:
            cols  | cssClass
            1     | '

'
            2     | '

'
            3     | '

'
            4     | '

'
            5     | '

'
            6     | '

'
            7     | '

'
            8     | '

'
            9     | '

'
            10    | '

'
            11    | '

'
            12    | '

'
    }

    void "When we have a container, row and full layout it is what we expect"(){
        given:
            def tpl = '''
                Main Content
                        Right Sidebar
            '''
            def output = applyTemplate(tpl)

        expect:
            output == '''








Main Content







Right Sidebar







            '''
    }
}
```
