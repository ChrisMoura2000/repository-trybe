const v4 = require('uuid').v4;

const createRandomToken = (req, res, next) => {
    const myuuid = v4()
    const token = myuuid.slice(0, 12)

    return res.status(200).json({token})
};

module.exports = createRandomToken;
