const express = require('express');
const path = require('path');
const mysql = require('mysql');

//MySQL Database Connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'moviebooking'
});

const app = express();
app.use(express.urlencoded());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));

//Testing
app.get('/getSession', function (req, res) {
  console.log("Get session function initiated");
  
  console.log('Connection State: ' + connection.state);
  if(connection.state === 'disconnected'){
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
  
  connection.query("SELECT * FROM SESSION_TIME", function(err, result){
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.PORT || 5000;
//app.listen(port);

app.listen(port, () => {
  console.log('Go to http://localhost:' + port);
});
