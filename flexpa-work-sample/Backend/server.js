import express from 'express'

const app = express()
// eslint-disable-next-line no-undef
const port = process.env.REACT_APP_PORT

app.get('/', (request, response) => {
    response.send('express ts server is running')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });