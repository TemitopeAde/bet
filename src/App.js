import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Signup from './pages/Signup';
import LoginButton from './component/Login';
import Profile from './pages/Profile';
import LogoutButton from './component/Logout';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LoginButton />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<LogoutButton />} />
        
      </Routes>
    </div>
  );
}

export default App;
