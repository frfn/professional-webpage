# The 7 Steps in Motion

## 1. Define App and Intended Audience

-   Goal: show what App is and how it works. Make people sign up and subscribe.

-   Audience: busy people who don't have time to cook

<br>
<br>

## 2. Build

-   Build a one page web page that contains all info

-   Simple nav

-   Content: pics, and text

<br>
<br>

## 3. Inspire + Sketch

-   Drawing and sketching, how the layout will look like!

-   This step is really important

<br>
<br>

## 4. Design + Develop

-   Grab a color: orange tone

-   Font?: any good looking font (such as LATO font)

## Start

## Workflow

1.  create folders!

```
    /resources
        /css
            /img (different from /img in /resources)
        /js
        /data
        /img

    /vendors (this is where 3rd party files will go)
        /css (difference is for CSS that is not created by us)
        /js
        /fonts

    index.html

    style.css
```

2. Develop in VS Code

-   normalize.css: makes browser render all elements consistently

    -   npm install normalize.css

-   LATO font: go to google fonts and just copy and paste the `<link>`!

-   work on CSS, styles.css

## Responsive Web Design?

    This means that your app is compatible for all devices that views your app!


    From Mobile, Tablet, to Desktop!

-   Work on Mobile View First!

### Fluid Grid

### Grid is deprecated - use Flexbox.

-   all `LAYOUT` elements, such as `width, height, images` for content usage are sized in `relative units`, such as **`percentages`** INSTEAD of pixels!

-   Media Queries are CSS rules that style for all different browser width!

    ```
    @media (min-width: 500px){
    ...
    }
    ```

    Using `responsivegridsystem` CSS file for an easy **responsive** design!

    -   The grid.css is NOT made by us, it is made by `THIRD PARTY`, don't worry about it :) now put it in **`/resources/css`** folder!

How it works:

Go to http://www.responsivegridsystem.com/

<br>
<br>

## Header Section

### Part 1 - Appreciate how BASIC it first looks.

---

Without all the CSS stuff, this would look so basic.

It just is a div, with one `<h1>` element, and two `<a>` elements. I want to appreciate what CSS can do.

-   semantic HTML
-   overlay an image, set it as high browser viewport
-   style cool buttons + animations
-   style links (# a good dummy link)
-   simple nav

-   `background-image: url(img/hero.jpg)`
-   linear-gradient(top color, bottom color)
-   background-{props}: ...
-   transform: tranlate() hack, for centering
-   New CSS props used:
    1. text-transform
    2. letter-spacing
    3. word-spacing
    4. font-weight
    5. inline-block
        - does not force line break
        - but can have margin and padding, unlike normal inline elements!

<br>
<br>

### Part 2 - Button

---

-   `transition: ...propNames 0.5s, default: ease in`

<br>
<br>

### Part 3 - Logo + Nav

---

-   Comment the CSS file... NEEDED to keep things organized

<br>
<br>

## Feature Section

### Part 1 - Using fluid grid, icons and pseudo-class `:after`

---

-   special entities, `&mdash;`(&mdash;) or like `&amp;`(&amp;)

-   long: because lots of text
-   copy: copywrite, text for website

### ICONS

-   visit www.ionicons.com for cool icons

    -   copy & pasted content!

    -   downloaded `Designer Pack` and transfered files to vendors.

    -   Mine was different, he had CSS files and all I had were svg links...

    -   fixed: I just followed instructions on how to use it

    -   it is just

        ```
        <div>
            <h3></h3>
            <p></p>
        </div>
        ```

### Part 2 - features section continued! (white space!)

---

-   we used padding instead of margin as padding increases spaces INSIDE the box

-   `:after` is pretty snazzy, it's saying after cssProp, do this.

-   NOTE: you MUST use `content: ""` to use `:after`

    > `h2:after { ...do this after h2... }`

-   `margin: 0 auto` VS `text-align: center`

    > **margin**: used for whole component

    > **text-align**: used for content INSIDE component

-   created `.box p` because our paragraphs is INSIDE the `.box` class, it is the parent! We can target the `<p>` by `.box p`

-   New CSS props:
    1. `line-height: 145%` ( good range: 120% - 150% ) aka Line Height

## Favorite Meals Section

### Part 1: Grid of nice pictures and zoom-in transition using CSS & making `<img>` darker!

---

### Using `<figure>`?

It is for illustrations, images, etc.

New uses for CSS props:

-   `overflow: hidden`
-   `transform: scale(1.15)`
-   `transition: tranform .2s`
-   `opacity: 0.7`

<br>
<br>

## How it Works Section

### Part 1: draw circle in CSS, cool technique to separate between sections, incorporate App Store and Play Store buttons

---

-   created two main divs, one for header, one for the content

    -   first div: contains `<h2>`

    -   second div: contains 2 `<div>`,
        -   one for phone image
        -   two for work steps + links that are buttons `<a> <img /> </a>`

<br>
<br>

### Part 2

---

-   styled the CSS

```
.app-screen { } // for iphone image
.steps-box { } // for the two divs, phone and content
.work-steps { } // for the steps and numbers
.button-app { } // for the buttons
```

New CSS props used:

-   `:first-child`
-   `:last-child`
-   `:last-of-type`

### Important

The reason there was no padding on top of `HOW IT WORKS - SIMPLE AS 1, 2, 3` title

-   is because you did NOT clear the `float` property of the images before (the children of `<ul>` are `float: left`) and the `<h2>` starts with the beginning of the photos

    -   you **`must`** clear the floats! You don't need to understand the code. Just know what it does.

    To use: use a `<div class="clearfix">`

    ```
    /* clearfix class */

    .clearfix {
        zoom: 1;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    /* DEPRECATED! */
    .clearfix {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }
    ``
    ```

<br>
<br>

## Cities Section

### Part 1: I basically coded it myself

No New learns...

-   Renamed the ion icons class to a more specified one, so it does not affect the features icons and the location icons!

---

<br>
<br>

### Part 2

---

Formatting the images, just targeted its parent class and wrote `.box img { width: 100% }`, to my surprised it fit amazingly well, the span 1 of 4 gave it its width!

Gotten an annoying underline when the `a` tag was styled, in some cases, you will have to specify `:link` and `:hover` and do `border: 0` to get rid of it.

<br>
<br>

## Customer Testimonials Section

### Part 1: background-image effect

---

-   Very easy: grabbed a background image, styled with linear gradient!
-   background attachment is FIXED -- amazing effect!

<br>
<br>

### Part 2: customer testimonial

---

-   For some reason seeing all the words jangled up `overwhelmed` me... LOL. Must be because I was a little tired!

-   New HTML Semantics Used:

    -   `<blockquote>`
    -   `<cite>`

-   TIP:

    -   to use `position: absolute`, the parent must have ~~some type of `position` defined, either `fixed`, `relative`, or `absolute`~~,

    -   only `ONE` prop, `"position: relative"`

<br>
<br>

## Sign Up Section

### Part 1

Layed out the code + set up for styling!

---

Nothing new!

<br>
<br>

### Part 2

Create a box shadow with CSS + border radius desgin!

---

Styling!

.plan-price font size = 300%, since .plan-price span is a child, then you will have to set it to 30% to bring it back to the original font size!

using a space will not cut it, you must use `&nbsp;`

<br>
<br>

## Contact Form Section

### Part 1

Creating FORMS in HTML and styling them!

---

input has attributes { id, name, placeholder, type }

<br>
<br>

### Part 2

CSS style... input[type="text"] , input[type="email"] , input[type="submit"]

---

<br>
<br>

## Footer Section

### Part 1

---

Simple!

repeat nav, social,

maybe some text

using SOCIAL ICONS

Had to think of a way to style the CSS, the transitions for the Social Media icons were styled different!

<br>
<br>

## 5.

## Resonsive Web Design!

`@media` queries!

These are the breakpoints for mobile, tablet, and desktop!

> 0px ---> 480px - nothing to mobile

> 480px ---> 768px - mobile to tablet

> 768ox ---> 1024px - tablet portrait to tablet landscape

> 1024px ---> >px - desktop

### Syntax:

    @media not|only mediatype and (expressions) {
        CSS-Code;
    }

meaning of the `not`, `only`, and `and` keywords:

<br>

## Arguments

| Key Word | Description                                                                                                                                                             |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `not`    | The not keyword reverts the meaning of an entire media query.                                                                                                           |
| `only`   | The only keyword prevents older browsers that do not support media queries with media features from applying the specified styles. It has no effect on modern browsers. |
| `and`    | The and keyword combines a media feature with a media type or other media features.                                                                                     |

<br>

They are all optional. However, if you use not or only, you must also specify a media type.

<br>

## Media Types

| Key Word | Description                                           |
| :------- | :---------------------------------------------------- |
| `all`    | Used for all media type devices                       |
| `print`  | Used for printers                                     |
| `screen` | Used for computer screens, tablets, smart-phones etc. |
| `speech` | Used for screenreaders that "reads" the page out loud |

<br>

You can combine screen widths as well:

Example:

    @media screen and (max-width: 900px) and (min-width: 600px) {
        div.example {
            font-size: 50px;
            padding: 50px;
            border: 8px solid black;
            background: yellow;
        }
    }

## Add it to index.html

-   add the `queries.css` to the `<head>` in the file!

<br>

## `<meta>`

-   META tag! Add this to the `<head>` as well!

    -   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

    This gives the browser instructions on how to control the page's dimensions and scaling.

    The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

    The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

## CSS Browser Prefixes

-   A way to add support for CSS files:

| Platform | Prefix     |
| :------- | :--------- |
| Android  | `-webkit-` |
| Chrome   | `-webkit-` |
| iOS      | `-webkit-` |
| Safari   | `-webkit-` |
| Firefox  | `-moz- `   |
| IE       | `-ms- `    |
| Opera    | `-o- `     |

<br>

### Examples

```
-webkit-border-radius: 25px;
-webkit-width: 30px
-mox-border: 1px solid red
border-radius: 25px
```

## Extension to auto prefix!

-   Autoprefixer
    This will auto prefix the CSS file and make it compatible!

-   Download it!

## jsDeliver

-   A CDN, content delivery network, can be used to grab already made files, CSS files, JS files, that is given as a `<script>`, in this example, it is used to prefix CSS files so that the CSS files can work in older browsers!

## jQuery

Added notes about jQuery!

-   **IMPORTANT**, you MUST have the `<script>` on the top of other scripts!

## Creating a sticky navigation!

-   Created another `<img>` and was styled to display NONE only when `.sticky`
-   added `js--section-features`, this is so that we can differentiate jQuery vs normal CSS classes
-

## Downloaded Waypoints!

-   `npm install waypoints`
-   not logged into package-lock.json

it is the easiest way to trigger a function when you scroll to an element!

Experimenting with Waypoints! -- it's pretty cool, it has:

<br>

| keywords             | Description          |
| :------------------- | :------------------- |
| `offset`             | when to execute code |
| `direction` argument | `up` or `down`       |

## MORE jQuery - scrolling effects

-   check `jQuery.md`

<br>
<br>

## 6.

<br>
<br>

## 7.

# MARKDOWN NOTES

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: | --- |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more | ßß  |
