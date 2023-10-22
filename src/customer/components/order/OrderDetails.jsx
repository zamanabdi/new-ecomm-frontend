import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">

    {/* first child element - Address card */}
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* second child element - Order tracker */}

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>


      {/* third child element */}

      <div className="flex flex-col gap-5">
      {[1,1,1,1,1].map((item) => <div
        item
        container
        className="shadow-xl rounded-md p-5 md:flex md:justify-between"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >

      {/* image wrapper */}
        <div className="p-4 md:w-[70%]">

          <div className="flex items-center space-x-5">

          <div className="shrink-0">
          
          <img className="w-[5rem] h-[5rem] object-cover object-bottom shrink-0" src="https://m.media-amazon.com/images/I/81orA+t+QdL._SL1500_.jpg" alt="lamp"/>
          </div>
           

           <div className="space-y-2 mt-2 overflow-hidden">
            <p className="font-bold opacity-50 text-ellipsis overflow-hidden whitespace-nowrap">Homesake Wall Light Antique Home Decor Wall Lamp</p>
            <p className="font-semibold opacity-50"><b>Seller: </b>Intirious Design & Collection</p>
            <p className=" font-bold opacity-50 text-xl">₹850</p>
           </div>
          </div>
        </div>

        {/* start rating wrapper */}
        <div className="flex justify-end items-center py-2 pr-7">
        <Box sx={{color:"purple"}}>
        <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
        <span>Rate & Review Product</span>
         
        </Box>
        </div>


      </div>)}

        


      </div>
    </div>
  );
};

export default OrderDetails;
