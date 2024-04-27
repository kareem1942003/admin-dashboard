import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineComp from "./LineComp";

const Line = () => {
  return (
    <Box>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <LineComp />
    </Box>
  );
};

export default Line;
