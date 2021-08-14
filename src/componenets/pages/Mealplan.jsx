import React from "react";
import MaterialTable from "material-table";
import { Button } from "react-bootstrap";
import "./mealplan.scss";
import {useHistory } from "react-router-dom";

function Mealplan() {
  let history = useHistory();
  const { useState } = React;
  const [data , setData] = useState([
    {
      mealname: "My First Meal Plan",
      date: 2021,
      cal: 50,
      rday: 2,
      
    },
    {
      mealname: "My Second Meal Plan",
      date: 2021,
      cal: 60,
      rday: 5,
      
    },
    {
      mealname: "My Third Meal Plan",
      date: 2021,
      cal: 80,
      rday: 6,
      
    },
  ]);

  const [columns, setColumns] = useState([
    {
      title: "Meal Plan Name",
      field: "mealname",
    },

    {
      title: "Created Date",
      field: "date",
    },
    {
      title: "No.Of Calories",
      field: "cal",
    },
    {
      title: "No.Of Days Recorded",
      field: "rday",
    },
    
  ]);

  return (
    <div className='container'>
     
      <div className="container-fluid row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <br />
              <h3>Meal plans</h3>
            </div>
            <div className="col-sm-6">
              <br />
              <Button className="bn" onClick={()=>{history.push('/addmealplan')}}>Add a new meal plan</Button>
            </div>
          </div>
          <br />
          <br />

          <MaterialTable
            data={data}
            columns={columns}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
      
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                  }, 1000)
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              search: false,
              paging: false,
              toolbar: false,
            }}
          />
        </div>
        {/* <div className="col-sm-3">col2</div> */}
      </div>
    </div>
  );
}

export default Mealplan;
