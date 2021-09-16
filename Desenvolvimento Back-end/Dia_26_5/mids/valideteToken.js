const validateToken = (req, res, next) => {
    const { authorization } = req.headers;

    // console.log(req.headers);
    
    const regex = /^\w+$/;
    const regexTest = regex.test(authorization)
    
    if(authorization.length !== 12 || !regexTest) return next({status: 401, message: 'invalid token'});

    return next();
};

module.exports = validateToken;
