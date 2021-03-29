import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';


import CartState from "./contexts/cart/cartState";
import AuthState from "./contexts/auth/authState";
import PartnerState from "./contexts/partner/partnerState";

import Home from './pages/Home';
import Navbar from './components/layout/navbar/navbar';
import LoggedIn from './components/loggedIn/loggedIn';
import MenuDetail from './pages/menuDetail';
import Profile from './pages/profile';
import CartOrderView from './pages/cartOrder/cartOrder';
import IncomeTransaction from './pages/incomeTransaction/incomeTransaction';
import ProfilePartnerPage from './pages/profilePartner';
import AddProduct from './components//addProduct/addProduct';
import { setAuthToken } from "./components/config/api";


// 	init token agar setiap aplikasi di refesh tetap dalam kondisi login
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {


  return (
    <AuthState>
      <PartnerState>
        <CartState>
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
                <Route exact path="/profile-partner" component={ProfilePartnerPage} />
                <Route exact path="/add-product" component={AddProduct} />
              </div>
            </Switch>
          </Router>
        </CartState>
      </PartnerState>
    </AuthState>


  );
}

export default App;
