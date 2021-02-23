const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        
        const token = req.header('Authorization');

        if(!token) {
            return res.status(400).json({ msg: 'Invalid Authentification' })
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) {
                return res.status(400).json({ msg: 'Invalid Authorization' })
            }

            req.user = user;

            next()
        })

    } catch (error) {
        alert(error.response.data.msg)
    }
}

module.exports = auth