const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const tokenHeader = req.headers.token || req.headers['x-auth-token'] || req.headers['x-access-token'];
  const headerValue = authHeader || tokenHeader;

  if (!headerValue || typeof headerValue !== 'string') {
    return null;
  }

  const trimmedHeader = headerValue.trim();
  const bearerMatch = trimmedHeader.match(/^Bearer\s+(.+)$/i);

  return (bearerMatch ? bearerMatch[1] : trimmedHeader).trim();
};

const findUserFromToken = async (decoded) => {
  if (decoded.id) {
    return User.findById(decoded.id).select('-password');
  }

  if (decoded.member_id) {
    return User.findOne({ member_id: decoded.member_id }).select('-password');
  }

  return null;
};

const protect = async (req, res, next) => {
  const token = getTokenFromRequest(req);

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretfamilykey');
    req.user = await findUserFromToken(decoded);

    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, user not found for this token' });
    }

    return next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Not authorized, token expired' });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Not authorized, invalid token' });
    }

    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = { protect, getTokenFromRequest };
