import axios from 'axios'

function exchangePublicToken( publicToken: string): void {
    axios.post(
        'https://api.flexpa.com/link/exchange',
        { public_token: publicToken,
          secret_key: 'sk_test_blS7I4P1qIWMOFIDD703g3NKqW6rtdI9DN8PhQ9cVOE'
        }, 
        { headers: { 
            'Content-Type': 'application/json' 
        }})
}

export {exchangePublicToken}