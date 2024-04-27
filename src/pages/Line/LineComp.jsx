import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(162, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 181,
      },
      {
        x: "helicopter",
        y: 80,
      },
      {
        x: "boat",
        y: 288,
      },
      {
        x: "train",
        y: 186,
      },
      {
        x: "subway",
        y: 9,
      },
      {
        x: "bus",
        y: 112,
      },
      {
        x: "car",
        y: 235,
      },
      {
        x: "moto",
        y: 135,
      },
      {
        x: "bicycle",
        y: 124,
      },
      {
        x: "horse",
        y: 284,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 63,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(51, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 146,
      },
      {
        x: "helicopter",
        y: 144,
      },
      {
        x: "boat",
        y: 61,
      },
      {
        x: "train",
        y: 51,
      },
      {
        x: "subway",
        y: 87,
      },
      {
        x: "bus",
        y: 146,
      },
      {
        x: "car",
        y: 72,
      },
      {
        x: "moto",
        y: 28,
      },
      {
        x: "bicycle",
        y: 114,
      },
      {
        x: "horse",
        y: 210,
      },
      {
        x: "skateboard",
        y: 92,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(282, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 110,
      },
      {
        x: "helicopter",
        y: 132,
      },
      {
        x: "boat",
        y: 121,
      },
      {
        x: "train",
        y: 232,
      },
      {
        x: "subway",
        y: 177,
      },
      {
        x: "bus",
        y: 44,
      },
      {
        x: "car",
        y: 116,
      },
      {
        x: "moto",
        y: 110,
      },
      {
        x: "bicycle",
        y: 51,
      },
      {
        x: "horse",
        y: 253,
      },
      {
        x: "skateboard",
        y: 79,
      },
      {
        x: "others",
        y: 41,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(333, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 252,
      },
      {
        x: "helicopter",
        y: 100,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 10,
      },
      {
        x: "subway",
        y: 238,
      },
      {
        x: "bus",
        y: 129,
      },
      {
        x: "car",
        y: 251,
      },
      {
        x: "moto",
        y: 204,
      },
      {
        x: "bicycle",
        y: 103,
      },
      {
        x: "horse",
        y: 224,
      },
      {
        x: "skateboard",
        y: 6,
      },
      {
        x: "others",
        y: 286,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(182, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 55,
      },
      {
        x: "helicopter",
        y: 115,
      },
      {
        x: "boat",
        y: 129,
      },
      {
        x: "train",
        y: 281,
      },
      {
        x: "subway",
        y: 112,
      },
      {
        x: "bus",
        y: 90,
      },
      {
        x: "car",
        y: 204,
      },
      {
        x: "moto",
        y: 262,
      },
      {
        x: "bicycle",
        y: 146,
      },
      {
        x: "horse",
        y: 139,
      },
      {
        x: "skateboard",
        y: 162,
      },
      {
        x: "others",
        y: 62,
      },
    ],
  },
];
// eslint-disable-next-line react/prop-types
const LineComp = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard === true ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -50,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineComp;
