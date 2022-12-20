const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.path.includes('/auth')) return next();

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied - Unauthorized!' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Access denied - Unauthorized!' });
    }
};
