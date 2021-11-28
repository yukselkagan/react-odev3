import './App.css';
import Weather from './components/Weather';
import { CityProvider } from './Context/CityContext';
 

function App() {
  return (
    <>
      
      <CityProvider>
        <Weather/>
      </CityProvider>      
    </>
  );
}

export default App;
