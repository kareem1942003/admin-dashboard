import { Box } from "@mui/material";
import BarComponent from "./barComponent";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <BarComponent />
    </Box>
  );
};

export default Bar;
