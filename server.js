const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

const pagesDir = path.join(__dirname, 'pages');

// Verify the folder exists
if (!fs.existsSync(pagesDir)) {
  console.error('❌ Pages folder not found:', pagesDir);
  process.exit(1);
}

// Get all subdirectories
const subdirs = fs.readdirSync(pagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

// Serve each subdirectory as its own static route
subdirs.forEach(folder => {
  const folderPath = path.resolve(pagesDir, folder);
  console.log(`Serving "${folder}" at /${folder}`);
  console.log(` → Path: ${folderPath}`);
  
  // Check what files exist in the folder
  const files = fs.readdirSync(folderPath);
  console.log(` → Files in folder:`, files);

  // Add debugging middleware
  app.use(`/${folder}`, (req, res, next) => {
    console.log(`\n📍 [${new Date().toLocaleTimeString()}] Request to /${folder}${req.path}`);
    console.log(`   Method: ${req.method}`);
    console.log(`   Full URL: ${req.url}`);
    next();
  }, express.static(folderPath));
});

// Default homepage listing
app.get('/', (req, res) => {
  console.log('\n🏠 Root page accessed');
  res.send(`
    <h1>Available pages:</h1>
    <ul>
      ${subdirs.map(f => `<li><a href="/${f}">${f}</a></li>`).join('')}
    </ul>
  `);
});

// 404 handler to catch unmatched routes
app.use((req, res) => {
  console.log(`\n❌ 404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p>Could not find: ${req.url}</p>
    <a href="/">Go home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`\nTry accessing:`);
  subdirs.forEach(f => console.log(`  - http://localhost:${PORT}/${f}`));
});