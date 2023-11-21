import express, { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs/promises';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 9000;

app.use(cors());

app.get('/access/:publicToken', async (request: Request, response: Response) => {
    try {
        // TODO: break this out into a single function
        const accessToken = await axios.post(
            'https://api.flexpa.com/link/exchange',
            {
                public_token: request.params.publicToken,
                secret_key: process.env.VITE_FLEXPA_SECRET_KEY as string,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('accessToken', accessToken.data.access_token)

        // TODO: I dont like this chaining but due to time constraints leaving it
        const explanationOfBenefit = await axios.get(
            'https://api.flexpa.com/fhir/ExplanationOfBenefit',
            {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${accessToken.data.access_token}`,
                    'x-flexpa-raw': '0',
                },
            }
        );
        console.log("EOB", explanationOfBenefit.data)
        // await fs.writeFile('mockDb.txt', JSON.stringify(explanationOfBenefit.data));
        console.log(explanationOfBenefit.data);
        response.send(explanationOfBenefit.data);
    } catch (error) {
        // TODO: add dynatrace / loggly / or other logging here to let the team know of a failure
        console.error(error);
        response.status(500).send('getting access token failed');
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
