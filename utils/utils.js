const fs = require('fs');

const dataURLtoFile = (dataUrl) => {
    const arr = dataUrl.split(',');
    const buffer = Buffer.from(arr[arr.length - 1], 'base64');
    const filePath = `./uploads/thumbnail.jpg`;
  
    fs.writeFileSync(filePath, buffer);
    return filePath;
  };

  module.exports = dataURLtoFile;