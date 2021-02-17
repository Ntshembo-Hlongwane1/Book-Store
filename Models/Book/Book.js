import {Schema,models} from 'mongoose'
const book = new schema ({
    bookTitle : {
        type : String,
        required : true,        
    },
    price : {
        type : int, 
        required : true       
    },
    releaseDate :{
        type : Date,
    },
    coverImage : {
        type : Image,
        required : true
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
        type : Number,
    },
    average_rate :{
        type : Number,
    },
    biography :{
        type : String,
    },
}),

const Book = mongoose.model('Book',UserSchema);
module.exports = Book;