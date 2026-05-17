import { verifyToken } from "../utils/jwt.js";
import { findUserById } from "../repositories/user.repository.js";

export async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication token is required.",
      });
    }

    const token = authHeader.split(" ")[1];
    const payload = verifyToken(token);

    const user = await findUserById(payload.userId);

    if (!user) {
      return res.status(401).json({
        message: "Invalid authentication token.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired authentication token.",
    });
  }
}
