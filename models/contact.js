const {Schema, model} = require("mongoose");
const {handleMangooseError} = require("../helpers");
// const { shema } = require("../schemas");


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }, 
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, {versionKey: false, timestamps: true});

contactSchema.post("save", handleMangooseError);

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
};