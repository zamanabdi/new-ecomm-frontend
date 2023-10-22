import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <div container spacing={2} gap={3}>
        {/*grid item 1 */}
        {/*<Grid item xs={1} className="pr-7">
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
  </Grid>*/}

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>

          <Rating value={3.5} name="half-rating" readOnly precision={.5}/>
          <p >I liked the quality of this product and I would recommend it to everyone how are interested in Home decor items</p>
        </Grid>



      </div>
    </div>
  );
};

export default ProductReviewCard;
