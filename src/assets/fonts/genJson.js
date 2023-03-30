/*genJson.js*/
const path = require('path');

const oldPath = path.resolve(__dirname, 'iconfont.css');
const newPath = path.resolve(__dirname, 'iconfont.json');

var gen = (module.exports = function () {
  const readline = require('readline');
  const fs = require('fs');

  const fRead = fs.createReadStream(oldPath);
  const fWrite = fs.createWriteStream(newPath, {
    flags: 'w+',
    defaultEncoding: 'utf8',
  });

  const objReadLine = readline.createInterface({
    input: fRead,
  });

  var ret = {};

  objReadLine.on('line', line => {
    line = line && line.trim();
    if (line.includes(':before')) {
      const keyMatch = line.match(/\.(.*?):/);
      const key = keyMatch && keyMatch[1];
      ret[key] = null;
    } else if (line.includes('content')) {
      const valueMatch = line.match(/content:.*?\\(.*?);/);
      let value = valueMatch && valueMatch[1];
      Object.keys(ret).forEach(i => {
        if (ret[i] === null) ret[i] = parseInt(value, 16);
      });
    }
    return;
  });

  objReadLine.on('close', () => {
    console.log('readline close');
    fWrite.write(JSON.stringify(ret), 'utf8');
  });
});

gen();
