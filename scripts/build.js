const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');

const THEMES = JSON5.parse(fs.readFileSync(path.resolve('./package.json'))).contributes.themes;
const THEME_FOLDER = path.resolve('./themes');
const RAW_PATH = path.join(THEME_FOLDER, 'raw-color-theme.json');

function removeItalic(tokenColors) {
  tokenColors.forEach((val) => {
    const settings = val.settings;
    if (settings?.fontStyle && !val.name.includes('italic')) {
      delete settings.fontStyle;
    }
  });
}

function genTheme(path, name, settings) {
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
          data.colors[key] = colorHex.replace('#8aa2d3', settings.color);
        }
        if (settings.color === '#ff9940' && colorHex.startsWith('#ff9940')) {
          data.colors[key] = colorHex.replace('#ff9940', '#8aa2d3');
        }
      });
      // remove italic (optional)
      if (!settings.italic) {
        removeItalic(data.tokenColors);
      }
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
    promises.push(genTheme(val.path, val.label, val.settings));
  });
  await Promise.all(promises);
}
build()
  .then(() => {
    console.log('[aofuji] theme built successfully');
  })
  .catch((e) => {
    console.log('[aofuji]', e);
  });
