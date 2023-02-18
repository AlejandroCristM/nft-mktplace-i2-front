import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../containers/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
// import NFTDetails from './NFTDetails';
// import Purchase from './Purchase';
// import Auction from './Auction';
// import Sell from './Sell';
// import Transactions from './Transactions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/transactions" element={<Transactions />} /> */}
      </Routes>
    </Router>
  );
}

export default App;