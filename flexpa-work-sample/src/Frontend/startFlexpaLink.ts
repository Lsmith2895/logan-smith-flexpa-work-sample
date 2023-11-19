declare const FlexpaConfig: {
    publishableKey: string;
    onSuccess: (publicToken: string) => Promise<void> | unknown;
  }

declare const FlexpaLink: {
    create: (config: typeof FlexpaConfig) => Record<string, unknown>;
    open: () => Record<string, unknown>;
  };

function startFlexpaLink(){
    const flexpaPublishableKey = import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY
    const flexpaSecretKey = import.meta.env.VITE_FLEXPA_SECRET_KEY
    if (flexpaPublishableKey && flexpaSecretKey){
      FlexpaLink.create({
         publishableKey:  flexpaPublishableKey,
         onSuccess: (publicToken: string) => {
           console.log('you got a publicToken: ', publicToken);
         },
       });
    }

    throw new Error('your Flexpa keys are not defined')
}

export {startFlexpaLink}

