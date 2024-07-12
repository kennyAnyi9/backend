const Signup = (req, res) => {
  console.log("signup route");
};

const Login = (req, res) => {
  const { fullname, username, password, confirmPassword } = req.body;
};

const Logout = (req, res) => {
  console.log("logout route");
};

export { Login, Signup, Logout };
