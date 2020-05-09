const express = require('express');

// As not returning anything no need to assign to object
require('./services/passport')


// create app express object
const app = express();

// Call authRoutes with app object
require('./routes/authRoutes')(app);

//app.get('/', (req,res) => {
//	res.send({ hi: 'theres' });
//});

//const PORT = process.env.PORT || 5000
//app.listen(PORT);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});