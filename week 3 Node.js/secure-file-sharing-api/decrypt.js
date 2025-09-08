const fs = require('fs');
const crypto = require('crypto');

// Usage: node decrypt.js encrypted.enc decrypted.txt <key> <iv>
const [,, inputFile, outputFile, keyHex, ivHex] = process.argv;

if (!inputFile || !outputFile || !keyHex || !ivHex) {
  console.error("Usage: node decrypt.js <inputFile> <outputFile> <keyHex> <ivHex>");
  process.exit(1);
}

const algorithm = 'aes-256-ctr';
const key = Buffer.from(keyHex, 'hex');
const iv = Buffer.from(ivHex, 'hex');

const decipher = crypto.createDecipheriv(algorithm, key, iv);
const input = fs.createReadStream(inputFile);
const output = fs.createWriteStream(outputFile);

input.pipe(decipher).pipe(output);

output.on('finish', () => {
    console.log(`✔ File decrypted: ${outputFile}`);
});