const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

app.set("view engine", "pug");
app.set("views", "views");

// letting our app use the bodyParser 
app.use(bodyParser.urlencoded( { extended: false}))

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})

router.post("/", (req, res, next) => {
// trim removes the estra spaces from first name but not in between

    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username= req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;

    // payload reutrns past entries

    var payLoad = req.body
    if(firstName && lastName && username && email && password) {

    
    }
    else {

        payLoad.console.error(Message = " Mae sure eaxh field has a vali value");
        res.status(200).render("register", payLoad);
    }

})

module.exports = router;