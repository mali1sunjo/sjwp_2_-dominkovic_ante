import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs';

/*const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); */

readFile("D:/Ante Dominkovic 4b/sjwp_2_-dominkovic_ante/node/message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});