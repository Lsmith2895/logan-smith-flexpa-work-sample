import { useState } from 'react';
import './App.css'
import { startFlexpaLink } from './startFlexpaLink';
import { FlexpaConfig } from './types/FlexpaConfig';
import { ExplanationOfBenefits } from './Components/ExplanationOfBenefits';
import mockData from './mockExplanationOfBenefits.json'
import { FlexpaLogo } from './icons/flexpaLogo';

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
}

function App() {
  const [showMockData, setShowMockData] = useState(false)
  console.log(mockData)
  return (
    <>
    <nav className="bg-slate-400 w-full h-11">
    <FlexpaLogo width={"25xp"} height={"50px"}/>
     </nav>
      <h1 className='text-7xl font-extrabold mb-11'> Welcome to Logan Smith's Flexpa Work Sample</h1>
      <div className='flex justify-between p-10'>
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
    </>
  )
}

export default App
