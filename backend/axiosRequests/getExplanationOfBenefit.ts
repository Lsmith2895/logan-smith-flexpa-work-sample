import axios, { AxiosResponse } from 'axios';

export const getExplanationOfBenefit = async (accessToken: string): Promise<AxiosResponse> => {
    console.log('********* ', accessToken)
    return axios.get(
        'https://api.flexpa.com/fhir/ExplanationOfBenefit',
        {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${accessToken}`,
                'x-flexpa-raw': '0',
            },
        }
    );
};
