const express = require("express");

const router = express.Router();


// Get authentication
// const credentials = {
//     apiKey: process.env.APIKEY, // use your sandbox app API key for development in the test environment
//     username: process.env.USER_NAME // use 'sandbox' for development in the test environment
//   };
//   console.log(credentials);
//   const AfricasTalking = require("africastalking")(credentials);

router.post("/", (res, req) => {
    const { sessionId, serviceCode, phoneNumber, text} = req.body;

    console.log("####", req.body);

    let response = "";
})