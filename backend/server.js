const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser  = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const connection = require("./database");

const SECRET = "secretcode";
const PORT = 3003;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser(SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Routes
app.post("/login", ( req, res, next) => {
    passport.authenticate("local", (err,user,info) => {
        if( err ) throw err;
        if(!user) res.status(404).send("No user exists");
        else{
            req.logIn(user, err => {
                if(err) throw err;
                res.send("Successfully Authenticated");
            })
        }
    })(req, res, next) 
})

app.post("/register", (req, res) =>{

    bcrypt.hash( req.body.password, 10 )
    .then( hash => insert(hash) )

    function insert(hash){
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash
        };
        const sql = 'INSERT INTO users SET ?';
        connection.query(sql, user, (err, results) => {
          if (err) throw err;
          res.status(201).send("User created");
        });
    }

})
app.get("/getUser", (req, res) =>{
    res.send(req.user);
}) 

// Start Server
app.listen( PORT, () => {
    console.log("Server running on port "+PORT);
})