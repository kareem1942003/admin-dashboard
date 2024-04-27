import Box from "@mui/material/Box";
import { rows } from "./data";
import { columns } from "./data";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box>
      <Header
        title={"CONTACTS"}
        subTitle={"List of Contacts for Future Reference"}
      />
      <Box sx={{ height: 640, width: "99%", mx: "auto" }}>
        <DataGrid
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

export default Contacts;
