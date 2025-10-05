# Quba Mosque Fundraiser

A beautiful, animated single-page React application to track fundraising progress for purchasing a mosque.

## Features

- 🎨 Beautiful gradient UI with smooth animations
- 📊 Real-time progress bar showing amount raised
- 💾 Cookie-based storage (1 year expiration)
- 🔐 Separate admin panel to update amounts
- 📱 Fully responsive design
- ✨ Built with React, Tailwind CSS, and Framer Motion

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Build the app for production:
```bash
npm run build
```

This creates a `dist` folder with static files that can be served by any HTTP server.

### Preview Production Build

```bash
npm run preview
```

## Using the Application

### Main Screen (/)
- Displays the fundraising progress
- Shows amount raised out of £1,000,000 target
- Animated progress bar with percentage
- Beautiful animations powered by Framer Motion

### Admin Panel (/admin)
- Update the amount raised
- Amount is stored in a cookie that lasts 1 year
- View current saved amount
- Quick link to return to main screen

## Deployment

The built application is completely static and can be deployed to:

- Any HTTP server (Apache, Nginx, etc.)
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply upload the contents of the `dist` folder after building.

### Local HTTP Server

You can serve the built files with Python's built-in HTTP server:

```bash
# Build the app first
npm run build

# Serve with Python 3
cd dist
python -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000`

## Technology Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **js-cookie** - Cookie management
- **Vite** - Build tool

## Customization

### Change Target Amount
Edit `TARGET_AMOUNT` in `src/pages/FundraiserScreen.jsx`

### Change Colors
Edit the custom colors in `tailwind.config.js`:
- `mosque-blue`: Primary blue color
- `mosque-navy`: Dark navy color
- `mosque-gold`: Accent gold color

### Change Cookie Duration
Edit `ONE_YEAR` in `src/utils/cookies.js`

## Browser Support

Works on all modern browsers that support ES6+ and CSS Grid.
