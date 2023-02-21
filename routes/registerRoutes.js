const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const User = require('../schemas/UserSchema')
const bcrypt = require('bcrypt');

app.set("view engine", "pug");
app.set("views", "views");

// letting our app use the bodyParser 
app.use(bodyParser.urlencoded( { extended: false}))

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})
// we use aync in front of function to state async function
 router.post("/", async (req, res, next) => {
// trim removes the estra spaces from first name but not in between

    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username= req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;

    // payload reutrns past entries

    // we look for one field of either Username or email 

    var payLoad = req.body

    if(firstName && lastName && username && email && password) {
        var user = await User.findOne({ 
            $or: [
               { username: username },
               { email : email } 
            ]

        })
        .catch((error) => {
            console.log(error);

            payload.errorMessage = "somethigns went really wrong";
            res.status(200).render("register", payload);

       })
    
    }
    else {

        payload.errorMessage = "Mae sure eaxh field has a vali value";
        res.status(200).render("register", payLoad);
    }

    if(user == null) {
        // no user found

        var data = req.body

        // we hash our password with imported library
        // we salt the rounf to add reinforcmetn 10X

        data.password = await bcrypt.hash(password, 10)



        // we create use in database video 37
        User.create(data)
        .then((user) => {
            console.log(user);
        })

    }
    else {
        // User found
        if (email == user.email) {
            payload.errorMessage = "Email alreadu in use"; 
        }
        else {
            payload.errorMessage = " USername already in use";
        }
        res.status(200).render("register", payload);
    }

})

module.exports = router;