import Layout from './components/layout/Layout';
import SigninResult from './components/signinresult/SigninResult'
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/signin-result' element={<SigninResult/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
