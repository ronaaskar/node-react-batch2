const { router } = require("../routes/main");

const authenticateJWT = (req, res, next) => {

    const authHeader = req.header('Authorization');

    if (!authHeader) return res.status(401).json({info: "Unauthorized"});

    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) return res.status(401).json({info: "Unauthorized"});
    }
        else {req.user = user;
        next();

    });
};


module.exports = "routes";
