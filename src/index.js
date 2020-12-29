const express = require('express');
const morgan = require('morgan');
app = express();

// settings

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.json({"Title": "Hello World!"});
})

// starting server
app.listen(app.get('port'), () => {
  console.log(`running on port ${app.get('port')}`);
});
