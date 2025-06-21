# cyber_portfolio
# 🛡️ Cybersecurity Portfolio - Umair Aziz

> A cutting-edge, interactive cybersecurity portfolio showcasing professional expertise through dynamic visualizations and real-time monitoring dashboards.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff88?style=for-the-badge&logo=vercel)](https://your-deployed-url.vercel.app)
[![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Live Demo

**[View Portfolio →](https://your-deployed-url.vercel.app)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contact](#contact)

## 🎯 About

An advanced cybersecurity professional portfolio featuring:
- **Interactive Dashboard**: Real-time network monitoring and threat intelligence
- **Dynamic Visualizations**: Live charts and animated network topology
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Dark theme with neon green accents and futuristic animations

Built to showcase cybersecurity expertise while demonstrating proficiency in modern web development technologies.

## ✨ Features

### 🌟 Core Sections
- **Professional Summary**: Skills overview and contact information
- **Technical Skills**: Interactive skill cards with proficiency levels
- **Work Experience**: Detailed professional background
- **Projects**: Showcase of cybersecurity projects and case studies
- **Certifications**: Professional certifications and training
- **Education**: Academic background and qualifications
- **Contact**: Interactive contact form with EmailJS integration

### 🎮 Interactive Dashboard
- **Live Network Topology**: Animated nodes representing network infrastructure
- **Real-time Metrics**: Live counters for threats, attacks blocked, and system status
- **Threat Intelligence**: Dynamic threat feed with severity classifications
- **Data Visualizations**: Interactive charts showing network traffic and threat distribution
- **System Performance**: Real-time monitoring of system resources

### 🎨 Visual Features
- **Animated Borders**: Rotating conic gradient borders on cards
- **Pulsing Glow Effects**: Dynamic button and element highlighting
- **Matrix-style Animations**: Cyberpunk-inspired visual effects
- **Smooth Transitions**: Fluid animations and hover effects
- **Responsive Layout**: Mobile-first design approach

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Libraries & Tools
- **Chart.js + React-Chart.js-2** - Interactive data visualizations
- **Lucide React** - Modern icon library
- **EmailJS** - Contact form functionality
- **ESLint** - Code linting and formatting

### Deployment
- **Vercel** - Serverless deployment platform
- **Git** - Version control

## 📱 Screenshots

### Desktop View
![Desktop Dashboard](./screenshots/desktop-dashboard.png)
*Real-time cybersecurity monitoring dashboard*

### Mobile View
![Mobile Portfolio](./screenshots/mobile-view.png)
*Responsive design optimized for mobile devices*

### Interactive Features
![Interactive Elements](./screenshots/interactive-features.png)
*Dynamic animations and hover effects*

## 🚀 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Clone the Repository
```bash
git clone https://github.com/umairaziz/cybersecurity-portfolio.git
cd cybersecurity-portfolio
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the application.

## 📖 Usage

### Navigation
- Use the top navigation menu to switch between sections
- Click on the **Dashboard** to view the interactive cybersecurity monitoring center
- All sections are responsive and optimized for mobile viewing

### Interactive Elements
- **Skill Cards**: Hover to see detailed information
- **Project Cards**: Auto-sliding carousel with navigation controls
- **Contact Form**: Functional form with real-time validation
- **Dashboard**: Live updating metrics and network visualization

### Customization
To customize the portfolio for your own use:

1. **Update Personal Information**: Edit `src/components/Summary.tsx`
2. **Modify Skills**: Update `src/components/Skills.tsx`
3. **Change Projects**: Edit `src/components/Projects.tsx`
4. **Update Contact Info**: Modify `src/components/Contact.tsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Set Environment Variables**:
- Go to your Vercel dashboard
- Navigate to Project Settings → Environment Variables
- Add your EmailJS configuration variables

### Alternative: GitHub + Vercel Integration

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**:
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables
- Deploy automatically

### Build for Production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
cybersecurity-portfolio/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Summary.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Key Features Implementation

### Animated Borders
```css
.card-animated-border::before {
  background: conic-gradient(
    from 180deg,
    transparent 0deg,
    transparent 270deg,
    var(--accent-green) 315deg,
    transparent 360deg
  );
  animation: rotate-card-border 3s linear infinite;
}
```

### Real-time Dashboard
```typescript
// Live network visualization with Canvas API
const draw = () => {
  // Animated nodes and connections
  // Real-time threat simulation
  // Dynamic visual effects
};
```

### Responsive Design
- Mobile-first approach
- Fluid typography and spacing
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Add credentials to environment variables

### Customization Options
- **Color Scheme**: Modify CSS variables in `index.css`
- **Animations**: Adjust timing and effects in component styles
- **Content**: Update component data and text
- **Layout**: Modify grid systems and component structure

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with tree shaking
- **Load Time**: < 3 seconds on standard connections
- **Animations**: 60fps smooth animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Umair Aziz** - Cybersecurity Analyst

- 📧 Email: [umairaziz682@gmail.com](mailto:umairaziz682@gmail.com)
- 💼 LinkedIn: [umairaziz001](https://linkedin.com/in/umairaziz001)
- 🌐 Portfolio: [your-deployed-url.vercel.app](https://your-deployed-url.vercel.app)
- 📱 Phone: +92 3146018728

---

<div align="center">

**[⬆ Back to Top](#cybersecurity-portfolio---umair-aziz)**

Made with ❤️ by [Umair Aziz](https://github.com/umairaziz)

</div>
