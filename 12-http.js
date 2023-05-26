const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('welcome to our Home page')
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
  }
  res.end(
    `<h1>Oops</h1>
    <p>we can't seem to find the page you are lookin for</p>
    <a href="/">Back home</a>`
  )


})

server.listen(5000)