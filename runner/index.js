const http = require('http');
const { exec } = require('child_process');

const server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    let body = ''
    request.on('data', function(data) {
      body += data
    })
    request.on('end', function() {
      response.writeHead(200, {'Content-Type': 'application/json'})
      console.log(body)

      exec('ls /home/ubuntu/projects/', (err, stdout, stderr) => {
        console.log(
            err, 
            stdout, 
            stderr
        )
      })

      response.end({ok: true, body})
    })
  }
})

const port = 8443
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)