import React from 'react';
import MaterialTable from "material-table";
import './ttlqtytbl.scss';

function TotalQuantityTable() {
    const { useState } = React;
  const [data, setData] = useState([
    {
     
      qty: 50,
      pg: 50,
      lg: 50,
      gg: 50,
      eau: 50,
      camg: 50,
      vitc: 50,
    },
    
  ]);

  const [columns, setColumns] = useState([
 

    {
      title: "Total Quantity (g)",
      field: "qty",
    },
    {
      title: "P/G",
      field: "pg",
    },
    {
      title: "L/G",
      field: "lg",
    },
    {
      title: "G/g",
      field: "gg",
    },
    {
      title: "EAU/I",
      field: "eau",
    },
    {
      title: "Ca/mg",
      field: "camg",
    },
    {
      title: "VitC/g",
      field: "vitc",
    },
  ]);
    return (
        <div className='ttlqtytbl'>
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

export default TotalQuantityTable;
