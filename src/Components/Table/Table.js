import "./Table.css";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Table = (props) => {
  const data = props.rows;
  const columns = props.columns;

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
