const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let studentSchema = new Schema({
  rollNo: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
  },
  class: {
    type: Number,
    required: true
  },
  parentContactNo: {
      type: Number,
      required: true,
      maxlength: 10,
      minlength: 10
  },
  address: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
},
{
    timestamps: true
}
)


mongoose.model('Student', studentSchema);