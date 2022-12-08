const Database = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const uuid = require('uuid');

class AuthService {
    constructor() {
        this.database = new Database();
    }
    signIn = (username, password) => {
        const signInError = 'Incorrect username or password';

        const user = this.database.getUser(username);
        if (!(user && bcrypt.compareSync(password, user.password)))
            throw new Error(signInError);

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: '20s',
            }
        );

        return token;
    };
    signUp = (data) => {
        const user = new User(
            uuid.v4(),
            data.username,
            data.password,
            data.name,
            data.group,
            data.variant,
            data.phone
        );
        if (Object.values(user).some((x) => x === undefined))
            throw new Error('Incorrect sign up data');

        user.password = bcrypt.hashSync(user.password, 5);

        this.database.addUser(user);
    };
}

module.exports = AuthService;
