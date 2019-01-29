const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const app = express()

const api = require('./src/routers/api')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

//middleware
app.use(morgan('combined'));
app.use('/api', api);


app.use('/', (req, res) => {
    res.send('Hello')
})


//error 404
app.use((request, response) => {
    const ERROR = {
        message: '404. Not Found'
    }
    response
        .status(404)
        .json(ERROR);
});

//error 500
app.use((err, request, response, next) => {
    const ERROR = {
        message: '500. Server Error'
    }
    response
        .status(500)
        .json(ERROR);
});


app.listen(PORT, () => {
    const msg = chalk.blue(`Node Server is running on PORT: ${PORT}`);

    console.log(msg);
});
