var path = require('path');

module.exports = function(app){
    app.get("/survey", function(req, res){
        // if(req.url.includes(".css")){
        //     res.writeHead(200, { "Content-Type": "text/css" });
        //   }else{
        //     res.writeHead(200, { "Content-Type": "text/html" });
        //     res.sendFile(path.join(__dirname, "../public/survey.html"));
        //   }
          
        // //   res.end(data);
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}