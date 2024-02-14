import { Schema, model } from "mongoose";

const companySchema = new Schema({
    companyType: {
        type: String,
        required: true
      },
      companyName: {
        type: String,
        required: true
      },
      websiteLink: {
        type: String,
        required: true
      },
      about: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      image: {
        type: String, 
        
      },
      numberOfEmployees: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      services: {
        type: [String], 
       
      },
      email: {
        type: String,
        required: true
      }
});

const companydata = model("Company", companySchema);
export default companydata;