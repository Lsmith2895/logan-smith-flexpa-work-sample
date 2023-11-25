/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ExplanationOfBenefitBundle } from "../types/ExplanationOfBenefits"

import { ReactElement } from "react"
import { Address } from "../types/ExplanationOfBenefits"

function ExplanationOfBenefits(mockData: any): ReactElement {
    const firstEntry = mockData.mockData.entry[0].resource
    return firstEntry.contained.map((contained: any) => {
        let contact = ''
        const resourceAddress: Address = contained.address[0]

        if (contained.contact && contained.contact.length > 0) {
            contact = contained.contact[0]
        }
        if (contained.name && !contained.name.family) {
            return (
                <div className="m-5 bg-neutral-200 h-auto w-60 p-3 rounded-lg shadow-gray-400 shadow-xl border-gray-400" key={Math.random()}>
                    {typeof contained.name === "string" && contained.resourceType && (
                        <div className="mb-3">
                            <div className="mb-2 font-bold">
                                {contained.resourceType}:
                            </div>
                            <div>
                                {contained.name}
                            </div>
                        </div>)}
                    <div className="mb-3">
                        <div className="mb-2 font-bold">Address:</div>
                        <div> {resourceAddress.line.join(' ')} {resourceAddress.city}, {resourceAddress.state} {resourceAddress.postalCode}, {resourceAddress.country}</div>
                    </div>
                    {contact &&
                        <div className="mb-3">
                            <div className="mb-2 font-bold">Phone Number:</div>
                            <div className="">{contained.contact[0].telecom[0].value}</div>
                        </div>
                    }
                </div>
            )
        }
    })
    return (<></>)

}

export { ExplanationOfBenefits }