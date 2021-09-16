const validatePassword = (password) => {
    const regex = /^\d+$/;
       
    if(password.length < 4 || password.length > 8 ) return false
    
    return regex.test(password);
}

const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email);
}

const validationLogin = (req, res, next) => {
    const { email, senha } = req.body;
    if (!validateEmail(email) || !validatePassword(senha)){
        return next({status: 401, message: "email or password is incorrect."})
    }
    return next()
};

module.exports = validationLogin;
