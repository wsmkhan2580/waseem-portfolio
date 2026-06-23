# Waseem — Full Stack Developer Portfolio

Modern, premium portfolio built with React.js, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Customize YOUR Data

Edit `src/data/portfolioData.js` — this is where ALL your info lives:
- personalInfo (name, email, social links, resume URL)
- skills (your tech stack and proficiency levels)
- projects (add your real project cards)
- experience (work + education)
- certifications

## Folder Structure

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer
├── context/        # ThemeContext (dark/light mode)
├── data/           # portfolioData.js ← EDIT THIS
├── App.jsx
├── main.jsx
└── index.css
```

## Deploy to Vercel

```bash
# Option 1: CLI
npm i -g vercel && vercel

# Option 2: GitHub
# Push to GitHub → vercel.com → Import project → Deploy

# Option 3: Manual
npm run build
# Upload /dist to vercel.com
```

## Features

- Dark/Light mode toggle
- Scroll progress bar + Back to top button
- Typing animation in Hero
- Framer Motion animations throughout
- Glassmorphism cards
- Animated skill progress bars
- Filterable projects grid
- Animated timeline for experience
- Mobile-first responsive design
- SEO meta tags
- Production: ~125KB gzipped
