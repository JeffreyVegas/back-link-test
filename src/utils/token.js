const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_DAYS * 24 * 60 * 60 * 1000
    ),
    secure: false,
    sameSite: "lax",
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
  });
};

module.exports = sendToken;
