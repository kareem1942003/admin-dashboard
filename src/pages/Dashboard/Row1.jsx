import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import { data1, data2, data3, data4 } from "./data";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook, YouTube } from "@mui/icons-material";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        icon={<InstagramIcon sx={{ fontSize: "30px", color: "#F72585" }} />}
        title={"431,225"}
        subTitle={"New Followers"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />

      <Card
        icon={
          <Facebook sx={{ fontSize: "30px", color: theme.palette.info.main }} />
        }
        title={"441"}
        subTitle={"New Freinds"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <YouTube sx={{ fontSize: "30px", color: theme.palette.error.main }} />
        }
        title={"1,325,134"}
        subTitle={"Subscriber Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default Row1;
