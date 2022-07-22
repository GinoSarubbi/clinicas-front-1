import React from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Containerr from '@mui/material/Container'
import estilos from '../tituloMain/tituloMain.module.css'
import {motion} from "framer-motion";


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










export default function tituloMain() {
  return (
    <div className={estilos.contieneTitulo}>
    <Containerr>
        <Grid direction="column" display="flex" gap="30px" >
            <motion.div className={estilos.textos}
             initial={{x: -20, opacity: 0}}
             animate ={{x: 0, opacity: 1}}
             transition={{duration: 0.5}}
            >
                <h1 className={estilos.titulo}>Donacion de plasma</h1>
                <p className={estilos.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div >
            <motion.div className="contenedorBTN" 
              initial={{x: 20, opacity: 0}}
              animate ={{x: 0, opacity: 1}}
              transition={{duration: 0.5}}
            >
            <Button className={estilos.Button} 
                sx={{
                    width: 240,
                    backgroundColor: '#3C3C3C',
                    color: 'white'   
             }}>Formulario de donacion</Button>
            </motion.div>
        </Grid>
    </Containerr>
    </div>
  );
}
