# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/margaux-works/planets-fact-site)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - For routing
- [Vite](https://vitejs.dev/) - Frontend tool for building and developing projects

### What I learned

This project allowed me to enhance my skills in implementing responsive designs, leveraging React for dynamic data rendering, and integrating Tailwind CSS for streamlined styling. Below is an example of a key learning:

```jsx
<div className="relative">
  <span
    className="absolute top-0 left-0 w-full h-[2px] scale-x-0 transition-transform duration-300 origin-left"
    style={{ backgroundColor: planet.color }}
  ></span>
</div>
```

### Continued development

I plan to focus on refining the following areas in future projects:

- Optimizing the performance of React components
- Enhancing accessibility features (ARIA roles and keyboard navigation)
- Exploring more advanced animations with Tailwind CSS

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - The official Tailwind CSS documentation was incredibly helpful for understanding utility-first styling and implementing responsive designs.
- [React Router Documentation](https://reactrouter.com/) - This documentation provided clear guidance on setting up dynamic routing for planet pages, making navigation seamless.
- [Frontend Mentor](https://www.frontendmentor.io/) - The platform itself was an invaluable resource, offering realistic challenges to practice and improve coding skills.
