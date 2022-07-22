import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Menu2 from '@mui/icons-material/Menu';
import estilos from '../Menu/menu.module.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Menu2 
        className = {estilos.iconoMenu}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a href>Turnos</a></MenuItem>
        <MenuItem onClick={handleClose}><a href>Donar</a></MenuItem>
        <MenuItem onClick={handleClose}><a href>Registrarse</a></MenuItem>
      </Menu>
    </div>
  );
}


/* <IconButton aria-label="menu">
        <Menu2 
        className = {estilos.iconoMenu}

        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
      </IconButton> */