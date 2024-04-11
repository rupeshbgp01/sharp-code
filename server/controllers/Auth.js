const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// login--------------------------------------------

exports.login = async (req, res) => {
  try {
    // fetch data from req body
    console.log(req.body);
    const { email, password } = req.body;

    // validate data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required, Please try again",
      });
    }

    // check if user exists
    const user = await User.findOne({ email });

    // if user not found with provided email
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User is not Registered with Us. Please SignUp to Continue',
      });
    }

    // generate JWT, after password matching
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      

      return res
      .status(202)
      .cookie('Name', 'Shubham Singh', {
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 100 * 1000),
              httpOnly: true,
      }).json({
        success: true,
        token,
        email,
        user,
        message: 'Logged in successfully',
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Password is incorrect',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Login Failure, please try again',
    });
  }
};

// signup-----------------------------------------

exports.signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      domain,
    } = req.body;

    // check validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !domain) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // matching password
    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Password and ConfirmPassword values do not match, please try again',
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create profile details
    const profileDetails = await Profile.create({
      gender: "",
      mobile: "",
      collage: "",
      collageLocation: "",
      course:"",
      batch:"",
      branch: "",
      certificate: "",
      linkedinProfile:"",
      githubProfile:"",
      projectData:[],
    });

    // Create the user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      domain,
      additionalDetails: profileDetails._id,
    });

    return res.status(200).json({
      success: true,
      message: 'User is registered Successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again",
    });
  }
};
