// import { WbSunny } from "@mui/icons-material";
import { Box, Button, Paper, useTheme } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "./weather.css";
const apiKey = "45acd39841120e5602a9299fcc1bc6c1";
const RowW = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [Data, setData] = useState({
    nameCou: "Cairo",
    temp: 25,
    image: "../../Images/clouds-sun_9231786.png",
  });

  const searchWeather = () => {
    if (search != "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then((res) => {
        let imagePath = "";
        if (res.data.weather[0].main == "Clousd") {
          imagePath = "Images/clouds-sun_9231786.png";
        } else if (res.data.weather[0].main == "Clear") {
          imagePath = "Images/weather_13106711.png";
        } else if (res.data.weather[0].main == "Rain") {
          imagePath = "Images/storm_1375404.png";
        } else if (res.data.weather[0].main == "Drizzle") {
          imagePath = "Images/clouds-sun_9231545.png";
        } else if (res.data.weather[0].main == "Mist") {
          imagePath = "Images/moon_10590645.png";
        } else {
          imagePath = "Images/clouds-sun_9231786.png";
        }
        setData({
          ...Data,
          temp: res.data.main.temp,
          nameCou: res.data.name,
          image: imagePath,
        });
        console.log(res.data.weather[0].main);
      });
    }
  };

  return (
    <Paper
      className="wCon"
      sx={{
        borderRadius: "10px",
        height: "400px",
        my: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            width: "70%",
            padding: "7px 10px",
            borderRadius: "20px",
            outline: theme.palette.text.primary,
            border: theme.palette.info.dark,
            fontSize: "20px",
            backgroundColor: theme.palette.divider,
            color: theme.palette.text.primary,
          }}
          type="search"
        />
        <Button
          onClick={searchWeather}
          sx={{ m: "0 10px", borderRadius: "20px" }}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <p style={{ fontSize: "40px", margin: "10px 0" }}>{Data.nameCou}</p>
        <img style={{ width: "150px" }} src={Data.image} alt="" />
        <p style={{ fontSize: "20px" }}>
          {Math.floor(Data.temp)}
          <sup> o</sup>
        </p>
      </Box>
    </Paper>
  );
};

export default RowW;
