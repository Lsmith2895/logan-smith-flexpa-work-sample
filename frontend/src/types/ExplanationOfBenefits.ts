interface ExplanationOfBenefitBundle {
    resourceType: string;
    id?: string;
    entry: Entry[];
    type?: string;
}

interface Entry {
    url?: string;
    fullUrl: string;
    resource: Resource;
}

interface Resource {
    resourceType: string;
    id: string;
    meta: Meta;
    contained: ContainedResource[];
}

type MetaTag = {
    system: string;
    code: string;
  };
  
  type Meta = {
    versionId: string;
    lastUpdated: string;
    source: string;
    profile: string[];
    tag: MetaTag[];
  };
  
  type Identifier = {
    system: string;
    value: string;
    type?: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
    };
  };
  
  export type Address = {
    line: string[];
    city: string;
    state: string;
    postalCode: string;
    country?: string;
  };
  
  type Telecom = {
    system: string;
    value: string;
  };
  
  type Contact = {
    name?: {
      family: string;
      given?: string[];
    };
    telecom?: Telecom[];
  };
  
  type Organization = {
    resourceType: string;
    id: string;
    meta?: {
      profile: string[];
    };
    identifier?: Identifier[];
    name?: string;
    address?: Address[];
    contact?: Contact[];
  };
  
  type Practitioner = {
    resourceType: string;
    id: string;
    meta?: {
      profile: string[];
    };
    identifier?: Identifier[];
    name?: {
      family?: string;
      given?: string[];
    }[];
    telecom?: Telecom[];
    address?: Address[];
  };
  
  type ContainedResource = Organization | Practitioner;
  
  

export type { ExplanationOfBenefitBundle }