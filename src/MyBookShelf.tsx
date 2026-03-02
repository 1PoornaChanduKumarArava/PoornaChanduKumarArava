import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

const books = [
  { title: "Bhagavad Gita", img: "/BhagavadGita.png" },
  { title: "The Magic of Thinking Big", img: "/TMOFTB.png" },
  { title: "The Power of Positive Thinking", img: "/TPOFPT.png" },
  { title: "Rich Dad Poor Dad", img: "/RichDadPoorDad.jpg" },
  { title: "Wings of Fire", img: "/WingsOfFire.jpg" },
];

export default function BookShelf() {
  return (
    <Box sx={{ py: 4, px: 2,background: "#f8fafc",width:"100%" }}>
  <Typography fontSize={30} fontWeight={700} sx={{ mb: 3,ml:5,textAlign:"start" ,fontWeight: 'bold', letterSpacing: 0.5 }}>
    My Book Shelf
  </Typography>
      <Grid container spacing={3} justifyContent="space-evenly">
        {books.map((book, idx) => (
          <Grid item key={idx} xs={6} sm={4} md={2}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, cursor: "pointer", "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
              <CardMedia
                component="img"
                image={book.img}
                alt={book.title}
                sx={{ height: 250, objectFit: "contain", p: 1 }}
              />
              <Typography variant="subtitle1" sx={{ textAlign: "center", py: 1, fontWeight:"255" }}>
                {book.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
