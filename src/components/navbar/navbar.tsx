import React from 'react';
import Navbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import estilos from '../navbar/navbar.module.css'
import {motion} from "framer-motion";
import Menu from '../Menu/menu';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.9
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
















export default function navbar() {
  return (
    <motion.div
    initial={{y: -20, opacity: 0}}
    animate ={{y: 0, opacity: 1}}
    transition={{duration: 0.5}}>
        <Navbar className={estilos.nav} position = "static"  style={{backgroundColor: "transparent"}} >
            <Toolbar color="primary">
            <Typography  className={estilos.titulo} variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            Hospital de clinicas
          </Typography>
                <IconButton >
     
                    <Menu />
                </IconButton>
              
            </Toolbar>
        </Navbar>
    </motion.div>
  );
}
