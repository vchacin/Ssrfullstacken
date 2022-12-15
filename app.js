const { server } = require('./server.js');

const main = () => {
    try { 
        server.listen(3000, () => {
        console.log("Server on 3000");
        });
    } catch (error) {
        console.log("Can't connect", error.message);
    }
};
    
main();