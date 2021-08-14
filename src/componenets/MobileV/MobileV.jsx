import React from "react";
import "./mobile.scss";
import {useHistory , Link} from "react-router-dom";



export default function Mobile() {

  let history = useHistory();
  return (
    <div className="form-wrapper" id="mobile">
      <div class="row">
        <div class="col">
          <div className="left">{""}</div>
        </div>
        <div class="col">
          <div className="right">
            <div className="mformContainer">
              <h1 class="display-5">
                <span class="first">Verify Your</span><br/>
                <span class="second">Mobile Number</span>
               </h1>
               <div className='para'> 
                  <span class ="third">
                      <p class="h6">Please enter the Verification code we sent to your phone </p>
                      </span>
                  </div>
              <form action="">
                <input type="text" placeholder="Enter Code" />
                
                <span className="forget">
                  <h6>
                    <Link to onClick={()=> {history.push('/')}} >Resend<hr/></Link>
                  </h6>
                </span>
                <button type="submit" onClick={()=> {history.push('/menu')}}>Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
