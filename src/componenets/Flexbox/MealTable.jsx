import React from "react";
import "./mealtable.scss";
import MaterialTable from "material-table";

function MealTable() {
  const { useState } = React;
  const [data, setData] = useState([
    {
      name: "Milk",
      qty: 50,
      pg: 50,
      lg: 50,
      gg: 50,
      eau: 50,
      camg: 50,
      vitc: 50,
    },
    {
      name: "Bread",
      qty: "50",
      pg: 50,
      lg: 50,
      gg: 50,
      eau: 50,
      camg: 50,
      vitc: 50,
    },
    {
      name: "Banana",
      qty: "50",
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
      title: "Nutrient Name",
      field: "name",
    },

    {
      title: "Quantity (g)",
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
    <div className="tble">
      <MaterialTable
        data={data}
        columns={columns}
        editable={{
         
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const dataUpdate = [...data];
          //       const index = oldData.tableData.id;
          //       dataUpdate[index] = newData;
          //       setData([...dataUpdate]);

          //       resolve();
          //     }, 1000);
          //   }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
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
  );
}

export default MealTable;
