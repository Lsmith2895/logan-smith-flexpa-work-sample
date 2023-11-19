import './App.css'
import { startFlexpaLink } from './Frontend/startFlexpaLink';
// import { startFlexpaLink } from './Frontend/startFlexpaLink';
import { FlexpaConfig } from './types/FlexpaConfig';

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
}

// startFlexpaLink()

function App() {
  // 
  return (
    <>
      <h1 className='text-7xl font-extrabold mb-11'> Welcome to Logan Smith's Flexpa Work Sample</h1>
      <button className='bg-lime-900 text-neutral-200 p-4 rounded-lg text-2xl font-semibold' 
      onClick={() => {
        startFlexpaLink(); 
        FlexpaLink.open();}
      }
      >
        Connect your health data
      </button>
    </>
  )
}

export default App
