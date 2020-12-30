# Box Shadow

## Sideways Writing

-   `writing mode: vertical-rl`
-   will make text be vertical!

## Syntax

> X, Y, amoount of blur, how far the blur goes out, color

`box-shadow: 0 30px 80px 10px rgba(0,0,0,0.2)`

<br>
<br>

# Images

-   Always set image to `display: block`
-   `overflow: hidden` will clip the overflow from the image!

<br>
<br>

# Flexbox

-   There is a cheat sheet and a site for Flexbox references!

-   Get familiar with the three props!

<br>

# `display: flex`

`flex: 0 1 auto`

    `flex-grow: 0`

    `flex-shrink: 1`

    `flex-basis: auto`

-   `flex: 0 0 45%`

    -   0 means no grow
    -   0 means no shrink
    -   45% is the flex-basis, the width of the item!

-   `flex: 1`

    -   1 means it will let the element grow as much as it can!

<br>

## Main Axis vs Cross Axis

-   See the cheat sheet.

<br>

## Flex Container vs Flex Item

**Flexbox**

-   There is a cheat sheet and a site for Flexbox references!

-   Get familiar with the three props!

-   `display: flex`

**Flex Item**

-   items inside the Flex Container!
-   You can make the Flex Item into a Flex Container as well!

## Properties

| Key Word    | Desc                                     | value                            |
| :---------- | :--------------------------------------- | :------------------------------- |
| align-items | will align items in the **`cross axis`** | center, stretch _(DEFAULT)_, etc |
| align-self  | it will only target this Flex Item       | same values as align-items       |

## Orientation ...

SO if you do

> `flex-direction: column;`

then do

> `align-items: center`,

it will act as if it's

> `justify-content: center`

... and vice versa.

Interesting.

<br>
<br>
<br>

## Look at the example files. They are super easy to follow and really a great example!
