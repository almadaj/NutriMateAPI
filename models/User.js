module.exports =  (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profilePhoto: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    birth: DataTypes.INTEGER,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
  },{
    tableName: 'users'
  });

  User.associate = ({ Meal }) => {
    User.hasMany(Meal, { foreignKey: "userId"});
  }
  
  return User
};
