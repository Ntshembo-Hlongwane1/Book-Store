import Auth  from './Components/Auth/Auth'
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './Components/Home/Navigation/Navigation'
import { SideBar } from './Components/Dashboard/SideBar/SideBar'
import { DashboardHome } from './Components/Dashboard/DashboardHome';
import { PersonalInfoManager } from './Components/Dashboard/PersonalInfoManager/PersonalInfoManager';
import { LoginManger } from './Components/Dashboard/LoginManager/LoginManger';
import { NewCreditCard } from './Components/Dashboard/CreditCardManager/NewCreditCard'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/dashboard" exact={true}>
          <div className="dashbord-divider">
            <SideBar />
            <DashboardHome />
          </div>
        </Route>
        <Route path="/dashboard/add-new-credit-card" exact={true}>
          <div className="dashbord-divider">
            <SideBar />
            <NewCreditCard />
          </div>
        </Route>
        <Route path="/dashboard/update-login-details" exact={true}>
          <div className="dashbord-divider">
            <SideBar />
            <LoginManger />
          </div>
        </Route>
        <Route path="/dashboard/update-info" exact={true}>
          <div className="dashbord-divider">
            <SideBar />
            <PersonalInfoManager />
          </div>
        </Route>
        <Route path="/auth" exact={true}>
          <Auth />
        </Route>
        <Route path='/' exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
