var http = require('http');
var fs = require('fs');

//Create a server
http.createServer(function(req,res){

    //Doing so we pass ONE big chunk of data (around 1.5mb) to the browser 
    //const text = fs.readFileSync('./content/big.txt','utf8');
    //res.end(text);

    //Instead we can use streams to pass the data in different smaller chunks
    const fileStream=fs.createReadStream('./content/big.txt','utf8');;
    fileStream.on('open',()=>{
        //pipe method push from the read stream to the write stream
        fileStream.pipe(res);
    });

    //Handle the error
    fileStream.on('error',(err)=>{
        res.end(err);
    })
}).listen(5000);