import React from 'react';
import MaterialTable from "material-table";
import './tct.scss';

function TCTable() {
    const { useState } = React;
    const [data, setData] = useState([
      {
       
      bf: 50,
      mbf: 40,
      lunch: 50,
      asnack: 70,
      dinner: 50,
      ttl: 150,

    
      },
      
    ]);
  
    const [columns, setColumns] = useState([
   
  
      {
        title: "Breakfast",
        field: "bf",
      },
      {
        title: "Mid breakfast Meal",
        field: "mbf",
      },
      {
        title: "Lunch",
        field: "lunch",
      },
      {
        title: "Afternoon Snacks",
        field: "asnack",
      },
      {
        title: "Dinner",
        field: "dinner",
      },
      {
        title: "Total",
        field: "ttl",
      },
      
    ]);
    return (
        <div className='tct'>
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

export default TCTable
