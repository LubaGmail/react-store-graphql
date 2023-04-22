import { Routes, Route } from 'react-router-dom';

import Nav from './components/navigation/nav'
import Home from './routes/home/home';
import Auth from './routes/auth/auth';
import Test from './components/test/test'
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />} >
        <Route path='/' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='test' element={<Test />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
