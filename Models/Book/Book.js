import {Schema,models} from 'mongoose'
const book = new schema ({
    bookTitle : {
        type : String,
        required : true,        
    },
    price : {
        type : int,        
    },
    releaseDate :{
        type : Date,
    },
    cover : {
        type : Image,
        required : true,
    },
    biography :{
        type : String,
        require : true,
    },
    description :{
        type : String,
    },
    genre :{
        type : String,
    },
    publisher :{
        type : String,
    },
    amount_Stock :{
        type : int,
    },
    average_rate :{
        type : Float,
    },
    biography :{
        type : String,
    },
}),

const Book = mongoose.model('User',UserSchema);
module.exports = Book;