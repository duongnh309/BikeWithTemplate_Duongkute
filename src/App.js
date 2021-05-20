import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import FixHeader from './components/headers/FixHeader';
import TopHeader from './components/headers/TopHeader';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';
import BikesFeature from './features/Bike/index';
import CheckoutFeature from './features/Checkout';
import Admintest from './features/Admintest/index';








function App() {
  return (
    <div className="App">
      <TopHeader />
      <FixHeader />

      <Switch>
        <Route path="/bikes" component={BikesFeature} />
        <Route path="/checkout" component={CheckoutFeature} />
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutUs} />
        {/* <Route path="/admin" component={Admintest} /> */}
        <Route path="/admin" render={() => {
          return localStorage.getItem('user') ? <Admintest /> : <Redirect to="/"/>
        }} />

      </Switch>
      <Footer />

    </div>

  );
}

export default App;
