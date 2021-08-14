import React from 'react';
import './input.scss';
import AddIcon from '@material-ui/icons/Add';

function Inputs() {
    const addActionRef = React.useRef();
    return (
        <div className='fd'>
            <div className="row">
    <div className="inputfood col-sm">
        <div className="fdrw1 row ">
           
            <input type="text" className="form-control col-sm-3" placeholder="Looks for food" /> 
            <input type="text" className="form-control col-sm-2"  placeholder="Total quantity (grams)" />
            <button className="btn btn-light" onClick={() => addActionRef.current.click()}>Add Nutrient</button>
        </div>
    
    <br/>
    <div className="fdrw2 row">
    <input type="text" className="form-control col-sm-3" placeholder="Looks for food" />
    <input type="text" className="form-control col-sm-2 " placeholder="Total quantity (grams)" />
    </div>
    <div className="btnplus">
    <button className="btn btn-light">{<AddIcon className='icon'/>}  Add sub nutrient</button>
    </div>
    
    </div>
    
  </div>
        </div>
    )
}

export default Inputs
