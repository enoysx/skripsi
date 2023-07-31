import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        uuid: req.param.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const createUsers = async (req, res) => {
  const { name, email, password, conPassword, role } = req.body;
  if (password !== conPassword)
    return res.status(400).json({ msg: "Password tidak sesuai" });
  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: "regist sukses" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateUsers = (req, res) => {};
export const deleteUsers = (req, res) => {};
