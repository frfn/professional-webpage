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

Workflow

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

### This is deprecated - use Flexbox.

-   all `LAYOUT` elements, such as `width, height, images` for content usage are sized in `relative units`, such as **`percentages`** INSTEAD of pixels!

-   Media Queries are CSS rules that style for all different browser width!

    ```
    @media (min-width: 500px){
    ...
    }
    ```

    Using `responsivegridsystem` CSS file for an easy **responsive** design!

    -   The grid.css is NOT made by us, it is made by `THIRD PARTY`, don't worry about it :) now put it in **`/resources/css`** folder!

    ### How it works

    Go to http://www.responsivegridsystem.com/

### Part 1 - Appreciate how BASIC it first looks.

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
        - but can have margin and padding, unlike normal inline element!

### Part 2 - Button

-   `transition: ...propNames 0.5s, default: ease in`

### Part 3 - Logo + Nav

-   Comment the CSS file... NEEDED to keep things organized

<br>
<br>

## 5.

<br>
<br>

## 6.

<br>
<br>

## 7.
