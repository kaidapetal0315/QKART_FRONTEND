import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {product.name}
        </Typography>
        <Typography
          gutterBottom
          paddingY="0.5rem"
          fontWeight="700"
          component="div"
        >
          ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly precision={0.5}/>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          startIcon={<AddShoppingCartOutlined />}
          className="card-button"
          variant="contained"
          fullWidth
          onClick={() => {
            handleAddToCart(product._id, 1)
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
