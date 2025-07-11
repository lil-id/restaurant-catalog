/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.webp
  sharp(`${target}/${image}`).toFile(
    path.resolve(
      __dirname,
      `${destination}/${image.split('.').slice(0, -1).join('.')}-large.webp`
    )
  );

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.webp
  sharp(`${target}/${image}`)
    .resize(600)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.webp`
      )
    );
});
