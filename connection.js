import mongoose from 'mongoose';

import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://hexassins:<${process.env.ATLAS_PWORD}>@hexassins.hbaahi2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log(collection);
    client.close();
});

const memberSchema = new mongoose.Schema({
    id: Number,
    title: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: Number,
    branch: String,
    degree: String,
    admission_year: String,
    graduation_year: String,
    job_title: String,
    contact_number: String,
    city: String,
    country: String
});

// TODO:
const userSchema = new mongoose.Schema ({
});

const Member = mongoose.model('member', memberSchema);

export { Member };