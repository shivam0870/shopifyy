import jwt from "jsonwebtoken";
const JWT_SECRET = "dfsdvsdvdadkhdxcvbnjkoi98768trytfhgjkiu8yi7trcad"

export const sendCookie = (user, res, message, statusCode=200)=>{
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    })
        .json({
            successs: true,
            message,
        })
}