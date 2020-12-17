const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');

const THEMES = JSON5.parse(fs.readFileSync(path.resolve('./package.json'))).contributes.themes;
const THEME_FOLDER = path.resolve('./themes');
const RAW_PATH = path.join(THEME_FOLDER, 'raw-color-theme.json');

function genTheme(path, name = 'Aofuji', color = '#8aa2d3') {
  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(RAW_PATH)) {
        return;
      }
      // read raw
      const data = JSON5.parse(fs.readFileSync(RAW_PATH).toString());
      // set name
      data.name = name;
      // replace colors
      Object.keys(data.colors).forEach((key) => {
        const colorHex = data.colors[key];
        if (colorHex.startsWith('#8aa2d3')) {
          data.colors[key] = colorHex.replace('#8aa2d3', color);
        }
        if (color === '#ff9940' && colorHex.startsWith('#ff9940')) {
          data.colors[key] = colorHex.replace('#ff9940', '#8aa2d3');
        }
      });
      // write theme
      fs.writeFileSync(path, JSON.stringify(data));
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

async function build() {
  const promises = [];
  THEMES.forEach((val) => {
    promises.push(genTheme(val.path, val.label, val.color));
  });
  await Promise.all(promises);
}
build()
  .then(() => {
    console.log('[Aofuji] Theme built successfully');
  })
  .catch((e) => {
    console.log('[Aofuji]', e);
  });
