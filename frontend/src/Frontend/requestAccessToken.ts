import axios from 'axios'

async function requestAccessToken(publicToken: string) {
	const getAccessTokenUrl = `http://localhost:9000/access/${publicToken}`
	try {
		const response = await axios.get(getAccessTokenUrl)
		console.log(response, "***** request access token response")
		return response
	} catch (error) {
		console.error(error)
		// TODO: add dynatrace / loggly / or other logging here to let the team know of a failure
		throw new Error()
	}
}
export { requestAccessToken }