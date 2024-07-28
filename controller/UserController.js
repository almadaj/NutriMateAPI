const User = require("../models/User");

module.exports = {
  async registerUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;
    const user = await User.create({
      firstName,
      lastName,
      profilePhoto,
      phone,
      birth,
      email,
      password,
    });
    return res.json(user);
  },
  async editUser(req, res) {
    const { firstName, lastName, profilePhoto, phone, birth, email, password } =
      req.body;
    await User.update(
      { firstName, lastName, profilePhoto, phone, birth, email, password },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.send("User updated with sucess");
  },
  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      } else {
        return res.json(user);
      }
    } catch {
      res.status(500).json({ error: "An error occurred" });
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
    } catch {
      res.status(500).json({ error: "An error occurred" });
    }
  },
  async listUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
