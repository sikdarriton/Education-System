console.log("index123");

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

console.log("index2");
const PORT = process.env.PORT || 10000
console.log("index3");

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())
const MONGO_URL = "mongodb+srv://sikdarriton:gqWICTDo33KTxFjy@cluster-education-syste.ntqoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Education-System";

mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('open', () => console.log('open'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('reconnected', () => console.log('reconnected'));
mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
mongoose.connection.on('close', () => console.log('close'));

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))



app.use('/', Routes);

app.get('/', (req, res)=>{
    res.send("HELLOW")
})

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
