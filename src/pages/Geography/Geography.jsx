import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoComp from "./GeoComp";

const Geography = () => {
  return (
    <Box>
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />
      <GeoComp />
    </Box>
  );
};

export default Geography;
