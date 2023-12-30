import jwt from 'jsonwebtoken';
import cookie from 'cookie'

const authenticateToken = (req, res, next) => {
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const token = cookies.token;

  if (!token) {
    return new Error('No token provided');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return new Error(err);
    }

    next();
  });
};

export default authenticateToken;
