import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';

function BasicBreadcrumbs() {
  const location = useLocation();
  // Get the current pathname (e.g., '/products/5')
  const breadPath = location.pathname.split('/');
    return (
    <div role="presentation" onClick={()=>{}}>
      <Breadcrumbs aria-label="breadcrumb">
      {breadPath.map((value, index)=>{
        if (index == 0)
            return <Link underline="hover" color="inherit" to="/">Home</Link>
        else return <Link underline="hover" color="inherit" to={'/'+value}>{value}</Link>

      })}
      </Breadcrumbs>
    </div>
  );
}

const breadcrumbNameMap = {
  '/': 'Home',
  '/material': 'Material',
  '/forms': 'Formularios',
  '/actualiza': 'Actualizacion',
  '/desmonta': 'Desmontaje',
  '/funcional': 'Funcional'
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ color: 'text.primary' }}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <BasicBreadcrumbs/>
        <Box
          sx={{ bgcolor: 'background.paper', mt: 1 }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            {Object.keys(breadcrumbNameMap).map((item, index)=>{
                return <ListItemLink to={item} id={index}/>
            })}
          </List>
        </Box>
      </Box>
  );
}

function Menu(props){
    return <>
            <Link to='/'>Home </Link>
            <Link to='/material'>Material </Link>
            <Link to='/forms'>Formularios </Link>
            <Link to='/montaje'>Montaje </Link>
            <Link to='/actualiza'>Actualizacion </Link>
            <Link to='/desmonta'>Desmontaje </Link>
            <Link to='/funcional'>Funcional </Link>
    </>
}

export default RouterBreadcrumbs;