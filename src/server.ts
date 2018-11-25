import { MetricsHandler } from './metrics'
import app from './App'

app.get('/metrics', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})
