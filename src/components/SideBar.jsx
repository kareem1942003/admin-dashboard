import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, Tooltip, Typography, styled, useTheme } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeRounded,
  MapOutlined,
  PeopleRounded,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const arr1 = [
    { text: "Dashboard", icon: <HomeRounded />, path: "/" },
    { text: "Manage Team", icon: <PeopleRounded />, path: "team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlined />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlined />,
      path: "/invoices",
    },
  ];

  const arr2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlined />,
      path: "/calendar",
    },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];
  const arr3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
  ];
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          margin: "auto",
          width: open ? 90 : 50,
          height: open ? 90 : 50,
          my: 1.5,
          transition: "0.3s",
        }}
        alt="Remy Sharp"
        src="../public/my.jpg"
      />
      <Typography
        align="center"
        sx={{ transition: "0.3s", fontSize: open ? 18 : 0 }}
      >
        Kareem Mahmoud
      </Typography>
      <Typography
        align="center"
        sx={{
          transition: "0.3s",
          fontSize: open ? 15 : 0,
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {arr1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.info.main
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {arr2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.info.main
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {arr3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.info.main
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
