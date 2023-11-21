import { ExplanationOfBenefitBundle } from "../types/ExplanationOfBenefits"

interface explanationOfBenefitsProps {
    mockData: ExplanationOfBenefitBundle
}

function ExplanationOfBenefits({mockData}: explanationOfBenefitsProps) {

    return (
        <div className="min-w">
            <h1> Explanation of Benefit Data</h1>
            <div>{`ID: ${mockData.id}`}</div>
            <div>{`resourceType: ${mockData.entry[0].resource.resourceType}`}</div>
            <button href={mockData.entry[0].url} className="bg-zinc-500 p-2 rounded-lg text-white"> link to my explanation of benefits</button>
        </div>
    )
}

export { ExplanationOfBenefits }