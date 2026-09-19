import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'images');
const files = fs.readdirSync(imagesDir).filter(file => /\.(png|jpe?g|gif)$/i.test(file));

let html = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; background: #fff; }
  .grid { display: flex; flex-wrap: wrap; gap: 10px; }
  .item { border: 1px solid #ccc; padding: 5px; text-align: center; width: 150px; }
  .item img { max-width: 100%; max-height: 120px; object-fit: contain; }
  .name { font-size: 12px; margin-top: 5px; word-break: break-all; }
</style>
</head>
<body>
<div class="grid">
`;

for (const file of files) {
  html += `
  <div class="item">
    <img src="file://${path.join(imagesDir, file).replace(/\\/g, '/')}" />
    <div class="name">${file}</div>
  </div>`;
}

html += `
</div>
</body>
</html>
`;

fs.writeFileSync('contact_sheet.html', html);
console.log('contact_sheet.html created with ' + files.length + ' images.');
