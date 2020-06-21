
/**
 * @api {get} /api/v1/student/getallstudent Get all student details
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "All Student Details Found",
		"status": 200,
		"data": [
			{
				"address": [],
				"_id": "5eef660e364a031978f118db",
				"rollNo": 3,
				"firstName": "Neeraj3",
				"class": 7,
				"parentContactNo": 9874563201,
				"createdAt": "2020-06-21T13:52:14.332Z",
				"updatedAt": "2020-06-21T13:53:13.118Z",
				"__v": 1
			},
			..................................................
		]
	}
  

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To Find Student Details",
    "status": 500,
    "data": null
  }
*/


/**
 * @api {post} /api/v1/student/addstudent Add student details
 * @apiVersion 0.0.1
 * @apiGroup create
 *
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Student created successfully",
		"status": 200,
		"data": {
			"address": [],
			"_id": "5eef76da47d18c282cb23c37",
			"rollNo": 5,
			"firstName": "Neeraj3",
			"class": 7,
			"parentContactNo": 9874543645345344,
			"createdAt": "2020-06-21T15:03:54.847Z",
			"updatedAt": "2020-06-21T15:03:54.847Z",
			"__v": 0
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To Add Student Details",
    "status": 500,
    "data": null
  }
*/


/**
 * @api {get} /api/v1/student/getstudent/:studentId get student details by id
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} studentId The studentId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Student Details Found",
		"status": 200,
		"data": {
			"address": [],
			"_id": "5eef660e364a031978f118db",
			"rollNo": 3,
			"firstName": "Neeraj3",
			"class": 7,
			"parentContactNo": 9874561203,
			"createdAt": "2020-06-21T13:52:14.332Z",
			"updatedAt": "2020-06-21T13:53:13.118Z",
			"__v": 1
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To get Student Details",
    "status": 500,
    "data": null
  }
*/

/**
 * @api {put} /api/v1/student/updatestudent/:studentId update student details by id
 * @apiVersion 0.0.1
 * @apiGroup update
 *
 * @apiParam {String} studentId The studentId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Student Details updated",
		"status": 200,
		"data": {
			"address": [],
			"_id": "5eef660e364a031978f118db",
			"rollNo": 3,
			"firstName": "Neeraj1",
			"class": 6,
			"parentContactNo": 9874456987,
			"createdAt": "2020-06-21T13:52:14.332Z",
			"updatedAt": "2020-06-21T15:20:34.796Z",
			"__v": 1
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To update Student Details",
    "status": 500,
    "data": null
  }
*/

/**
 * @api {delete} /api/v1/student/deletestudent/:studentId delete student details by id
 * @apiVersion 0.0.1
 * @apiGroup delete
 *
 * @apiParam {String} studentId The studentId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Student Details deleted",
		"status": 200,
		"data": {
			"address": [],
			"_id": "5eef660e364a031978f118db",
			"rollNo": 3,
			"firstName": "Neeraj1",
			"class": 6,
			"parentContactNo": 9874456987,
			"createdAt": "2020-06-21T13:52:14.332Z",
			"updatedAt": "2020-06-21T15:20:34.796Z",
			"__v": 1
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To delete Student Details",
    "status": 500,
    "data": null
  }
*/





















/**
 * @api {get} /api/v1/address/getalladdress Get all address details
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Address Found",
		"status": 200,
		"data": [
			{
				"_id": "5eef6427b7071821fccc9e32",
				"studentRollNo": "10",
				"state": "M",
				"district": "Pune",
				"pin": 411057,
				"landMark": "sd",
				"houseName": "uih",
				"houseNumber": "jkhk",
				"createdAt": "2020-06-21T13:44:07.456Z",
				"updatedAt": "2020-06-21T13:44:07.456Z",
				"__v": 0
			},
			.....................................................
		]
	}
  

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To Find Address Details",
    "status": 500,
    "data": null
  }
*/


/**
 * @api {post} /api/v1/address/addaddress Add address and reference it to student collection
 * @apiVersion 0.0.1
 * @apiGroup create
 *
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Address added to student details",
		"status": 200,
		"data": {
			"_id": "5eef661e364a031978f118dc",
			"studentRollNo": "3",
			"state": "M",
			"district": "Pune",
			"pin": 411057,
			"landMark": "sd",
			"houseName": "uih",
			"houseNumber": "jkhk",
			"createdAt": "2020-06-21T13:52:30.896Z",
			"updatedAt": "2020-06-21T13:52:30.896Z",
			"__v": 0
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To Add Address Details",
    "status": 500,
    "data": null
  }
*/


/**
 * @api {get} /api/v1/address/getaddress/:addressId get address details by id
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} addressId The addressId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Address Found",
		"status": 200,
		"data": [
			{
				"_id": "5eef6427b7071821fccc9e32",
				"studentRollNo": "10",
				"state": "M",
				"district": "Pune",
				"pin": 411057,
				"landMark": "sd",
				"houseName": "uih",
				"houseNumber": "jkhk",
				"createdAt": "2020-06-21T13:44:07.456Z",
				"updatedAt": "2020-06-21T13:44:07.456Z",
				"__v": 0
			}
		]
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To get Address Details",
    "status": 500,
    "data": null
  }
*/

/**
 * @api {put} /api/v1/address/updateaddress/:addressId update address details by id
 * @apiVersion 0.0.1
 * @apiGroup update
 *
 * @apiParam {String} addressId The addressId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "Address Details updated",
		"status": 200,
		"data": {
			"_id": "5eef6427b7071821fccc9e32",
			"studentRollNo": "10",
			"state": "MH",
			"district": "Pune",
			"pin": 411057,
			"landMark": "sd",
			"houseName": "uih",
			"houseNumber": "jkhk",
			"createdAt": "2020-06-21T13:44:07.456Z",
			"updatedAt": "2020-06-21T13:46:50.276Z",
			"__v": 0
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To update Address Details",
    "status": 500,
    "data": null
  }
*/

/**
 * @api {delete} /api/v1/address/deleteaddress/:addressId delete address details by id and delete its reference from student collection
 * @apiVersion 0.0.1
 * @apiGroup delete
 *
 * @apiParam {String} addressId The addressId should be passed as the URL parameter
 *
 *  * @apiSuccessExample {object} Success-Response:
	{
		"error": false,
		"message": "address Details deleted",
		"status": 200,
		"data": {
			"_id": "5eef661e364a031978f118dc",
			"studentRollNo": "3",
			"state": "M",
			"district": "Pune",
			"pin": 411057,
			"landMark": "sd",
			"houseName": "uih",
			"houseNumber": "jkhk",
			"createdAt": "2020-06-21T13:52:30.896Z",
			"updatedAt": "2020-06-21T13:52:30.896Z",
			"__v": 0
		}
	}

@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Failed To delete Address Details",
    "status": 500,
    "data": null
  }
*/