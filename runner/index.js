const http = require('http');
const { exec } = require('child_process');

function getProjectName(gitUrl) {
    if (gitUrl?.toLowerCase() === "https://github.com/Ashitaaka/make-it-grow".toLowerCase()) {
        return "makesense";
    }
    if (gitUrl?.toLowerCase() === "https://github.com/Rom-Val/BTZ_WCS_template-P3".toLowerCase()) {
        return "inovin";
    }
    if (gitUrl?.toLowerCase() === "https://github.com/justroxanne/labelmarne".toLowerCase()) {
        return "adt";
    }
}

const server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    let body = '';
    request.on('data', (data) => body += data)
    request.on('end', function() {
      response.writeHead(200, {'Content-Type': 'application/json'})
      body = JSON.parse(body)
      
      const projectName = getProjectName(body?.repository?.url);

      if (!projectName || (!body?.ref?.includes('heads/main') && !body?.ref?.includes('heads/master'))) {
        
        return response.end(JSON.stringify({status: "up to date"}));
      }
        exec(`sudo make ${projectName}`, (err, stdout, stderr) => {
            console.log(
                err, 
                stdout, 
                stderr
            )

          response.end(JSON.stringify({ok: true}))

        })
    })
  }
})

const port = 8443
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)