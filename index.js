import { createServer } from 'node:http';
import { readFile } from 'node:fs';

let server = createServer((request, response) => {

    let plik = '.' + request.url;
    if (plik == './') plik = './index.html';
    readFile(plik, (error, content) => {
        if (error) {
            response.end('Błąd z renderowaniem strony', 'utf-8');
        } else {
            response.end(content, 'utf-8');
        }
    })

})
server.listen(3000);
console.log('Serwer wystartował');