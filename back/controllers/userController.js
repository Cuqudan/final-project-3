import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.userAuth(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ msg: "Email veya şifre hatalı" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({ allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ msg: "Kullanıcı zaten mevcut" });
      return;
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name,
      });
    } else {
      res.status(400).json({ msg: "Kullanıcı oluşturulamadı" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ msg: "Hesaptan çıkış yapıldı" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { loginUser, registerUser, logoutUser, getUser, deleteByUser };
