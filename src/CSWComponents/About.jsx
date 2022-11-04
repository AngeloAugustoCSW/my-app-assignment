import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const CSWAbout = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center", marginBottom: "20px" }} variant="h2">
          Sobre o tema do site:
        </Typography>
        <Typography style={{ textAlign: "center", marginBottom: "20px" }} variant="h4">
          Por que Yellowcard?
        </Typography>
        <Typography style={{ textAlign: "justify", marginBottom: "20px" }} variant="p">
          Pois foi uma das primeiras banda de alternative rock que eu ouvi por causa de uma serie de jogos chamada Burnout, depois de escutar "Lights and Sounds" e "Breathing", eu me abri para outros generos alem do "Alt-Rock". E tambem pelo motivo que não a nada melhor que dar partida em um carro e começar a tocar a trilha sonora de "Burnout Takedown", "Burnout Revenge", "Burnout Dominator" ou até mesmo "Burnout Paradise." 
        </Typography>
        <Typography style={{ textAlign: "center", marginBottom: "20px" }} variant="h5">
          Por que tanto amor com a série Burnout?
        </Typography>
        <Typography style={{ textAlign: "justify", marginBottom: "20px" }} variant="p">
          Pois a grande maioria dos jogos lançados de corridas não pegam mais o genero "Arcade Racing", "Burnout" foi o grande exemplo desse genero, aonde o jogador podia descontar toda a sua raiva no seu rival, podendo até acabar com o carro dele (mecanica chamada de Takedown) e ainda mostrar ao jogador a filosofia de "quanto mais risco for tomado, maior será a recompença".
        </Typography>
        <Typography style={{ textAlign: "center", marginBottom: "20px" }} variant="h5">
          Por que somente Yellowcard?
        </Typography>
        <Typography style={{ textAlign: "justify" }} variant="p">
          Pois se eu pudesse, eu colocaria a trilha sonora da série ineira
        </Typography>
      </Container>
    </>
  );
};
export default CSWAbout;
