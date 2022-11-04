import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const CSWFetchAlbum = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/en/9/94/Yellowcard_lights_and_sounds.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Lights and Sounds
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2006
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/5EaEOUs3O1MZRicDMUIuqo"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Abrir pagina no Spotify
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/en/0/08/Ocean_Avenue_-_Yellowcard.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Ocean Avenue
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2003
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/2LeCiUHBSmUMyrclDEEBly?si=Px9n7OXcQh2Xqg21Ad5kqA"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Abrir pagina no Spotify
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://i.scdn.co/image/ab67616d0000b2739d2287339c86301afed4304b"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              One for the kids 20 years anniversary
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2021
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/artist/3zxKH0qp3nBCuPZCZT5Vaf/discography/album"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Abrir pagina no Spotify
                </Button>
              </Tooltip>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default CSWFetchAlbum;
