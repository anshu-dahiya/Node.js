function myHandler(req, res) {

    if(req.url === "/favicon.ico")
        return res.end();
    
    const log = `${Date.now()}: ${req.method}: ${req.url}: New Req. Received\n`;

    const myURL = url.parse(req.url, true);

    fs.appendFile('log.txt', log , (err, data) => {
        switch(myURL.pathname){
            case '/' :
                if(req.method === "GET")res.end("Home Page");
                break;

            case '/about' :
                const username = myURL.query.myname;
                res.end(`Hi, ${username}`);
                break;

            case "/signup" :
                if(req.method === "GET") res.end("This is signup form");
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Success");
                }
                break;

            default : 
                res.end("404 page not found");
        }
    });
}