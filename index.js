import { createServer } from 'node:http'
const server = createServer((request, response) => {
console.log(
    request.method,
    request.url
)
})
server.listen(3000)