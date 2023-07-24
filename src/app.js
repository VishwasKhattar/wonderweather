const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');
//Public static Path
const static_path = path.join(__dirname , "../public");

//Template View Path
const view_path = path.join(__dirname , "../templates/views")

//Partials Path
const partials_path = path.join(__dirname , "../templates/partials")
//Setting up View Engine
app.set('view engine' , 'hbs');

//Setting Path of View
app.set('views' , view_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));


// Routing

app.get("/" , (req , res) => {
    res.render("index");
});

app.get("/about" , (req , res) => {
    res.render('about');
});

app.get("/weather" , (req , res) => {
    res.render('weather');
});

app.get("*" , (req , res) => {
    res.render('404Error' , {
        errorMsg: 'OOPS Page not Found'
    });
});

app.listen(port , () => {
    console.log(`Listening on ${port}`);
});