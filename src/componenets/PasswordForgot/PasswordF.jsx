import React from "react";
import "./password.scss";
import {useHistory , Link} from "react-router-dom";


export default function PasswordF() {
  let history = useHistory();
  return (
    <div className="works" id="works">
      <div class="row">
        <div class="col">
          <div className="left">{""}</div>
        </div>
        <div class="col">
          <div className="right">
            <div className="pformContainer">
              <h1 className='ptxt'>
                <span class="first">Forgot Your</span><br/>
                <span class="second">Password?</span>
               </h1>
              <div className='para'> 
                  <span class ="third">
                      <p class="h6">Please enter your e-mail address to send you a password  </p>
                      <p class="h6">reset link</p></span>
                  </div>
              <form action="">
                <input type="text" placeholder="Enter E-mail address" />
               <br/>
                 <button type="submit"  onClick={()=> {history.push('/mobileverfication')}}>Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
