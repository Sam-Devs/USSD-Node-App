const express = require("express");

const router = express.Router();

router.post("/", (res, req) => {
    const { sessionId, serviceCode, phoneNumber, text} = req.body;

    console.log("####", req.body);

    let response = "";
})