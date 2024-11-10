// let http = require('http');
// // let dt = require('./myfirstmodule');
// let url = require('url');
// let fs = require('fs');
// let uc = require('upper-case');
// let rs = fs.createReadStream('./demo.txt');
// let events = require('events');
// let eventEmitter = new events.EventEmitter();

// // Create an event handler:
// let myEventHandler = function() {
//     console.log(' I hear scream');
// }
// // Assing the event handler to an event:
// eventEmitter.on('scream' , myEventHandler);

// // Fire the "scream" event;
// eventEmitter.emit('scream');

// // rs.on('open' , function() {
// //  console.log('The file is open');
// // })


// // let adr = 'http://localhost:8000/default.html?year=2024&month=september';
// // let q = url.parse(adr, true);

// // console.log(q.host); //returns localhost:8000
// // console.log(q.pathname);
// // console.log(q.search);


// // let qdata = q.query;
// // console.log(qdata);

// // http.createServer(function (req, res){
// //     res.writeHead(200,{ 'Content-Type': 'text/html'});
// //     res.write(uc.upperCase('Thanapong Srangchang'));
// //     res.end();
// // }).listen(8000);

//     // let q = url.parse(req.url, true);
//     // let filename = "." + q.pathname; //./somepath
//     // fs.readFile(filename, function(err, data){
//     //     if (err ) {
//     //         res.writeHead(404, { 'Content-Type' : 'text/html'})
//     //         return res.end('404 Not Found');
//     //     }
//     //     res.writeHead(200, { 'Content-Type' : 'text/html'});
//     //     res.write(data);
//     //     return res.end () ;

//         // res.writeHead(200, { 'Content-Type' : 'text/html'});
//         // res.write(data);
//         // return res.end();
//     // })


// // fs.appendFile('mynewfile.txt' , 'Hello, world' , function(err){
// //     if (err) throw err;
// //     console.log('Saved!');
// // })