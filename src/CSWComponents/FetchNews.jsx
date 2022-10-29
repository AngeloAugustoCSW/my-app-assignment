import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
const CSWFetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setNews(json);
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <h1>Notícias</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((nws) => (
          <Card
            variant="outlined"
            style={{
              marginBottom: "1rem",
              textAlign: "left",
              padding: "1rem",
              borderRadius: "2rem",
            }}
            key={nws.id}
          >
            <div>
              <h2>{nws.title}</h2>
              <div>{nws.body}</div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};
export default CSWFetchNews;
