import axios from 'axios'

function requestAccessToken(publicToken: string) {
	const getAccessTokenUrl = `http://localhost:9000/access/${publicToken}`

	axios.get(getAccessTokenUrl)
		.then((response) => {
			console.log('it worked');
			return response
		})
		.catch((error) => { throw new Error(error) })
}
export { requestAccessToken }