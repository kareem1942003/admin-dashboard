import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Download } from "@mui/icons-material";
import Header from "../../components/Header";
import RowW from "./RowW";

const Dashboard = () => {
  return (
    <Box>
      <Header title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} />
      <Box sx={{ textAlign: "right", mb: "15px" }}>
        <Button variant="contained" color="info">
          <Download />
          Download Reporst
        </Button>
      </Box>
      <Row1 />
      <RowW />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
