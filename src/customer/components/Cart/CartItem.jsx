import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] shrink-0">
          <img
            className="w-[full] h-[full] object-cover object-top"
            src="https://m.media-amazon.com/images/I/61ZurVFtJAS._SL1000_.jpg"
            alt="home decor"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Vintage Wall Lamp Industrial Black Diamond Metal Cage Retro Living
            Room Wall Ceiling Lamp
          </p>
          <p className="opacity-70 mt-2">
            <b className="opacity-80">Seller: </b> Intirious Design & Collection
          </p>

          <div className="flex space-x-5 items-center text-gray-900 pt-3">
            <p className="font-semibold">₹650</p>

            <p className="opacity-50 line-through">₹889</p>

            <p className="text-green-600 font-semibold">5% off</p>
          </div>

          

        </div>

        
      </div>

      {/* increase decrease and remove button */}
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">

            {/* decrease quantity button */}
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>

              <span className="py-1 px-7 border rounded-sm">3</span>
              {/* increase quantity button */}
                <IconButton sx={{color:"rgb(145,85,253)"}}>
                  <AddCircleOutlineIcon />
                </IconButton>
              
            </div>

            {/* remove the product from cart */}
          <div>
           <Button sx={{color:"rgb(145,85,253)"}}>remove</Button>
          </div>


          </div>


    </div>
  );
};

export default CartItem;
