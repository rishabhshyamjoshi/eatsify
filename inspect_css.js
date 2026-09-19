import fs from 'fs';

const css1 = fs.readFileSync('css/bmmp3_1.css', 'utf8');
const css2 = fs.readFileSync('css/bmmp3.css', 'utf8');

function findRules(css, keyword) {
  const lines = css.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(keyword)) {
      console.log(`Found ${keyword} at line ${i + 1}:`);
      let j = i;
      let block = [];
      while (j < lines.length && !lines[j].includes('}')) {
        block.push(lines[j]);
        j++;
      }
      block.push('}');
      console.log(block.join('\n'));
    }
  }
}

console.log('--- bmmp3_1.css ---');
findRules(css1, '.section_hga');
findRules(css1, '.hga_text');
findRules(css1, '.hga_bg_wrap');
findRules(css1, '.hga_bg');

console.log('--- bmmp3.css ---');
findRules(css2, '.section_hga');
findRules(css2, '.hga_text');
findRules(css2, '.hga_bg_wrap');
findRules(css2, '.hga_bg');

