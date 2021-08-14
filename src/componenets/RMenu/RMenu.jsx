import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from '../Menu/Menu';
import Mealplan from '../pages/Mealplan';
import Accountdetails from '../pages/Accountdetails';
import Settings from "../pages/Settings";
import AddMeal from "../pages/AddMeal";
import ChangePassword from '../pages/ChangePassword';
import AccountDetailsPro from '../pages/AccountDetailsPro';

function Routes() {
  
  return (
    <div>
      <Router>
          <Menu/>
          <div className="container" >
            
        <Switch>
          <Route exact path="/menu"  component={Mealplan} />
          <Route path="/accountdetails" component={Accountdetails} />
          <Route path="/settings" component={Settings} />
          <Route path='/addmealplan' component={AddMeal}/>
          <Route path='/changepassword' component={ChangePassword}/>
          <Route path='/testpro' component={AccountDetailsPro}/>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
