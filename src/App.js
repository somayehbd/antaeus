import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';
import SigninResult from './components/signinresult/SigninResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin-result" element={<SigninResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
