require("dotenv").config();
const express = require("express");
const connectedToDb = require('./database/db')
const bookRouter = require('./routes/book-routes')

const app = express();
const PORT = process.env.PORT || 5000;
connectedToDb();

app.use(express.json())
app.use('/api/books', bookRouter)

app.listen(PORT, () => (
    console.log(`Server running successfully on Port ${PORT}`)
))
