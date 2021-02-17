import {Schema,models} from 'mongoose'
const creditcard = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        unique : true //wac
    },
    expirationMonth :{
        type : Date,
        trim : true,
        required : true,
    },
    expirationYear :{
        type : Date,
        trim : true,
        required : true,

    },
    cardNumber :{
        type :  String,
        required : true,
        unique : true,
    },
    securityNumber :{
        type : String,
        required : true,
        
    }
}),

const CreditCard = mongoose.model('CreditCard',UserSchema);
module.exports = CreditCard;

