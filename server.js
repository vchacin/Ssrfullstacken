
const express = require("express");
const server = express();
const cors = require('cors');

// to enable parsing of json bodies for post requests
server.use(express.json());

// gives permissions to make requests from the front end  
server.use(cors()); 

server.post('/calculator', function(req, res){
    const { body } = req.body;
    try {
        if (!body) {
            throw new Error ("The parameters necessary to create the calculation were not received.")
        }
        if (!/^[0-9*/()+-]+/g.test(body)) {
            throw new Error ("Invalid term provided.")
        }
        const mathExpression = eval(body);
        return res.status(200).json({result: mathExpression});
    } catch(error) {
        return res.status(422).json({error: error.result})
    }
});


module.exports = { server };