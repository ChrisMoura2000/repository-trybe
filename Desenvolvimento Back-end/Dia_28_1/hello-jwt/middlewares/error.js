module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      error: { message: err.details[0].message },
    });
  }

  if (err.status) {
    return res.status(err.status).json({
      error: { message: err.message, code: err.code },
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};
