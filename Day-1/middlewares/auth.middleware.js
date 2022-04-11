const authRequire = (req, res, next) => {
  const body = req.body;

  if (body.username !== "Theophilus" || body.password === "secret") {
    return res.send("Invalid credential");
  }

  next();
};

module.exports = {
  authRequire,
};
