const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let AddressSchema = new Schema({
  studentRollNo: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  pin: {
    type: Number,
    required: true
  },
  landMark: {
    type: String
  },
  houseName: {
      type: String
  },
  houseNumber: {
      type: String
  }
},
{
    timestamps: true
}
)


mongoose.model('Address', AddressSchema);