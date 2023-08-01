const   http   =   require('http');
const   url = require('url');
const   server   =   http.createServer((req,   res)   =>   {
    var urlParts = url.parse(req.url, true),
        urlParams = urlParts.query, 
        urlPathname = urlParts.pathname;
   console.log(`**** Request  received on ${urlPathname} at:   ${new   Date()}`); 
   res.writeHead(200, {'Content-Type': 'text/html'});
   var browser = req.headers['user-agent'];
   res.end("<h2>Hello From a simple Node.js app - version Aug 1 * </h2><p>I noticed you are using: " + browser + "</p><p>Requested at: " +  new Date());
});



console.log('Server   starting...'); server.listen(8080,   ()   =>   {
   console.log('Started.');
});


