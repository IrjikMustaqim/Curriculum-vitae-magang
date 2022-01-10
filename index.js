const express = require('express')
let cors = require('cors')
const app = express();


app.use(cors());
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get("/reg", (req, res) => {
    res.json({ blok: "dsdsd" })

})




app.listen(8080, () => {
    console.log('blokkkk')
});