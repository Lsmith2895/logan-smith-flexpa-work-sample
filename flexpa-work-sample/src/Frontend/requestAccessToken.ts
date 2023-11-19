import axios from 'axios'

async function requestAccessToken(publicToken: string) {
	const getAccessTokenUrl = `http://localhost:9000/access/${publicToken}`
	try {
		const response = await axios.get(getAccessTokenUrl)
		return response
	} catch (error) {
		console.error(error)
		throw new Error()
	}
}
export { requestAccessToken }