import React from "react";
import "./settings.scss";
import { Button } from "react-bootstrap";

function Settings() {
  return (
    <div className='container'>
    
      <div class=" row">
        <div class="col-sm-6">
          <br />

          <h3>Settings</h3>
          <br />
          <br />
          <p className="dbselect">Select your database</p>
          <div className="row">
            <div className="col-sm-6">
              <select name="">
                <option value="">Database1</option>
                <option value="">Database2</option>
              </select>
            </div>
            <div className="col-sm-6">
              <Button className="save btn">Save</Button>
            </div>
          </div>

          <br />
          <br />
          <br />
          <p className="dbselect">Want to deactivate your account?</p>
          <Button className="btton">
            Click here to deactivate your account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
