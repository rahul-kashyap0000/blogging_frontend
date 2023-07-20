import './App.css';
import Main from './components/ui/Main';
import Navbar from './components/ui/Navbar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
