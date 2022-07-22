
import React from 'react';
import Carta from './tarjetasMain'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import tarjetasMain from './tarjetasMain';




const cards = [
    {
        id: 1,
        title: 'Donacion de plasma',
        descripcion: "Lizards are a widespread group of squamate reptiles with over 6000 fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao",
       
    },
    {
        id: 2,
        title: 'Donacion de sangre',
        descripcion: "Lizards are a widespread  dwads dsa dsad sadfefadfsad dwddsdwad dsdasdsdasdasdas dsadasddiobauiodhio hfoiafhio ihao"
    },
    {
        id: 1,
        title: 'Donacion de plaquetas',
        descripcion: "ygrgef dfwdawdfsaf fafaf  faf asfa  ffawf a aw fwaf awf wafa fas fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao"
    }
]

export default function tarjetass_dos() {
  return (
    <Container>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 12, sm: 12, md: 12, lg: 12 }}  alignItems="center" justifyContent="center">
        {
            cards.map(tarjetasMain => (
                  <Grid item xs key={tarjetasMain.id}  display="flex" alignItems="center" justifyContent="center" textAlign="center" >
                     <Carta title={tarjetasMain.title} descripcion={tarjetasMain.descripcion} imageSourse={tarjetasMain.image} />
                  </Grid>
            ))
        }
      </Grid>
    </Container>
  );
}
