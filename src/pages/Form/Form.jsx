import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import React from "react";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const menu = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => handleClick();
  return (
    <Box>
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "This input is recuired" : null}
            {...register("firstName", { required: true, minLength: 3 })}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "This input is recuired" : null}
            {...register("lastName", { required: true, minLength: 3 })}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
          />
        </Box>

        <TextField
          error={Boolean(errors.email)}
          helperText={errors.email ? "This input is recuired" : null}
          {...register("email", {
            required: true,
            minLength: 3,
            pattern: regEmail,
          })}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <TextField
          error={Boolean(errors.contact)}
          helperText={errors.contact ? "This input is recuired" : null}
          {...register("contact", {
            required: true,
            minLength: 3,
            pattern: phoneRegExp,
          })}
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Address 1" variant="outlined" />
        <TextField id="outlined-basic" label="Address 2" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="User"
          helperText="Please select your used"
        >
          {menu.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "end" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account Created Successfly
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
