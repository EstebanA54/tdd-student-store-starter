const express = require('express') 
const morgan = require('morgan') //log activity in our application
const bodyParser = require('body-parser');
const app = express(); //create a new instance of express application
const storeRouter = require("./routes/store")
const {NotFoundError} = require("./utils/errors")
const cors = require('cors');
app.use(morgan("tiny"))
app.use(bodyParser.json())
app.use(cors());
// app.use((req,res,next) => {
//     return next(new NotFoundError())
// })
// app.use((error, req,res,next) => {
//     const status = error.status || 500
//     const message = error.message

//     return res.status(status).json({
//         error: {message, status}
//     })
// })

app.use("/store", storeRouter)

app.get("/", async(req, res, next) => {
    res.status(200).json({ ping: "poong"})
})

module.exports = app;