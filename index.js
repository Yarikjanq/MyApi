const express = require('express')
const userRouter = require("./routes/user.router")
const { default: mongoose } = require('mongoose')
const PORT = process.env.PORT || 8080
const DB_URL = 'mongodb+srv://aroslavskubenko228:iproNH4OB5p7WEfE@cluster0.kdsxz9h.mongodb.net/?retryWrites=true&w=majority'
const app = express()
app.use(express.json())
app.use("/api", userRouter)

async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("asd", + PORT))
    } catch(e){
        console.log(e);
    }
}
startApp()

// app.listen(PORT, console.log(`server started on port ${PORT}`))