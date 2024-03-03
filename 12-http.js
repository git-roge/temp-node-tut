const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write(`Welcome to our HOME page`);
        res.end();
    }
    else if(req.url === '/about'){
        res.write(`Welcome to our ABOUT page`);
        res.end();
    }else{
    res.write(`
        <h1>Oopss!</h1>
        <p>This page is not available</p>
        <a href="/">back home</a>
        `
    );
    res.end();}
});

server.listen(5000);