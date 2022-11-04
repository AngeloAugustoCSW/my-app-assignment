import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useEffect, useState } from "react";

export const CSWHomeScreen = () => {
  return (
    <>
    
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="300"
                image="https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Yellowcard_lights_and_sounds.jpg/220px-Yellowcard_lights_and_sounds.jpg"
                alt="Yellowcard"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Yellowcard - Lights and Sounds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Musica presente na trilha sonora de Burnout Revenge
                </Typography>
            </CardContent>
        </Card>
        <Typography style={{ textAlign: "center", marginBottom: "20px" }} variant="h2">
          Bem-vindo ao site!
        </Typography>
        <Typography style={{ textAlign: "center" }} variant="h6">
          Sugiro verificar o menu no canto superior esquerdo para navegar pelo site.
        </Typography>
      </Container>
    </>
  );
};
export default CSWHomeScreen;
