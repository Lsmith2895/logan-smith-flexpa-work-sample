import { useState } from 'react';
import './App.css'
import { startFlexpaLink } from './startFlexpaLink';
import { FlexpaConfig } from './types/FlexpaConfig';
import { ExplanationOfBenefits } from './Components/ExplanationOfBenefits';
import mockData from './mockExplanationOfBenefits.json'
import { NavigationBar } from './Components/NavigationBar';
import { Header } from './Components/Header';

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
}

function App() {
  const [showMockData, setShowMockData] = useState(false)
  console.log(mockData)
  return (
    <>
    <NavigationBar />
     <div className='flex flex-col justify-center px-8'>
      < Header />
      <div className='flex flex-wrap mt-10 justify-evenly p-10 md:mt-0'>
        <button className='bg-lime-900 text-neutral-200 p-4 rounded-lg text-2xl font-semibold'
          onClick={() => {
            console.log(startFlexpaLink(), 'values returned by start flexpa link')
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
      </div>
    </>
  )
}

export default App
