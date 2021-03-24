import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CartContextProvider } from "./contexts/cartContext";

import Home from './pages/Home';
import Navbar from './components/layout/navbar/navbar';
import LoggedIn from './components/loggedIn/loggedIn';
import MenuDetail from './pages/menuDetail';
import Profile from './pages/profile';
import CartOrderView from './pages/cartOrder/cartOrder';
import IncomeTransaction from './pages/incomeTransaction/incomeTransaction';
import ProfilePartnerPage from './pages/profilePartner';

function App() {
  return (

    <CartContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <div className="bg-light-2">
            <Route exact path="/" component={Home} />
            <Route exact path="/loggedin" component={LoggedIn} />
            <Route exact path="/menudetail/:id" component={MenuDetail} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cart-order" component={CartOrderView} />
            <Route exact path="/income-transaction" component={IncomeTransaction} />
            <Route exact path="/profile-partner" component={ProfilePartnerPage} />
          </div>
        </Switch>
      </Router>
    </CartContextProvider>


  );
}

export default App;
