# The Cinematic Fly 🎬🪰

A sleek, modern, cinematic storytelling experience built in React with GSAP animations, scroll smoothing, and custom hover effects.

## Live Demo
On Vercel

## Project Overview
This site is designed as a personal storytelling portfolio combining:
- Smooth scrolling animations using GSAP's `ScrollSmoother`
- Word scramble text reveal interactions
- Responsive photo gallery with performance optimizations
- Modular React components for scalability
- Clean, minimal UI with cinematic feel

## Tech Stack
- **React** (via Vite)
- **GSAP** (ScrollSmoother, ScrambleTextPlugin)
- **React Router DOM**
- **Custom CSS** + Responsive Layouts

## Folder Structure

src/
│   App.jsx
│   global.css
│   index.css
│   main.jsx
│   
├───components
│       Header.jsx
│       Images.jsx
│       ScrambleHoverBlock.jsx
│
├───pages
│   │   About.jsx
│   │   Awesome.jsx
│   │   Home.jsx
│   │   PhotoPage.jsx
│   │
│   ├───backups
│   │       About.jsx
│   │       Awesome.jsx
│   │       Home.jsx
│   │       index copy.css
│   │       ScrambleHoverBlock copy.jsx
│   │
│   └───photosmooth
│           Photos.jsx
│
├───router
│       index.jsx
│
├───styles
│       gsap-brand.css
│       ScrambleHoverBlock.css
│
└───views
        Boxes.jsx
        ScramblePage.jsx


        
## 📷 Credits
Photography and creative content by **SixAhead**.

## 🧪 Local Development
```bash
npm install
npm run dev