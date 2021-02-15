import {Schema,models} from 'mongoose'
const user = new Schema ({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
        unique : true,
    },
    emailAddress : {

        type : String,
        required : true,
        unique : true,
    },
    homeAddress : {
        type : String,
        required : true,
        unique : true,
    },
    homeAddressValidation : {
        type : Boolean,
        required :true,
    },
    nickname : {
        type : String,
        required : true,
        unique : true,
    },
    anonymousStatus :{
        type : Boolean,
        required : true,
    },

})

const book = new schema ({
    bookTitle : {
        type : String,
        required : true,
        
    },
    price : {
        type : int,
        
    },

})