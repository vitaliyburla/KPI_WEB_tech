const Database = require('../database/database');
const jwt = require('jsonwebtoken');

class AuthService {
    constructor() {
        this.database = new Database();
    }
    getUserByToken = (token) => {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            const userId = data?.id;
            const { password, ...user } = this.database.getUserById(userId);
            if (user) {
                return user;
            } else {
                throw new Error('User data not found');
            }
        } catch {
            throw new Error('Invalid token');
        }
    };
}

module.exports = AuthService;
