import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props;
  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          image={poster}
          component="img"
          alt={name}
          title={name}
          sx={{ height: "140px" }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Цена : {price}</Typography>
        </CardContent>
        <CardActions
          className="buttons"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
          <Button variant="outlined" onClick={handleOpen}>
            Описание
          </Button>
        </CardActions>
        {/* <Rating name="read-only" value={value} readOnly /> */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Описание книги
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Походу, это очень интересная книга о программировании)))
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default GoodsItem;
