# React Image Gallery 📸

A responsive Image Gallery application built using **React**.  
The project demonstrates component reusability, props usage, dynamic rendering using `map()`, and clean UI design with modern CSS.

##  Features

- Reusable **Image Card** component
- Image data stored in a separate array file
- Dynamic rendering using `map()`
- Parent-to-child data passing using **props**
- Responsive layout using **CSS Grid**
- Clean component separation
- Easy to add or remove images without changing JSX
- Uses **React Fragments** to avoid extra DOM elements

##  Tech Stack

- React (Vite)
- JavaScript (ES6)
- HTML5
- CSS3

## How It Works
- All image details (URL, title, description) are stored in imageData.js
- The Gallery component loops through the data using map()
- Each image is displayed using the reusable ImageCard component
- Adding a new image object automatically updates the UI
  
