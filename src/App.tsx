import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Landing } from './components/landing'
import { Prefernces } from './components/preferences';
import { Account } from './components/createacc';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='preferences' element={<Prefernces/>}/>
          <Route path='create' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
