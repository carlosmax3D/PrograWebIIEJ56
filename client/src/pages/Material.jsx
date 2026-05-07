import { Button, Box, TextField } from "@mui/material";
import Menu from "../components/Menu";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    if(formJson.email == 'a@a.com' && formJson.password == 'aaaa'){
        props.session(formJson);
        handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Introduzca sus credenciales.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField autoFocus required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" form="subscription-form">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
function MSelect(props){
    return <>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          slotProps={{
            select: {
              native: true,
            },
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
    </>
}

function BasicTextFields(props) {
  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate autoComplete="off" >
      <TextField about="que es esto?" color="error" type="password" id="outlined-basic" label="Password" variant="outlined" />
      <TextField type="number" id="filled-basic" label="Edad" variant="filled" />
      <TextField id="standard-basic" label="Nombre" variant="standard" />
      {props.children}
    </Box>
  );
}

function ButtonUsage(props) {
    console.log(props)
  return <Button color={props.color} variant={props.type}>{props.value}</Button>;
}

function MaterialExamples(props){
    const [usuario, setUsuario] = React.useState({})
    const logIn = (param)=>{
        console.log(param);
        setUsuario(param);
    }
  const { user, logout } = useAuth(); 
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
return <>
    <Menu/>
    <br/>
    <FormDialog session={logIn}/>
    <MSelect/>
    <BasicTextFields>
        <ButtonUsage type="contained" color="warning" value="Hijo"/>
    </BasicTextFields>
    <ButtonUsage type="text" color="success" value="World">HOOOOO</ButtonUsage>
    <ButtonUsage type="outlined" color="error" value="Hello"/>
    <ButtonUsage type="contained" color="info" value="Greetings"/>
</>
}
export default MaterialExamples;