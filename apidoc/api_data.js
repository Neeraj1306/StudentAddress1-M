define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/address/addaddress",
    "title": "Add address and reference it to student collection",
    "version": "0.0.1",
    "group": "create",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Address added to student details\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"_id\": \"5eef661e364a031978f118dc\",\n\t\t\"studentRollNo\": \"3\",\n\t\t\"state\": \"M\",\n\t\t\"district\": \"Pune\",\n\t\t\"pin\": 411057,\n\t\t\"landMark\": \"sd\",\n\t\t\"houseName\": \"uih\",\n\t\t\"houseNumber\": \"jkhk\",\n\t\t\"createdAt\": \"2020-06-21T13:52:30.896Z\",\n\t\t\"updatedAt\": \"2020-06-21T13:52:30.896Z\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Add Address Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1AddressAddaddress"
  },
  {
    "type": "post",
    "url": "/api/v1/student/addstudent",
    "title": "Add student details",
    "version": "0.0.1",
    "group": "create",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Student created successfully\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"address\": [],\n\t\t\"_id\": \"5eef76da47d18c282cb23c37\",\n\t\t\"rollNo\": 5,\n\t\t\"firstName\": \"Neeraj3\",\n\t\t\"class\": 7,\n\t\t\"parentContactNo\": 9874543645345344,\n\t\t\"createdAt\": \"2020-06-21T15:03:54.847Z\",\n\t\t\"updatedAt\": \"2020-06-21T15:03:54.847Z\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Add Student Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1StudentAddstudent"
  },
  {
    "type": "delete",
    "url": "/api/v1/address/deleteaddress/:addressId",
    "title": "delete address details by id and delete its reference from student collection",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>The addressId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"address Details deleted\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"_id\": \"5eef661e364a031978f118dc\",\n\t\t\"studentRollNo\": \"3\",\n\t\t\"state\": \"M\",\n\t\t\"district\": \"Pune\",\n\t\t\"pin\": 411057,\n\t\t\"landMark\": \"sd\",\n\t\t\"houseName\": \"uih\",\n\t\t\"houseNumber\": \"jkhk\",\n\t\t\"createdAt\": \"2020-06-21T13:52:30.896Z\",\n\t\t\"updatedAt\": \"2020-06-21T13:52:30.896Z\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To delete Address Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "delete",
    "name": "DeleteApiV1AddressDeleteaddressAddressid"
  },
  {
    "type": "delete",
    "url": "/api/v1/student/deletestudent/:studentId",
    "title": "delete student details by id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentId",
            "description": "<p>The studentId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Student Details deleted\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"address\": [],\n\t\t\"_id\": \"5eef660e364a031978f118db\",\n\t\t\"rollNo\": 3,\n\t\t\"firstName\": \"Neeraj1\",\n\t\t\"class\": 6,\n\t\t\"parentContactNo\": 9874456987,\n\t\t\"createdAt\": \"2020-06-21T13:52:14.332Z\",\n\t\t\"updatedAt\": \"2020-06-21T15:20:34.796Z\",\n\t\t\"__v\": 1\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To delete Student Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "delete",
    "name": "DeleteApiV1StudentDeletestudentStudentid"
  },
  {
    "type": "get",
    "url": "/api/v1/address/getaddress/:addressId",
    "title": "get address details by id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>The addressId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Address Found\",\n\t\"status\": 200,\n\t\"data\": [\n\t\t{\n\t\t\t\"_id\": \"5eef6427b7071821fccc9e32\",\n\t\t\t\"studentRollNo\": \"10\",\n\t\t\t\"state\": \"M\",\n\t\t\t\"district\": \"Pune\",\n\t\t\t\"pin\": 411057,\n\t\t\t\"landMark\": \"sd\",\n\t\t\t\"houseName\": \"uih\",\n\t\t\t\"houseNumber\": \"jkhk\",\n\t\t\t\"createdAt\": \"2020-06-21T13:44:07.456Z\",\n\t\t\t\"updatedAt\": \"2020-06-21T13:44:07.456Z\",\n\t\t\t\"__v\": 0\n\t\t}\n\t]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To get Address Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1AddressGetaddressAddressid"
  },
  {
    "type": "get",
    "url": "/api/v1/address/getalladdress",
    "title": "Get all address details",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Address Found\",\n\t\"status\": 200,\n\t\"data\": [\n\t\t{\n\t\t\t\"_id\": \"5eef6427b7071821fccc9e32\",\n\t\t\t\"studentRollNo\": \"10\",\n\t\t\t\"state\": \"M\",\n\t\t\t\"district\": \"Pune\",\n\t\t\t\"pin\": 411057,\n\t\t\t\"landMark\": \"sd\",\n\t\t\t\"houseName\": \"uih\",\n\t\t\t\"houseNumber\": \"jkhk\",\n\t\t\t\"createdAt\": \"2020-06-21T13:44:07.456Z\",\n\t\t\t\"updatedAt\": \"2020-06-21T13:44:07.456Z\",\n\t\t\t\"__v\": 0\n\t\t},\n\t\t.....................................................\n\t]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find Address Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1AddressGetalladdress"
  },
  {
    "type": "get",
    "url": "/api/v1/student/getallstudent",
    "title": "Get all student details",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"All Student Details Found\",\n\t\"status\": 200,\n\t\"data\": [\n\t\t{\n\t\t\t\"address\": [],\n\t\t\t\"_id\": \"5eef660e364a031978f118db\",\n\t\t\t\"rollNo\": 3,\n\t\t\t\"firstName\": \"Neeraj3\",\n\t\t\t\"class\": 7,\n\t\t\t\"parentContactNo\": 9874563201,\n\t\t\t\"createdAt\": \"2020-06-21T13:52:14.332Z\",\n\t\t\t\"updatedAt\": \"2020-06-21T13:53:13.118Z\",\n\t\t\t\"__v\": 1\n\t\t},\n\t\t..................................................\n\t]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find Student Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1StudentGetallstudent"
  },
  {
    "type": "get",
    "url": "/api/v1/student/getstudent/:studentId",
    "title": "get student details by id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentId",
            "description": "<p>The studentId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Student Details Found\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"address\": [],\n\t\t\"_id\": \"5eef660e364a031978f118db\",\n\t\t\"rollNo\": 3,\n\t\t\"firstName\": \"Neeraj3\",\n\t\t\"class\": 7,\n\t\t\"parentContactNo\": 9874561203,\n\t\t\"createdAt\": \"2020-06-21T13:52:14.332Z\",\n\t\t\"updatedAt\": \"2020-06-21T13:53:13.118Z\",\n\t\t\"__v\": 1\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To get Student Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1StudentGetstudentStudentid"
  },
  {
    "type": "put",
    "url": "/api/v1/address/updateaddress/:addressId",
    "title": "update address details by id",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>The addressId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Address Details updated\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"_id\": \"5eef6427b7071821fccc9e32\",\n\t\t\"studentRollNo\": \"10\",\n\t\t\"state\": \"MH\",\n\t\t\"district\": \"Pune\",\n\t\t\"pin\": 411057,\n\t\t\"landMark\": \"sd\",\n\t\t\"houseName\": \"uih\",\n\t\t\"houseNumber\": \"jkhk\",\n\t\t\"createdAt\": \"2020-06-21T13:44:07.456Z\",\n\t\t\"updatedAt\": \"2020-06-21T13:46:50.276Z\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To update Address Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "update",
    "name": "PutApiV1AddressUpdateaddressAddressid"
  },
  {
    "type": "put",
    "url": "/api/v1/student/updatestudent/:studentId",
    "title": "update student details by id",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentId",
            "description": "<p>The studentId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"error\": false,\n\t\"message\": \"Student Details updated\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\"address\": [],\n\t\t\"_id\": \"5eef660e364a031978f118db\",\n\t\t\"rollNo\": 3,\n\t\t\"firstName\": \"Neeraj1\",\n\t\t\"class\": 6,\n\t\t\"parentContactNo\": 9874456987,\n\t\t\"createdAt\": \"2020-06-21T13:52:14.332Z\",\n\t\t\"updatedAt\": \"2020-06-21T15:20:34.796Z\",\n\t\t\"__v\": 1\n\t}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To update Student Details\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "update",
    "name": "PutApiV1StudentUpdatestudentStudentid"
  }
] });
