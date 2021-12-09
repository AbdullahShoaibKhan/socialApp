const express = require ("express");
const app = express();
const dotenv = require ("dotenv");
const helmet = require ("helmet");
const morgan = require ("morgan");
const mongoose = require ("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnlfiedTopology:true
    },
    ()=>{console.log("connected to MONGO");
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);

app.listen (8800,()=> {
    console.log ("backend server is connected");
});