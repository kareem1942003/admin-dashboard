import Box from "@mui/material/Box";
import { GridToolbar } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { rows } from "./data";
import { columns } from "./data";
import Header from "../../components/Header";

const Invoices = () => {
  return (
    <Box>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <Box sx={{ height: 640, width: "99%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
