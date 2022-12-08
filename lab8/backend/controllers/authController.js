const AuthService = require('../services/authService');

class AuthController {
    constructor() {
        this.service = new AuthService();
    }
    signIn = (req, res) => {
        try {
            const { username, password } = req.body;
            const accessToken = this.service.signIn(username, password);
            return res
                .cookie('accessToken', accessToken)
                .status(200)
                .send('Successfully signed in');
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    };
    signUp = (req, res) => {
        try {
            this.service.signUp(req.body);
            return res.status(200).send('Successfully signed up');
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    };
    signOut = (req, res) => {
        return res.clearCookie('accessToken').end();
    };
}

module.exports = AuthController;
