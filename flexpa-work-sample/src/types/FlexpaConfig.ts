 export interface FlexpaConfig {
    publishableKey: string;
    onSuccess: (publicToken: string) => Promise<void> | unknown;
  }