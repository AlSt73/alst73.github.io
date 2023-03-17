import Routing from './Routes/Routing';
import './assets/css/style.css'
import Weather from './components/Weather/Weather'
import { AuthProvider } from './hooks/useContext';

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Routing />

      </AuthProvider>
    </div>
  )
}

export default App
