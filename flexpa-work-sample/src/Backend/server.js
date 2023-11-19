/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
const port = 9000;

app.use(cors());

app.get('/access/:publicToken', async (request, response) => {
    try {
        //TODO: break this out into a single function
        console.log('getting access token')
        const accessToken = await axios.post(
            'https://api.flexpa.com/link/exchange',
            {
                public_token: request.params.publicToken,
                secret_key: 'sk_test_blS7I4P1qIWMOFIDD703g3NKqW6rtdI9DN8PhQ9cVOE'
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        console.log('***** access token ***** ', accessToken.data.access_token)

        //TODO: I dont like this chaining but due to time constraints leaving it
        console.log(' ***** getting EOB *****')

        const explanationOfBenefit = await axios.get('https://api.flexpa.com/fhir/ExplanationOfBenefit',
            {
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken.data.access_token}`,
                    "x-flexpa-raw": "0",
                }
            })

        console.log('***** EOB *****', explanationOfBenefit.data)

        response.send(explanationOfBenefit.data)
    } catch (error) {
        // TODO: add dynatrace / loggly / or other logging here to let the team know of a failure
        console.error(error)
        response.status(error.statusCode).send('getting access token failed')
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});