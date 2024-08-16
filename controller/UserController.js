const bcrypt = require("bcryptjs");
const { User } = require("../models/index");

module.exports = {
  async registerUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;

    try {
      const salt = 2;
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

      console.log("User created successfully:", user);
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error registering user:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
  },

  async editUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;

    console.log(
      firstName,
      lastName,
      profilePhoto,
      phone,
      birth,
      email,
      password
    );

    try {
      if (password) {
        const salt = 2;
        const password = bcrypt.hashSync(password, salt);
      }

      const [updated] = await User.update(
        {
          firstName,
          lastName,
          profilePhoto,
          phone,
          birth,
          email,
          password: password,
        },
        {
          where: { id: req.params.id },
        }
      );

      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        console.log("User updated successfully:", updatedUser);
        return res.json({
          message: "User updated successfully",
          user: updatedUser,
        });
      }
      throw new Error("User not found");
    } catch (error) {
      console.error("Error updating user:", error);
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
      console.error("Error fetching user:", error);
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
      console.error("Error fetching user by email:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving the user" });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return res.json({ success: true, message: "Success", user });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid password" });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      } else {
        await user.destroy();
        console.log("User deleted successfully:", user);
        return res.json({ message: "User deleted successfully" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving users" });
    }
  },
};
