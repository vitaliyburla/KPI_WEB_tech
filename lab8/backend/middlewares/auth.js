const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.path.includes('/auth')) return next();

    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).send('Access denied - Unauthorized!');
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return next();
    } catch (err) {
        res.clearCookie('accessToken');
        return res.status(401).send('Access denied - Unauthorized!');
    }
};
