const validation = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    return next();
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = validation;
