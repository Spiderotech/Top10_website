import dotenv from "dotenv"
dotenv.config()

export default {

    port:"3000",
    mongo: {
        uri: "mongodb+srv://cloud:I6WmTqosSvleUe0i@cluster0.4ww5r6f.mongodb.net/Top_Companies"
    },
    ACESS_TOKEN_SCERET: process.env.ACESS_TOKEN_SCERET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    S3_ACESS_KEY: process.env.S3_ACESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,



}