
const {User, Recipe} = require("../models/index");

module.exports = {
    async getUserMeals(req, res) {
        try {
          const userId = req.params.id
            const userMeals = await User.findByPk(userId, {
                attributes: ['id', 'firstName'],
                include: {
                    model: Recipe,
                    through: {
                      attributes: [] // Exclude attributes from UserMeals
                    }
                  }
            })

            res.json(userMeals);
          } catch (error) {
            res.status(500).json({ error: "An error occurred" });
        }
    }
}