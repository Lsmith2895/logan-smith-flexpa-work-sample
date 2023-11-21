import { FlexpaConfig } from "./types/FlexpaConfig";
import { requestAccessToken } from "./requestAccessToken";

declare const FlexpaLink: {
    create: (config: FlexpaConfig) => Record<string, unknown>;
    open: () => Record<string, unknown>;
}


function startFlexpaLink() {
    const flexpaPublishableKey = import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY

    return FlexpaLink.create({
        publishableKey: flexpaPublishableKey,
        onSuccess: async (publicToken: string) => {
           const response = await requestAccessToken(publicToken)
           console.log('start flexpa response', response)
           return response
        },
    }) 

}

export { startFlexpaLink }

