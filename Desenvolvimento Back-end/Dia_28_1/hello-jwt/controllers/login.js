const jwt = require('jsonwebtoken');
const Joi = require('joi');
const rescue = require('express-rescue');

const errorThrower = (obj) => {
    const { message, status, code } = obj;
    const myerr = Error(message);
    myerr.status = status;
    myerr.code = code;
    throw myerr;
};

const loginSchema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(5)
      .required(),
    password: Joi.string()
      .min(5)
      .required(),
}).error(() => errorThrower({ status: 401, message: 'deu ruim', code: 'tente outra vez' }));

const mySecret = 'meuSuperSegredoSecretoByRoz';

const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

const login = rescue((req, res) => {
    const { username, password } = req.body;
    loginSchema.validate({ username, password });

    // if (error) { 
    //     return res.status(401).json({ message: 'Missing username or password' });
    // }

    const token = jwt.sign({ user: username, admin: false }, mySecret, jwtConfig);
    return res.status(200).json({ token });
});

module.exports = { login };

// {
//     const err = Error('invalid login');
//     err.isJoi = true;
//     err.code = 'meu code aqui';
//     throw err;
//   }