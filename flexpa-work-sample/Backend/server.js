import express from 'express'

const app = express()
const port = 9000

app.get('/', (request, response) => {
    response.send('express ts server is running')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });