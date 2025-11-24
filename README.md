# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- ✨ Modern glassmorphism design
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark theme with gradient accents
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 🔍 SEO-ready structure

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/pankajbatham2010/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://pankajbatham2010.github.io/portfolio/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then manually upload the 'dist' folder to your hosting service
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll              # GitHub Pages config
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx     # Navigation bar
│   │       └── Footer.tsx     # Footer
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills section
│   │   ├── Projects.tsx       # Projects showcase
│   │   └── Contact.tsx        # Contact form
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit email and social links in:
   - `src/sections/Hero.tsx`
   - `src/sections/Contact.tsx`
   - `src/components/layout/Footer.tsx`

2. **Bio**: Update your bio in `src/sections/About.tsx`

3. **Skills**: Modify skill levels in `src/sections/Skills.tsx`

4. **Projects**: Add your projects in `src/sections/Projects.tsx`

### Add Profile Image

Replace the placeholder in `src/sections/About.tsx`:
```tsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Pankaj Batham**
- GitHub: [@pankajbatham2010](https://github.com/pankajbatham2010)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
