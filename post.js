import { createServer } from 'node:http'

const server = createServer((req, res) => {
  if(req.method === "POST") {
    res.end(JSON.stringify({ status: "Dane odebrane przez POST" }))
    console.log("Otrzymano żądanie POST")
  } 
})

server.listen(3015)