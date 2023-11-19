import { FlexpaConfig } from "../types/FlexpaConfig";

declare const FlexpaLink: {
    create: (config: FlexpaConfig) => Record<string, unknown>;
    open: () => Record<string, unknown>;
}


function startFlexpaLink() {
    const flexpaPublishableKey = import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY
    const flexpaSecretKey = import.meta.env.VITE_FLEXPA_SECRET_KEY

    console.log(flexpaPublishableKey, flexpaSecretKey)

    FlexpaLink.create({
        publishableKey: flexpaPublishableKey,
        onSuccess: (publicToken: string) => {
            console.log('you got a publicToken: ', publicToken);
        },
    });

}

export { startFlexpaLink }

