import { Box } from "@mui/material";
import PieComponent from "./PieComponent";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box>
      <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
      <Box>
        <PieComponent />
      </Box>
    </Box>
  );
};

export default Pie;
