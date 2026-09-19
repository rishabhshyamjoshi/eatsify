import fs from 'fs';
import path from 'path';

function cleanBranding(filename) {
  const filepath = path.join(process.cwd(), filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');

  // 1. Social Links & Emails & Domains
  content = content.replace(/https:\/\/www\.facebook\.com\/andteatw/g, '#');
  content = content.replace(/https:\/\/www\.instagram\.com\/andteatw/g, '#');
  content = content.replace(/mailto:andteaofficial@gmail\.com/g, 'mailto:hello@eatsify.com');
  content = content.replace(/https:\/\/andtea\.com/g, '#');
  content = content.replace(/andteatw/g, 'eatsify');

  // 2. Loaders & Titles
  content = content.replace(/TEA IS LOADING/g, 'EATSIFY IS LOADING');
  content = content.replace(/&amp;TEA/g, 'Eatsify');
  content = content.replace(/&amp; TEA/g, 'Eatsify');
  content = content.replace(/&TEA/g, 'Eatsify');
  content = content.replace(/TEA IN LIFE\. 茶伴隨著生活/g, 'Indian Meals & Feasts');
  content = content.replace(/Taiwan Selected Tea/g, 'Authentic Indian Cuisine');
  content = content.replace(/台灣在地茶茗/g, 'Authentic Indian Cuisine');

  // 3. Menu Categories
  content = content.replace(/Milk Eatsify/g, 'Starters & Chaat');
  content = content.replace(/MILK <sup>Eatsify<\/sup>/g, 'STARTERS & CHAAT');
  
  content = content.replace(/Cream Eatsify/g, 'Main Course');
  content = content.replace(/CREAM <sup>Eatsify<\/sup>/g, 'MAIN COURSE');
  content = content.replace(/Cream &amp; TEA/g, 'Main Course'); // in case it was missed
  
  content = content.replace(/Fruit Eatsify/g, 'Breads & Sides');
  content = content.replace(/FRUIT <sup>Eatsify<\/sup>/g, 'BREADS & SIDES');
  
  content = content.replace(/Eatsify Desserts/g, 'Desserts');
  content = content.replace(/Eatsify <sup>Desserts<\/sup>/g, 'DESSERTS');
  
  // 4. Remove Taiwanese Tea Subtitles (all <span class="bellfont"> inside me_title)
  // The subtitles span across multiple lines sometimes, so we use [\s\S]*?
  content = content.replace(/(<div class="me_title">.*?)(<span class="bellfont">[\s\S]*?<\/span>)/g, '$1');
  // Run again in case of multiple or missed ones
  content = content.replace(/(<div class="me_title">.*?)(<span class="bellfont">[\s\S]*?<\/span>)/g, '$1');

  fs.writeFileSync(filepath, content);
  console.log(`Cleaned branding in ${filename}`);
}

cleanBranding('menu_wip.html');
cleanBranding('index.html');
// We don't really care about public/andtea_clone since it's a backup, but let's clean its index too
cleanBranding('public/andtea_clone/index.html');
