# Deploying to Netlify

This guide will help you deploy your Sri Manikyamba Restaurant website to Netlify.

## Prerequisites
- A GitHub account
- Your project pushed to a GitHub repository
- A Netlify account

## Step 1: Push Your Code to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended for beginners)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub as your Git provider
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (or higher)
6. Click "Deploy site"

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy your site:
   ```bash
   netlify deploy --prod --dir=out
   ```

## Step 3: Configure Custom Domain (Optional)

1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Build Configuration

Your project is already configured with:
- `next.config.js` - Set to static export
- `netlify.toml` - Build and redirect configuration
- Static export enabled (`output: 'export'`)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18 or higher
- Verify the build command is correct

### Images Not Loading
- Images are set to `unoptimized: true` for static export
- Ensure all image paths are correct

### Routing Issues
- The `netlify.toml` includes redirects for SPA routing
- All routes redirect to `index.html` for client-side routing

## Environment Variables

If you need to add environment variables:
1. Go to your Netlify site dashboard
2. Navigate to "Site settings" > "Environment variables"
3. Add your variables there

## Automatic Deployments

Netlify will automatically deploy when you push to your main branch. You can configure this in your site's "Deploy settings".

