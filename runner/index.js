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
    let [unused, projectName] = request.url.split("/project/");
    request.on('data', function(data) {
      body += data
    })
    request.on('end', function() {
      response.writeHead(200, {'Content-Type': 'application/json'})
      console.log(body)
      
      const projectName = getProjectName(body?.repository?.url);

      if (!body?.ref?.includes('heads/main')) {
        return response.end(JSON.stringify({ok: true, body}));
      }
        exec(`sudo make ${projectName}`, (err, stdout, stderr) => {
            console.log(
                err, 
                stdout, 
                stderr
            )

          response.end(JSON.stringify({ok: true, body}))

        })
    })
  }
})

const port = 8443
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)