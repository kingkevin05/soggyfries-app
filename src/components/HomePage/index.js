import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import DisplayTime from "./DisplayTime"; // Remember to replace with your correct import path
import DisplayWeather from "./DisplayWeather"; // Remember to replace with your correct import path
import Product from "./../ShopPage/Product";

const HomePage = () => {
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.";

  const imagePlaceholder = "https://via.placeholder.com/150"; // replace with your image source

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description for product 1",
      price: "$100",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description for product 2",
      price: "$200",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description for product 3",
      price: "$300",
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add as many products as you like...
  ];

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DisplayTime />
          <DisplayWeather />
        </Grid>
        {[1, 2, 3, 4].map(value => (
          <Grid key={value} item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>{dummyText}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {[1, 2, 3, 4].map(value => (
          <Grid key={value} item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={imagePlaceholder}
                alt="Placeholder"
              />
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h5">Products:</Typography>
          <ul>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
