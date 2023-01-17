const bcrypt = require("bcryptjs");
const localStrategy = require('passport-local').Strategy;

const connection = require("./database");

module.exports = function(passport){
    passport.use( "local", 
        new localStrategy({ usernameField: 'email', passwordField: 'password' }, (username, password, done) => {
            const sql = "SELECT * FROM users WHERE email = ?";
            connection.query(sql, [username], (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare( password, user[0].password, ( err, result ) =>{
                    if( result === true ){
                        return done(null, user[0]);
                    }else{
                        return done(null, false)
                    }
                })
            });
        })
    );

    passport.serializeUser(( user, cb ) => {
        cb( null, user.id )
    });
    passport.deserializeUser((id, cb) => {
        const sql = "SELECT * FROM users WHERE id = ?";
        connection.query(sql, [id], (err, user) => {         
            const userInfo = {
                name: user[0].name
            } 
            cb(err, userInfo)
            // cb( err, user[0] ) // Return all user information
        });
    })
}