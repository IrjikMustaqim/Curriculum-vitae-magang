const express = require('express')
const fs = require('fs')
const app = express();


app.set('views', './public/Curriculum Vitae')
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.static(__dirname + "/public/Curriculum Vitae"))


app.get("/", (req, res) => {
    res.render('index')
})
app.get("/admin", (req, res) => {
    res.render('admin')
})
app.post("/mboh", (req, res) => {
    console.log(req.body.hai)
})

app.get("/reg", (req, res) => {
    let c = {
        message: "kampret lu"
    }


    res.json(
        c
    )
})





app.listen(8080, () => {
    console.log('blokkkk')
});