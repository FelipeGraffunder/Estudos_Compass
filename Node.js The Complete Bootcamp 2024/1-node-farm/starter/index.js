const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template_overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template_product.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template_card.html`,'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

const dataObject = JSON.parse(data);

const server = http.createServer((req,res)=> {
    const {query,pathname} = url.parse(req.url,true);

    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type': 'text/html'});
        const cardsHTML = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHTML);

        res.end(output);
        


    }else if(pathname === '/product'){
        res.writeHead(200,{'Content-type': 'text/html'});
        const product = dataObject[query.id];
        const output = replaceTemplate(tempProduct,product);

        res.end(output);


    }else if(pathname === '/API'){
        res.writeHead(200,{'Content-type': 'application/json'});
        res.end(data);



    }else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000,'127.0.0.1',()=> {
    console.log('ouvindo a porta 8000');
});

