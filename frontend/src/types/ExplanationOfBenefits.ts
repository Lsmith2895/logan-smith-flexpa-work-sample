interface ExplanationOfBenefitBundle {
    resourceType: string;
    id: string;
    entry: ExplanationOfBenefitEntry[];
}

interface ExplanationOfBenefitEntry {
    url: string;
    resource: ExplanationOfBenefitResource;
}

interface ExplanationOfBenefitResource {
    resourceType: string;
    // You can add more properties specific to ExplanationOfBenefitResource if needed
}

export type { ExplanationOfBenefitBundle }