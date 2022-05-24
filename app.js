import express from "express";
import 'dotenv/config';
import logMiddleware from "./middlewares/log.middleware.js";
import authMiddleware from "./middlewares/auth.middleware.js";

const port =process.env.port
const app = express()

app.use(express.json())
//app.use(logMiddleware); //sempre usare 'sto logmiddleware
//app.use(authMiddleware);  //sempre usare 'sto authmiddleware





app.get('/', authMiddleware, function (req, res) {

    console.log(`Faccio modifica senza fare restart`)
    res.send('sei arrivato')
  })
  
  app.get('/test', logMiddleware, (request,response)=> 
    response
    .status(200)
    .json ({
      'data':'Valore',
      'status':'Ok',
      "value": 1,
    })
  )

  //per gestire tutto il resto
  app.all('*', (request, response)=>{
    console.log(`sei in una risorsa non corretta`)
    response
    .status(500)
    .json ({
      'success':'False',
      'code':'1001',
      "message": 'Risorsa non disponbiile',
    })
  })

app.listen(port)