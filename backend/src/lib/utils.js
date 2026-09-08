import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"});

    res.cookie("jwt", token, {
        httpOnly: true,  //prevents client-side JavaScript from accessing the cookie, enhancing security against XSS attacks
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: "strict",    //prevents CSRF attacks by ensuring that the cookie is only sent in requests originating from the same site
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return token;
}