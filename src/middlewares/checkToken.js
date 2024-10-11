import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: "Unauthorized" });
                } else {
                    req.user = decoded;
                    next();
                }
            });
        } else {
            res.status(400).json({ message: "No token provided" });
        }
    } catch (err) {
        res.status(500).json({ message: "An error has ocurred", error: err.message });
    }
}