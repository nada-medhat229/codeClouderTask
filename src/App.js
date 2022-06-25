import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import style from './App.module.css';

function App() {
  return (
    <BrowserRouter>
    <div className={style.container}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
