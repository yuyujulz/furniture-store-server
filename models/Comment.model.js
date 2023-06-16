const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    message: {
        type: String, 
        required: true
    }, 
    author:{
        type: String, 
        
    },
    owner: Boolean,
    
},{
timestamps: true
})

const Comment = model("Comment", commentSchema);

module.exports = Comment;