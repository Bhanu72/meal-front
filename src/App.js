import "./App.css";
import Login from "./componenets/Login/Login";
import PasswordF from "./componenets/PasswordForgot/PasswordF";
import MobileV from "./componenets/MobileV/MobileV";
import Menu from "./componenets/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Card from "./componenets/Card/Card";
import RMenu from './componenets/RMenu/RMenu';
// import Flexbox from './componenets/Flexbox/Flex';
// import Button from './componenets/Flexbox/Button';
import AddMeal from "./componenets/pages/AddMeal";
import Inputs from "./componenets/Flexbox/Inputs";
import MealTable from "./componenets/Flexbox/MealTable";
import Mealplan from "./componenets/pages/Mealplan";
import Accountdetails from "./componenets/pages/Accountdetails";
import ChangePassword from  './componenets/pages/ChangePassword';




function App() {
  return (
    <div>
    {/* <ChangePassword/> */}
      {/* <Accountdetails/> */}
      {/* <PasswordF/> */}
      {/* <MobileV/> */}
      {/* <Card/> */}
      {/* <Flexbox/> */}
      {/* <Button/> */}
      {/* <AddMeal/> */}
      {/* <Mealplan/> */}
      {/* <Inputs/> */}
      {/* <MealTable/> */}

      <Router>
       <Switch>
        <Route path='/' exact component={Login}/>
          <Route path='/passwordforgot' component={PasswordF}/>
          <Route path='/mobileverfication' component={MobileV}/>
         
          <Route path='/menu' component={RMenu}/>
          
          
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
