const login = (req, res) => {
  res.send("Login Successful");
};

const register = (req, res) => {
  res.send("Registration sucessful");
};

module.exports = {
  register,
  login,
};
