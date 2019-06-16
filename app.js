const express = require('express')
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

var problem1Service = require('./problem1.js');
var problem2Service = require('./problem2.js');

app.use('/solution1', problem1Service);
app.use('/solution2', problem2Service);

app.listen(8081, () => {
  console.log('App listening on port 8001!')
});
