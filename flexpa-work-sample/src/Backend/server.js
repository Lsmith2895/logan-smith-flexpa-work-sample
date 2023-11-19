/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'

const app = express();
const port = 9000;

app.use(cors());

app.get('/access/:publicToken', (request, response) => {
    const publicToken = request.params.publicToken
    console.log(`we recieved your public token ${publicToken}`)
    response.send(`we recieved your public token ${publicToken}`)
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});