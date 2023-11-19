import './App.css'
import { startFlexpaLink } from './Frontend/startFlexpaLink'

function App() {
  startFlexpaLink();
  return (
    <>
      <h1> Welcome to Logan Smith's Flexpa Work Sample</h1>
      <button onClick={FlexpaLink.open()}>Connect your health data</button>
    </>
  )
}

export default App
