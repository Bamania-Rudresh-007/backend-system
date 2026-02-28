// require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
})
import connectDB from "./db/index.js";


connectDB() 


// const app = express()

// ;( async () => {
//     // process.env.PORT
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",  (err) => {
//             throw new Error(err);
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         throw new Error(error);
//     }
// })()