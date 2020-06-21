const mongoose = require('mongoose');
const response = require('../../libs/responseLib');
const check = require('../../libs/checkLib');

//Importing the model here 
const StudentModel = mongoose.model('Student');
const AddressModel = mongoose.model('Address');

let addAddress= async(req, res) => {
    const address = new AddressModel();
    address.studentRollNo = req.body.studentRollNo;
    address.state = req.body.state;
    address.district = req.body.district;
    address.pin = req.body.pin;
    address.landMark = req.body.landMark;
    address.houseName = req.body.houseName;
    address.houseNumber = req.body.houseNumber;
    address.save()
            .then((result) => {
                StudentModel.findOne({ rollNo: address.studentRollNo }, (err, student) => {
                    if(err){
                        let apiResponse = response.generate(true, 'Error occured while finding student', 500, null);
                        res.send(apiResponse);
                    }
                    else if (student) {
                        // The below two lines will add the newly saved addresss' 
                        // ObjectID to the the Student's address array field
                        student.address.push(address);
                        student.save();
                        let apiResponse = response.generate(false, 'Address added to student details', 200, address);
                        res.send(apiResponse);
                    } else if(check.isEmpty(student)){
                        let apiResponse = response.generate(true, 'There is no student with this roll No', 500, null);
                        res.send(apiResponse);
                    }

                });
            })
            .catch((error) => {
                let apiResponse = response.generate(true, error.message, 500, null);
                res.send(apiResponse);
            });
}

let getAddressById = async(req,res) => {
    try {
        const address = await AddressModel.findOne({ '_id': req.params.addressId })
        if(check.isEmpty(address)){
            let apiResponse = response.generate(true, 'No address Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'address Details Found', 200, address);
            res.send(apiResponse);
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, 'Failed To Find address Detail', 500, null);
        res.send(apiResponse); 
    }
}

let getAllAddress = async(req,res) => {
    try{
        const address = await AddressModel.find();
        if(check.isEmpty(address)){
            let apiResponse = response.generate(true, 'No Address Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'Address Found', 200, address);
            res.send(apiResponse);
        }
    } catch(e){
        console.log(e)
        let apiResponse = response.generate(true, 'Failed To Find Address', 500, null);
        res.send(apiResponse);
    } 
}

let updateAddress = async(req,res) => {
    try {
        const updatedAddress = await AddressModel.findByIdAndUpdate(req.params.addressId,{ $set: req.body }, { new: true });
        if(check.isEmpty(updatedAddress)){
            let apiResponse = response.generate(true, 'No Address Found', 404, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'Address Details updated', 200, updatedAddress);
            res.send(apiResponse);
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, e.message, 500, null)
        res.send(apiResponse)
    }
}

let deleteAddress = async(req,res) => {
    try {
        //delete address
        const address = await AddressModel.findOneAndRemove({ '_id': req.params.addressId });
        console.log(address);
        if(check.isEmpty(address)){
            let apiResponse = response.generate(true, 'No address Found to delete', 404, null);
            res.send(apiResponse);
        } else {            
            let apiResponse = response.generate(false, 'address Details deleted', 200, address);
            try{
                //delete address reference from student
                studentAdd = await StudentModel.updateOne({"rollNo": address.studentRollNo}, {$pull: {"address": address._id}})
                let apiResponse = response.generate(false, 'address Details deleted', 200, address);
                res.send(apiResponse);
            } catch (e){
                let apiResponse = response.generate(true, 'failed to delete address reference', 500, null);
            }
            
        }
    } catch(e) {
        console.log(e)
        let apiResponse = response.generate(true, 'Failed to delete the user', 500, null)
        res.send(apiResponse)
    } 
}

module.exports = {

    getAllAddress: getAllAddress,
    getAddressById: getAddressById,
    addAddress: addAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress

}