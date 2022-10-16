var express = require('express')
var router = express.Router()

const {signout,signup,signin, isSignedIn} = require("../controllers/auth.js");
const { check, validationResult } = require('express-validator');

router.post("/signup",[
    check("name","Name should be at least 3 characters").isLength({min:3}),
    check("email","E-Mail is required").isEmail(),
    check("password","Password should be at least 6 characters").isLength({min:6})
],
    signup
);


router.post("/signin",[
    check("email","E-Mail is required").isEmail(),
    check("password","Password field is required").isLength({min:1})
],
    signin
);



router.get("/signout",signout);


module.exports = router;