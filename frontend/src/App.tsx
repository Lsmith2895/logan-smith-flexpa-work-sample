/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css'
import { FlexpaConfig } from './types/FlexpaConfig';
import { ExplanationOfBenefits } from './Components/ExplanationOfBenefits';
import mockData from './mockeob2.json'
import { NavigationBar } from './Components/NavigationBar';
import { Header } from './Components/Header';
import { requestAccessToken } from './requestAccessToken';

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
}

function App() {
  const [showMockData, setShowMockData] = useState(false)
  const [explanationOfBenefitData, setExplanationOfBenefitData] = useState<any>(null);
  console.log("*** EOB in app tsx ***", explanationOfBenefitData?.entry[0].url)
  return (
    <>
      <NavigationBar />
      <div className='flex flex-col justify-center px-8'>
        < Header />
        <div className='flex flex-wrap mt-10 justify-evenly p-10 md:mt-0'>
          <button className='bg-lime-900 text-neutral-200 p-4 rounded-lg text-2xl font-semibold'
            onClick={() => {
              const flexpaPublishableKey = import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY

              FlexpaLink.create({
                publishableKey: flexpaPublishableKey,
                onSuccess: async (publicToken: string) => {
                  const response = await requestAccessToken(publicToken)
                  console.log('start flexpa response', response)
                  if (response) {
                    setExplanationOfBenefitData(response)
                  }
                  return response
                },
              })
              FlexpaLink.open();
            }
            }
          >
            Connect your health data
          </button>

          <button className='bg-lime-900 text-neutral-200 p-4 rounded-lg text-2xl font-semibold' onClick={() => {
            setShowMockData(!showMockData)
          }}> Show Me Mock EOB Data </button>
        </div>
        {showMockData && <ExplanationOfBenefits mockData={mockData} />}
        {explanationOfBenefitData &&
          <div
            className="bg-red-700 h-20 font-bold text-white">
            {explanationOfBenefitData}
          </ div>}
      </div>
    </>
  )
}

export default App
