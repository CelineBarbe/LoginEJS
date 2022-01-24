const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = [];

const authController = {
    async handleSignup(req, res, next) {
        try {
            let login = req.body.login;
            let password = req.body.password;
            const userConnected = login;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                let userPasswordHashed = hash;
                users.push({login : userConnected, passwordHashed : userPasswordHashed});
                res.render('profile', {utilisateur: users[0].login, mdp: users[0].passwordHashed });
                });
            });
        } catch (error) {
            next(error);
        }
    },

    // async checkUser(login, password) {
    //     if (login === userConnected) {
    //        try {
    //         const match = bcrypt.compare(password, users.passwordHashed);
    //         if(match) {
    //             console.log('ça correspond bien')
    //         }
    //         } catch (error) {
    //             next(error);
    //         } 
    //     }
    // }

    
}

module.exports = authController;