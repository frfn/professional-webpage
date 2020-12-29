# jQuery

## The most popular JS library in the world.

it is free.

It makes it easy to

-   select and manipulate HTML elements (find an element, make it respond to mouse clicks, etc!)
-   create animations
-   develop AJAX apps

<br>

## Examples

-   maginific-popup

    > great for having a modal pop up, video, etc

-   tooltipster

    > additional info when hovering over certain elements!

-   maplace.js

    > great for map usage

-   typer.js

    > a jquery plug in that types for you, pretty cool.

-   one page scroll v1.3.1
    > uses the whole view port -- looks very apple-y like, very cool

<br>

## Google Hosted Libraries

-   jQuery

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

<br>

plug this in at the bottom of the index.html file!

<br>

# Important

You must reference the jQuery script first _*THEN*_ reference your `script.js`

## Adding "scroll to" effect!

-   with jQuery!

1st step!

-   add an `id` to sections! Also called `hashes`

2nd step!

-   add the code for scrolly, it is in script.js
-   NOTE: there is a CSS behavior that targets this: `scroll-behavior: smooth`
-   NOTE: I bookmarked a page that explains this!

3rd step!

-   we gave a class, called `js--scroll-to-plans`, this is the BUTTON 'Sign up'

4th step!

-   in jQuery, we selected `js--scroll-to-plans` and added a `click` handler and animation.
-   These were not written by me! Just use someone elses, it's ok.

## Adding scroll effects!

-   MUST add the CDN in the `<head>`, check!
-   with jQuery!
-   add the CSS names in the desired locations where you want the animations to happen
-   added pure CSS in style.css to assist the animations!

1st step!

-   Add `js--wp-#` where you want animation to be!
-   NOTE: `wp` stands for waypoint -- we will use waypoint!

2nd step!

-   using waypoint, set the `offset` to 50% - 60% so that it will start between 50% - 60% of vh height!
-   .addClass will add the CSS and animate the `div`!
