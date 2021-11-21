import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({ //On définit les champs de l'objet
    id: Number,
    name: String,
    phone: Number,
    email: String,
    address: String,
    postalZip: Number,
    city: String,
    country: String,
    region: String
});

const User = mongoose.model('User',userSchema);
export {User}; //On exporte notre module
