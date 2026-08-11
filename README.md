# Narendra Keshkar - Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 🌗 Dark/Light mode support
- 💼 Project showcase
- 🛠️ Skills display
- 📧 Contact form

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CgTreat/narendra-portfolio.git
cd narendra-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
narendra-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Information

1. **Name and Title**: Edit `src/components/Hero.jsx`
2. **About Section**: Update `src/components/About.jsx`
3. **Skills**: Modify the skills array in `src/components/Skills.jsx`
4. **Projects**: Add your projects in `src/components/Projects.jsx`
5. **Contact Info**: Update contact details in `src/components/Contact.jsx`

### Styling

Each component has its own CSS file. Modify these files to customize the appearance:
- Global styles: `src/index.css` and `src/App.css`
- Component-specific styles: `src/components/*.css`

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment.

1. Update the `base` in `vite.config.js` to match your repository name
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

### Other Platforms

You can also deploy to:
- Vercel
- Netlify
- Render
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Narendra Keshkar - [narendra.keshkar@example.com](mailto:narendra.keshkar@example.com)

Project Link: [https://github.com/CgTreat/narendra-portfolio](https://github.com/CgTreat/narendra-portfolio)
