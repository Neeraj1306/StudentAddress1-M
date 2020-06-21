const express = require('express');
const router = express.Router();
const addressController = require("./addressController");
const appConfig = require("../../appConfig");

router.get(`/getalladdress`, addressController.getAllAddress);
router.post(`/addaddress`, addressController.addAddress);
router.get(`/getaddress/:addressId`, addressController.getAddressById);
router.put(`/updateaddress/:addressId`, addressController.updateAddress);
router.post(`/deleteaddress/:addressId`, addressController.deleteAddress);

module.exports = router;