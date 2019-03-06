//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-app'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4529,()=>{
console.log("app start at port : 4529")
});