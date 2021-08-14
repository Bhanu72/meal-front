import React from "react";
import './card.scss'

function Card(props) {
  console.log(props);
  return (
    
      <div className="card ">
        <div className="card-body">
        {props.children}
        
        </div>
      </div>
    
  );
}

export default Card;
