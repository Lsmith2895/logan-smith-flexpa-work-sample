import axios from 'axios'
import { ExplanationOfBenefitBundle } from './types/ExplanationOfBenefits'

async function requestAccessToken(publicToken: string): Promise<ExplanationOfBenefitBundle> {
	const getAccessTokenUrl = `http://localhost:9000/access/${publicToken}`
	try {
		const response = await axios.get(getAccessTokenUrl)
		return response.data
	} catch (error) {
		console.error(error)
		// TODO: add dynatrace / loggly / or other logging here to let the team know of a failure
		throw new Error()
	}
}
export { requestAccessToken }