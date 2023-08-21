const mongoose = require('mongoose');

const { Schema } = mongoose;
const blogi = new Schema({
    AUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AUsers'  //foreign key here
    },  //now we can store user too
    
    title: {
        type: String,
        required: true
    },
    images: {
        data: Buffer,
        contentType: String
    },
    textbody: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  const blog = mongoose.model('blog',blogi);

  module.exports = blog;

