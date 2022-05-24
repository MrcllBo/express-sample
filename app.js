import express from "express";
import 'dotenv/config';

const app = express()

app.get('/',  (request, response) =>
    response.send('Hello World')
)

app.listen(process.env.PORT || 3000)