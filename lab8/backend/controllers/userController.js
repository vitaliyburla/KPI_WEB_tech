const UserService = require('../services/userService');

class AuthController {
    constructor() {
        this.service = new UserService();
    }
    getUserById = (req, res) => {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(403).json({ error: err.message });
            }
            const token = authorization.split(' ')[1];

            const user = this.service.getUserByToken(token);
            return res.json(user);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    };
}

module.exports = AuthController;
