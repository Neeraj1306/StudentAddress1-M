const mongoose = require('mongoose');
const response = require('../../libs/responseLib');
const check = require('../../libs/checkLib');
// const { options } = require('./studentRoute');

//Importing the model here 
const StudentModel = mongoose.model('Student');
const AddressModel = mongoose.model('Address');

let getAllStudent = async(req, res) => {
    try{
        const student = await StudentModel.find().populate('address');
        // console.log("student", (student));
        if(check.isEmpty(student)){
            let apiResponse = response.generate(true, 'No Student Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'All Student Details Found', 200, student);
            res.send(apiResponse);
        }
    } catch(e){
        console.log(e)
        let apiResponse = response.generate(true, 'Failed To Find Student Details', 500, null);
        res.send(apiResponse);
    }
    
}

let getStudentById = async(req,res) => {
    try {
        const student = await StudentModel.findOne({ '_id': req.params.studentId }).populate('address');
        if(check.isEmpty(student)){
            let apiResponse = response.generate(true, 'No Student Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'Student Details Found', 200, student);
            res.send(apiResponse);
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, 'Failed To Find Student Detail', 500, null);
        res.send(apiResponse); 
    }
}

let addStudent = async(req,res) => {
    try {
        const student =await StudentModel.findOne({ rollNo: req.body.rollNo})
        if(!check.isEmpty(student)){
            let apiResponse = response.generate(true, `Student already exist with ${req.body.rollNo} Rooll No`, 403, null);
            res.send(apiResponse);
        } else {
            const newStudent = new StudentModel({
                rollNo: req.body.rollNo, 
                firstName: req.body.firstName,
                secondName: req.body.secondName,
                class: req.body.class,
                parentContactNo: req.body.parentContactNo,
            });
            try{
                await newStudent.save();
                let apiResponse = response.generate(false, 'Student created successfully', 200, newStudent)
                res.send(apiResponse)
            } catch(e){
                console.log(e)
                let apiResponse = response.generate(true, e.message, 500, null)
                res.send(apiResponse)
            }
            
        }
        
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, e.message, 500, null)
        res.send(apiResponse)
    }
}

let updateStudent = async(req,res) => {
    try {
        const updatedStudent = await StudentModel.findByIdAndUpdate(req.params.studentId,{ $set: req.body }, { new: true });
        console.log()
        if(check.isEmpty(updatedStudent)){
            let apiResponse = response.generate(true, 'No Student Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'Student Details updated', 200, updatedStudent);
            res.send(apiResponse);
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, e.message, 500, null)
        res.send(apiResponse)
    }
}

let deleteStudent = async(req,res) => {
    try {
        const student = await StudentModel.findOneAndRemove({ '_id': req.params.studentId });
        console.log(student);
        if(check.isEmpty(student)){
            let apiResponse = response.generate(true, 'No Student Found to delete', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'Student Details deleted', 200, student);
            res.send(apiResponse);
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, 'Failed to delete the user', 500, null)
        res.send(apiResponse)
    }
}

module.exports = {

    getAllStudent: getAllStudent,
    getStudentById: getStudentById,
    addStudent: addStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent

}