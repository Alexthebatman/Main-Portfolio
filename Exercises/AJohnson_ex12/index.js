const express = require('express');
const app = express();
const dater = require('./dater.js');
const logger = require('./logger.js');
const info = require('./routes/routeInfo.js')
app.use('/info', info);

app.get('/', dater, logger, (req,res)=>{
    // res.status(200).send('Home');
    return res.status(200).send(`Welcome! Today's date is ${req.formattedToday}.`);
    res.end;
});

app.listen(8080,()=>{
    console.log('Server running at http://localhost:8080/');
});