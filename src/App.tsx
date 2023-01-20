import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import OrderInfoPage from './page/OrderInfoPage';
import { fetchCartList } from './store/feature/CartListInfo';
import { fetchData } from './store/feature/InitialData';
import { useAppDispatch } from './store/store';
import './style/App.scss'

function App() {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchData())
  //   dispatch(fetchCartList())
  // })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='orderInfo' element={<OrderInfoPage />} />
          <Route path='*' element={<NotFoundPage />} />
          {/* <Route path='/' element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
