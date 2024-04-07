const http = require('http');

http.createServer((req, res) => {
  // Imposta lo status code 302 per il reindirizzamento temporaneo
  res.writeHead(302, {
    'Location': 'https://195.231.71.45'
  });
  res.end();
}).listen(80, () => {
  console.log('Server in ascolto sulla porta 80. Tutte le richieste vengono reindirizzate a https://195.231.71.45');
});
