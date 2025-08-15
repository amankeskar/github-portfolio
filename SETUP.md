# DataPro Portfolio Setup Guide

## Prerequisites

Before you can run this portfolio, you need to have Node.js installed on your system.

### Installing Node.js

1. **Download Node.js**: Go to [nodejs.org](https://nodejs.org/) and download the LTS version
2. **Install**: Run the installer and follow the installation wizard
3. **Verify Installation**: Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

## Installation Steps

Once Node.js is installed, follow these steps:

1. **Open Terminal**: Navigate to the project directory:
   ```bash
   cd d:\github-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**: The development server will start at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Troubleshooting

### Common Issues:

1. **"npm is not recognized"**: Node.js is not installed or not in PATH
   - Solution: Install Node.js from nodejs.org and restart your terminal

2. **Permission errors on Windows**: 
   - Solution: Run terminal as Administrator or use `npx` instead of global installs

3. **Port 3000 already in use**:
   - Solution: The dev server will automatically find an available port

### Getting Help

If you encounter issues:
1. Check the [Node.js documentation](https://nodejs.org/en/docs/)
2. Review the [Vite documentation](https://vitejs.dev/guide/)
3. Check the project's GitHub issues

## Next Steps

After successful setup:
1. Customize the portfolio content for your needs
2. Update personal information, projects, and skills
3. Deploy to your preferred hosting platform (Netlify, Vercel, GitHub Pages)

Happy coding! 🚀
