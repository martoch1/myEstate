import mongoose from "mongoose";

const userSchema = new Schema({
    userName: {
         type: String,
         required: true,
         unique: true,
         minlength: 3,
         maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        lowercase: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{0,9}$/
   },
    password: {
        type: String,
        required: true,
         minlength: 6,
        maxlength: 10
},
}, {timestamp: true});
const User = mongoose.model('User', userSchema);

export default User;
