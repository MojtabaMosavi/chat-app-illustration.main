This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). 
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM 
- JavaScript
- Mobile-first workflow

### What I learned

- How to implement a custom loading animation 

```html
<div class="loader"></div>
```
```css
/*|| loader animation */
@keyframes dot-flashing {
  0% {
    background-color: white;
  }
  50%,
  100% {
    background-color: gray;
  }
}

/*|| loader */

.loader {
  position: absolute;
  top: 50%;
  width: abs.rem(7px);
  height: abs.rem(7px);
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 2;

  &--left {
    left: 10%;
  }

  &--right {
    right: 10%;
  }

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: abs.rem(7px);
    height: abs.rem(7px);
    border-radius: 50%;
  }

  // active state

  &--active {
    animation: dot-flashing 1s linear infinite 0.5s alternate;

    &::before {
      left: abs.rem(-10px);
      animation: dot-flashing 1s infinite 0s alternate;
    }

    &::after {
      left: abs.rem(10px);
      animation: dot-flashing 1s infinite 1s alternate;
    }
  }
}
```


