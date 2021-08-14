import React from "react";
import "./addmeal.scss";
import Card from "../Card/Card";
import Flex from "../Flexbox/Flex";
import AddIcon from "@material-ui/icons/Add";
import Inputs from "../Flexbox/Inputs";
import MealTable from "../Flexbox/MealTable";
import PrintIcon from "@material-ui/icons/Print";
import EmailIcon from "@material-ui/icons/Email";
import TotalQuantityTable from "../Flexbox/TotalQuantityTable";
import TCNutrientTable from "../Flexbox/TCNutrientTable";
import TCTable from "../Flexbox/TCTable";
import { getDefaultNormalizer } from "@testing-library/react";


function AddMeal()  {
  return (
    <div className='container'>
      
      <div className="container-fluid">
        <h3 className="cmp">Create A Meal Plan</h3>
        <div class="row">
          <div className="flmg col-sm ">
            <div className="card">
              <div className="d-flex">
                <Flex />

                <div className="rbn row ">
                  <button className="roundbtn">{<AddIcon />}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="nutrient">Enter your nutrient intake for the day</h6>
        <Card>
          <h5>Breakfast</h5>
          <Inputs />
          <MealTable />
        </Card>
        <Card>
          <h5>Mid Breakfast Meal</h5>
          <Inputs />
          <MealTable />
        </Card>
        <Card>
          <h5>Lunch</h5>
          <Inputs />
          <MealTable />
        </Card>
        <Card>
          <h5>Afternoon Snacks</h5>
          <Inputs />
          <MealTable />
        </Card>
        <Card>
          <h5>Dinner</h5>
          <Inputs />
          <MealTable />
        </Card>
        <div className="card mx">
          <h5>Total Quantity</h5>
          <TotalQuantityTable/>
          <h5>Total Calories For Nutrient</h5>
          <TCNutrientTable/>
          <h5>Total Calories</h5>
          <TCTable/>
        </div>
        <div className="mealbtn">
          <div class="row">
            <div class="row">
              <button className="email" Link to={`mailto:$mleobhanu@gmail.com`}>
                {<EmailIcon className="emailicon" />} Email
              </button>
              <button className="print"  >
                {<PrintIcon className="printicon" onClick={() => window.print()} />} Print
              </button>
            </div>
            <div class="col-4">{""}</div>
            <div class="decobtn row">
              <button className="save btn btn-light">Save Meal</button>
              <button className="cancel btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
