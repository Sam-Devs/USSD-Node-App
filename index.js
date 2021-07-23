const express = require("express");

const router = express.Router();


// Get authentication
// const credentials = {
//     apiKey: process.env.APIKEY, // use your sandbox app API key for development in the test environment
//     username: process.env.USER_NAME // use 'sandbox' for development in the test environment
//   };
//   console.log(credentials);
//   const AfricasTalking = require("africastalking")(credentials);

router.post("/", (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text} = req.body;

    console.log("####", req.body);

    let response = "";

    if(text == "") {
        response = `What would you like to check?
        1. My Account
        2. My Balance
        `
    } else if(text == "1") {
        
    }
    res.send("END yes .....")
});

module.exports = router;