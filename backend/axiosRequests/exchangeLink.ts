import axios, { AxiosResponse } from 'axios';

interface AccessTokenResponse {
    access_token: string;
}

export const exchangeLink = async (publicToken: string, flexpaSecretKey: string): Promise<AccessTokenResponse> => {
    const response = await axios.post(
        'https://api.flexpa.com/link/exchange',
        {
            public_token: publicToken,
            secret_key: flexpaSecretKey,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
};
