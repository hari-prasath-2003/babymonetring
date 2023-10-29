import jwt from "jsonwebtoken";

import "dotenv/config";

export default function verifyUser(req, res, next) {
  try {
    const token = parseAuthCookie(req.headers.cookie);

    if (!token)
      return res.status(401).json({ message: "not Authoraised please login" });
    const userId = jwt.verify(token, process.env.JWT_TOKEN_PRIVACY_KEY);
    req.userId = userId;

    next();
  } catch (error) {
    console.log(error.message);
  }
}

function parseAuthCookie(authCookie) {
  return authCookie.replace("Authorization=Bearer%20", "");
}
