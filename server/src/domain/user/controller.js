import generateToken from "../../utils/generateToken.js";
import User from "./model.js";
import bcrypt from "bcrypt";

const serverErrorMsg = "An error occurred while signing up";

export async function loginHandler(req, res) {
  try {
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;

    // get the user detail with requested email
    const user = await User.findOne(
      { email: reqEmail },
      { email: 1, password: 1 }
    );
    // if user does't exist send error
    if (!user) {
      return res.json({
        success: false,
        message: "Email dosent exist please signup",
      });
    }

    // if user exist check the password match
    const passwordMatch = bcrypt.compareSync(reqPassword, user.password);

    //if password dosent match send error
    if (!passwordMatch) {
      return res.json({ success: false, message: "Credintial dosent match" });
    }

    // if password match generate token with user id
    const userIdString = user._id.toString();
    const token = generateToken(userIdString);

    // setting the token as cookie header so on every further requset it will be sent
    res.cookie("Authorization", `Bearer ${token}`, {
      secure: true,
      sameSite: "none",
      httpOnly: false,
    });

    const userInfo = await User.findOne(
      { email: reqEmail },
      { name: 1, id: 1, profile: 1 }
    );

    // sending user info
    return res.json({
      success: true,
      message: "Successfully loged in",
      user: { name: userInfo.name, profile: userInfo.profile, id: userInfo.id },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: serverErrorMsg });
  }
}

export async function signupHandler(req, res) {
  try {
    const reqEmail = req.body.email;

    const prevUser = await User.findOne({ email: reqEmail });

    if (prevUser) {
      return res.json({
        success: false,
        message: "Email already exist please login",
      });
    }

    const user = new User(req.body);
    await user.save();

    const userIdString = user._id.toString();
    const token = generateToken(userIdString);

    // setting the token as cookie header so on every further requset it will be sent
    res.cookie("Authorization", `Bearer ${token}`, {
      secure: true,
      sameSite: "none",
      httpOnly: false,
    });

    console.log(user);

    return res.json({
      success: true,
      message: "Successfully signed up",
      user: { name: user.name, profile: user.profile, id: user.id },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: serverErrorMsg,
    });
  }
}
