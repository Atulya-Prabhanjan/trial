import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/login' element={<Login/>}>
      </Route>
    </Routes>
  );
}

export default App;
