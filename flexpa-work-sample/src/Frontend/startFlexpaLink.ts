import { FlexpaConfig } from "../types/FlexpaConfig";
import { requestAccessToken } from "./requestAccessToken";

declare const FlexpaLink: {
    create: (config: FlexpaConfig) => Record<string, unknown>;
    open: () => Record<string, unknown>;
}


function startFlexpaLink() {
    const flexpaPublishableKey = import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY

    FlexpaLink.create({
        publishableKey: flexpaPublishableKey,
        onSuccess: (publicToken: string) => {
            console.log('you got a publicToken: ', publicToken);
            requestAccessToken(publicToken)
        },
    });

}

export { startFlexpaLink }

