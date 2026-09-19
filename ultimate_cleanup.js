import fs from 'fs';
import { execSync } from 'child_process';

console.log('Initiating Ponytail Phase 2: Workspace Sanitization...');

// 1. Delete all the temporary hack scripts
const filesToDelete = [
  'recover_assets.js',
  'update_local_links.js',
  'scrape_full.js',
  'transform_indian_food.js',
  'transform_indian_news.js',
  'ponytail_cleanup.js',
  'find_chinese.js',
  'translate.js',
  'translate_fix.js',
  'safe_scrub.js',
  'uncomment_assets.js',
  'andtea.html'
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted dead weight: ${file}`);
  }
});

// 2. Clean up package.json
if (fs.existsSync('package.json')) {
  let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Remove React-specific dependencies since this is now a static HTML site
  const deadDeps = ['@studio-freight/lenis', 'framer-motion', 'lucide-react', 'react', 'react-dom'];
  const deadDevDeps = ['@types/react', '@types/react-dom', '@vitejs/plugin-react'];
  
  if (pkg.dependencies) {
    deadDeps.forEach(dep => delete pkg.dependencies[dep]);
  }
  if (pkg.devDependencies) {
    deadDevDeps.forEach(dep => delete pkg.devDependencies[dep]);
    // Add prettier
    pkg.devDependencies['prettier'] = '^3.0.0';
  }
  
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  console.log('Sanitized package.json dependencies.');
}

// 3. Format and Unminify CSS/JS/HTML using Prettier
console.log('Unminifying and formatting all CSS, JS, and HTML files...');
try {
  execSync('npm install', { stdio: 'inherit' });
  execSync('npx prettier --write "index.html" "css/**/*.css" "js/**/*.js"', { stdio: 'inherit' });
  console.log('Prettier formatting complete.');
} catch (e) {
  console.error('Prettier failed:', e.message);
}

console.log('Sanitization complete.');
