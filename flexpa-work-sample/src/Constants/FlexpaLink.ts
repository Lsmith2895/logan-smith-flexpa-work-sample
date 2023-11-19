import { FlexpaConfig } from "../types/FlexpaConfig";


 declare const FlexpaLink: {
    create: (config: FlexpaConfig) => Record<string, unknown>;
    open: () => Record<string, unknown>;
  }

  export { FlexpaLink }