const http = require('http');//importing the in built http module
const ownModule = require('./ownmodule');//calling one module from another/user defined module
//dt : today's date
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("My full name is: " + ownModule.Surname("Ashutosh"));
  //datetime is being fetched from the  outside module
  //using the content type mentioned above as text/htmluser defined module
  res.end();//ending the writing functionality
}).listen(8080);//mentioning which port our application will run on the server