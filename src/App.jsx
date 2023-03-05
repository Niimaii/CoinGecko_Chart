import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoDetail from './routes/CryptoDetail';
import CryptoHome from './routes/CryptoHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CryptoHome />} />
        <Route path='/coin:id' element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
