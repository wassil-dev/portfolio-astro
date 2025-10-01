# Deployment to GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages.

## Setup Instructions

### 1. Update Configuration

Edit `astro.config.mjs` and update the `site` value:

```javascript
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  // If using a repository (not username.github.io):
  // base: '/portfolio-v4',
  // ...
});
```

**Important:**
- If deploying to `username.github.io` repository: Leave `base` commented out
- If deploying to `username.github.io/repository-name`: Uncomment and set `base: '/repository-name'`

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. Save the settings

### 3. Push to GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Build your site
3. Deploy to GitHub Pages

### 4. Access Your Site

After the deployment completes (usually 2-3 minutes), your site will be available at:
- `https://YOUR_GITHUB_USERNAME.github.io` (if using username.github.io repo)
- `https://YOUR_GITHUB_USERNAME.github.io/repository-name` (if using other repo)

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Build the site
npm run build

# The dist folder contains your built site
# Upload the contents of ./dist to your hosting
```

## Troubleshooting

### Images not loading
- Make sure all image paths in your content start with `/` for absolute paths
- Check that images are in the `public/` folder

### 404 errors
- If using a repository name (not username.github.io), ensure `base` is set correctly
- Check that all internal links are relative or use the base path

### CSS not loading
- Verify the build completed successfully
- Check browser console for errors
- Ensure Tailwind CSS is properly configured

## Local Testing

Test your production build locally before deploying:

```bash
npm run build
npm run preview
```

This will serve your built site at `http://localhost:4321`

## Files Added for Deployment

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Prevents Jekyll processing
- `astro.config.mjs` - Updated with site and output config

## Next Steps

After successful deployment:

1. Add your actual content:
   - Replace profile image: `public/profile.jpg`
   - Add resume: `public/resume.pdf`
   - Update blog posts in `src/content/blog/`
   - Update projects in `src/content/projects/`

2. Update data files:
   - `src/data/about.json` - Your information
   - `src/data/skills.json` - Your skills
   - `src/data/experiences.json` - Work history
   - `src/data/contact.json` - Contact information
   - `src/data/certifications.json` - Certifications

3. Customize styling:
   - Colors in `src/styles/global.css`
   - Component styles as needed

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Documentation](https://docs.github.com/actions)
