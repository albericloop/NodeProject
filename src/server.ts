import {MetricsHandler} from './metrics'
import {Metric} from './metrics'
//import app from './App'
import express = require('express')
var bodyparser = require('body-parser');
const app = express()
const port: string = process.env.PORT || '8081'

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/', (req: any, res: any) => {
  res.write('Hello world')
  res.end()
})

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})

app.get('/metrics', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/metricssave', (req: any, res: any) => {
  const met = [
    new Metric(`${new Date('2013-11-04 14:00 UTC').getTime()}`, 12),
    new Metric(`${new Date('2013-11-04 14:15 UTC').getTime()}`, 10),
    new Metric(`${new Date('2013-11-04 14:30 UTC').getTime()}`, 8)
  ]
  const db = new MetricsHandler('./db')

  db.save(0, met, (err: Error | null) => {
    if (err) {
      throw err
    }
    //res.json(result)
  })
})
/*
app.save('/metrics', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})*/
