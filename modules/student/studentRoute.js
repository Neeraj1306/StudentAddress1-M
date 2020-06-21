const express = require('express');
const router = express.Router();
const studentController = require("./studentController");
const appConfig = require("../../appConfig");


router.get(`/getallstudent`, studentController.getAllStudent);


router.post(`/addstudent`, studentController.addStudent);


router.get(`/getstudent/:studentId`, studentController.getStudentById);


router.put(`/updatestudent/:studentId`, studentController.updateStudent);


router.post(`/deleteStudent/:studentId`, studentController.deleteStudent);



module.exports = router;