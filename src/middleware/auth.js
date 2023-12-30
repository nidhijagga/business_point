
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie'

// const authenticateToken = (req, res, next) => {
//     const cookies = cookie.parse(req.headers.get('cookie') || '');
//     const token = cookies.token;

//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: 'Forbidden' });
//     }

//     req.user = user;
//     next();
//   });
// };

// export default authenticateToken;
