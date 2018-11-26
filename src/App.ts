const express = require('express')

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    }),
    router.get('/add/:name', (req, res) => {
      req.params.name
      res.json({
        message: 'Hello World add!'
      })
    }),
    this.express.use('/', router)
  }
}

export default new App().express
