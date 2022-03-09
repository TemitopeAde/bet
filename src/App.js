import './App.css';
import Header from './component/home/header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
