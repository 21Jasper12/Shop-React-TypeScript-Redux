import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import './style/App.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
