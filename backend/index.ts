import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { exchangeLink } from './axiosRequests/exchangeLink';
import { getExplanationOfBenefit } from './axiosRequests/getExplanationOfBenefit';

dotenv.config();

const app = express();
const port = 9000;

app.use(cors());

app.get('/access/:publicToken', async (request: Request, response: Response) => {
	const flexpaSecretKey = process.env.FLEXPA_SECRET_KEY

	try {
		if (flexpaSecretKey) {
			const accessTokenResponse = await exchangeLink(request.params.publicToken, flexpaSecretKey)
			const explanationOfBenefit = await getExplanationOfBenefit(accessTokenResponse.access_token)
			
			console.log("EOB", explanationOfBenefit.data)

			response.send(explanationOfBenefit.data);
		}
		
		response.send('Your Flexpa Secret key is invalid')

	} catch (error) {
		// TODO: add dynatrace / loggly / or other logging here to let the team know of a failure
		console.error(error);
		response.status(429).send(error);
	}
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
