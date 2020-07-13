const express=require("express")
const app=express()
app.listen(8080)
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html')
})
app.get("/api", (req, res) => {
    res.json({number:10})
})