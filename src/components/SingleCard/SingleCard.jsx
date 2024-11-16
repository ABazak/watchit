import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

export default function SingleCard({ id, name, time, image, makeClick }) {
  return (
    <Card sx={{ width: 395, height: 222, position: "relative" }}>
      <CardMedia sx={{ height: 1 }} component="img" alt={name} image={image} />
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
        }}
      >
        <CardContent sx={{ padding: "10px", color: "#fff", textAlign: "left" }}>
          <h3>{name}</h3>
          <p>{time}</p>
          <Button
            variant="contained"
            sx={{
              border: "1px solid #E50914",
              background: "#E50914",
              width: 110,
              height: 30,
              color: "#fff",
              textTransform: "none",
            }}
            onClick={() => makeClick(id)}
          >
            Show more
          </Button>
        </CardContent>
      </CardContent>
    </Card>
  );
}
