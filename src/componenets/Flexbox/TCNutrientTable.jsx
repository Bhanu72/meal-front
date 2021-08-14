import React from 'react'
import MaterialTable from "material-table";
import './tcn.scss';

function TCNutrientTable() {
    const { useState } = React;
    const [data, setData] = useState([
      {
       
        protein: 50,
        fats: 50,
        carbs: 50,
        alcohol: 50,
    
      },
      
    ]);
  
    const [columns, setColumns] = useState([
   
  
      {
        title: "Protein",
        field: "protein",
      },
      {
        title: "Fats",
        field: "fats",
      },
      {
        title: "Carbohydrates",
        field: "carbs",
      },
      {
        title: "Alcohol",
        field: "alcohol",
      },
      
    ]);
    return (
        <div className='tcntbl'>
            <MaterialTable
        data={data}
        columns={columns}
       
        options={{
          actionsColumnIndex: -1,
          search: false,
          paging: false,
          toolbar: false,
        }}
      />
        </div>
    )
}

export default TCNutrientTable
