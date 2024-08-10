const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
  async registerUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;

    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const user = await User.create({
        firstName,
        lastName,
        profilePhoto,
        phone,
        birth,
        email,
        password: hashedPassword,
      });

      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
  },

  async editUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;

    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await User.update(
        {
          firstName,
          lastName,
          profilePhoto,
          phone,
          birth,
          email,
          password: hashedPassword,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      return res.send("User updated with success");
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    }
  },

  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      } else {
        return res.json(user);
      }
    } catch (error) {
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async getUserByEmail(req, res) {
    const { email } = req.params;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      } else {
        return res.json(user);
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving the user" });
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      } else {
        await user.destroy();
        return res.send("User deleted with success");
      }
    } catch (error) {
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving users" });
    }
  },
};
