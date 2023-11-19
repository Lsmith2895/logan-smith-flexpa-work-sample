/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
const port = 9000;

app.use(cors());

app.get('/access/:publicToken', async (request, response) => {
    const publicToken = request.params.publicToken

    try {
        console.log('trying to get access token')

        const accessToken = await axios.post(
            'https://api.flexpa.com/link/exchange',
            {
                public_token: publicToken,
                secret_key: 'sk_test_blS7I4P1qIWMOFIDD703g3NKqW6rtdI9DN8PhQ9cVOE'
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log('access token data in the server', accessToken.data)
        response.send(accessToken.data)

    } catch (error) {

        console.log('getting access token failed')
        console.error(error)
        response.send(error.status)
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});